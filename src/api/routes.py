"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from .utils.send_email import message_from_user, message_from_bike4u, recover_pass_mail
import os
from api.utils.get_element import get_bike, get_part, get_bike_by_id, get_all_bikes, get_all_parts
from api.utils.user import add_user, login, get_all_users, get_user_by_id, delete_user, edit_user, edit_user_password, get_user_by_email, add_favorite_bike, add_favorite_part, get_user_favorites, delete_favorite_bike, delete_favorite_part
from api.utils.updateparts import steal_bikes, load_from_json, bikes_json, parts_json
from api.models import db, Bike, BikePart

api = Blueprint('api', __name__)

#sign up
@api.route("/signup", methods=["POST"])
def handle_singup():
    request_body = request.json
    user = add_user(request_body)
    return user
#login
@api.route('/login', methods=['POST'])
def handle_login():
    request_body = request.json
    user = login(request_body)
    return user
# GET all users
@api.route('/all-users', methods=['GET'])
def handle_all_users():
    user_list = get_all_users()
    return user_list
# GET user by ID
@api.route('/user/<int:id>', methods=['GET'])
def handle_get_user(id):
    user = get_user_by_id(id)
    return user
# DELETE user by ID
@api.route('/delete-user/<int:id>', methods=['DELETE'])
def handle_delete_user(id):
    deleted_user = delete_user(id)
    return deleted_user
# EDIT user
@api.route('/edit-user/<int:id>', methods=['PUT'])
def handle_edit_user(id):
    request_body = request.json
    edited_user = edit_user(id, request_body)
    return edited_user
# EDIT user password
@api.route('/edit-user-password/<int:id>', methods=['PUT'])
def handle_edit_user_password(id):
    # This should be a protected route.
    request_body = request.json
    edited_user = edit_user_password(id, request_body)
    return edited_user
# User password recovery:
@api.route('/recover-user-password/<string:email>', methods=['GET'])
def handle_recover_pass(email):
    my_user = get_user_by_email(email)
    print(my_user)
    my_new_pass = my_user.restore_password()
    
    mail_info = {
        
        "name" : my_user.name,
        "lastname" : my_user.lastname,
        "email" : email,
        "password" : my_new_pass, 
    }

    recover_pass_mail(mail_info)

    return jsonify({"msg": "password recovered. Check email"}), 200
   
#send email
@api.route('/send-email', methods=['POST'])
def handle_send_email():
    request_body = request.json
    message_from_user(request_body)
    message_from_bike4u(request_body)
    return jsonify({"msg": "message sent"}), 200

@api.route('/bikes', methods=['GET'])
def handle_get_all_bikes():
    response = get_all_bikes()
    return jsonify(response), 200

@api.route('/parts', methods=['GET'])
def handle_get_all_parts():
    response = get_all_parts()
    return jsonify(response), 200
    
# ruta para obtener las bicicletas de diferentes tipos de terreno
@api.route('/bikes/<string:terrain>', methods=['GET'])
def handle_get_bikes(terrain):
    bikes = get_bike(terrain)
    return jsonify(bikes), 200

@api.route('/bikes/<string:terrain>/<int:id>', methods=['GET'])
def handle_get_bike_by_id(terrain, id):
    bike = get_bike_by_id(terrain, id)
    return jsonify(bike), 200

# ruta para obtener las partes de bicicletas de diferentes tipos de terreno
@api.route('/parts/<string:terrain>/<string:part>/<string:size>', methods=['GET'])
def handle_get_parts(terrain, part, size):
    parts = get_part(part, terrain, size)
    return parts
   
# ruta para agregar una bicicleta a favoritos
@api.route('/user/<int:user_id>/add-favorite-bike/<int:bike_id>', methods=['POST'])
def handle_add_favorite_bike(user_id, bike_id):
    response = add_favorite_bike(user_id, bike_id)
    return response
#Ruta para agregar una parte a favoritos
@api.route('/user/<int:user_id>/add-favorite-part/<int:part_id>', methods=['POST'])
def handle_add_favorite_part(user_id, part_id):
    response = add_favorite_part(user_id, part_id)
    return response

#ruta para obtener los favoritos de un usuario
@api.route('/user/<int:user_id>/favorites', methods=['GET'])
def handle_get_user_favorites(user_id):
    response = get_user_favorites(user_id)
    return response

#ruta para eliminar una bicicleta de favoritos
@api.route('/user/<int:user_id>/delete-favorite-bike/<int:bike_id>', methods=['DELETE'])
def handle_delete_favorite_bike(user_id, bike_id):
    response = delete_favorite_bike(user_id, bike_id)
    return response

#ruta para eliminar una parte de favoritos
@api.route('/user/<int:user_id>/delete-favorite-part/<int:part_id>', methods=['DELETE'])
def handle_delete_favorite_part(user_id, part_id):
    response = delete_favorite_part(user_id, part_id)
    return response




# @api.route('/steal-bikes', methods=['POST'])
# def handle_steal_bikes():
#     response = steal_bikes("urban")
#     steal_bikes("mtb")
#     steal_bikes("road")
#     return jsonify(response), 200



@api.route('/json-data', methods=['POST'])
def handle_json_data():
    data = load_from_json(bikes_json)
    for bikes in data:
        bike = Bike(
            title=bikes["title"],
            image=bikes["image"],
            link=bikes["link"],
            terrain=bikes["terrain"],
            description=bikes["description"]
        )
        db.session.add(bike)
        db.session.commit()
    return jsonify({"msg": "json cargado"}), 200

@api.route('/add-part', methods=['POST'])
def handle_add_part():
    data = load_from_json(parts_json)
    for parts in data:
        part = BikePart(
            part = parts["part"],
            terrain = parts["terrain"],
            size = parts["size"],
            title = parts["title"],
            image = parts["image"],
            link = parts["link"]
        )
        db.session.add(part)
        db.session.commit()
    return jsonify({"msg": "json cargado"}), 200




# @api.route('/steal-parts', methods=['POST'])
# def handle_steal_parts():
#     response = steal_parts("wheels","mtb", "s")
#     steal_parts("wheels","mtb", "m")
#     steal_parts("wheels","mtb", "l")
#     steal_parts("handlebar","mtb", "s")
#     steal_parts("handlebar","mtb", "m")
#     steal_parts("handlebar","mtb", "l")
#     steal_parts("saddle","mtb", "s")
#     steal_parts("saddle","mtb", "m")
#     steal_parts("saddle","mtb", "l")
#     steal_parts("forks","mtb", "s")
#     steal_parts("forks","mtb", "m")
#     steal_parts("forks","mtb", "l")
#     steal_parts("pedals_chain","mtb", "s")
#     steal_parts("pedals_chain","mtb", "m")
#     steal_parts("pedals_chain","mtb", "l")
#     return response


