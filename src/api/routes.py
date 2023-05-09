"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from .utils.send_email import message_from_user, message_from_bike4u
import os
from api.utils.get_element import get_bike, get_part, get_bike_by_id
from api.utils.user import add_user, login, get_all_users, get_user_by_id, delete_user, edit_user

api = Blueprint('api', __name__)

#sign up
@api.route("/signup", methods=["POST"])
def handle_singup():
    request_body = request.json
    user = add_user(request_body)
    return user, 200
#login
@api.route('/login', methods=['POST'])
def handle_login():
    request_body = request.json
    user = login(request_body)
    return user, 200
# GET all users
@api.route('/all-users', methods=['GET'])
def handle_all_users():
    user_list = get_all_users()
    return user_list, 200
# GET user by ID
@api.route('/user/<int:id>', methods=['GET'])
def handle_get_user(id):
    user = get_user_by_id(id)
    return user, 200
# DELETE user by ID
@api.route('/deleteuser/<int:id>', methods=['DELETE'])
def handle_delete_user(id):
    deleted_user = delete_user(id)
    return deleted_user, 200
# EDIT user
@api.route('/user/<int:id>/edit', methods=['PUT'])
def handle_edit_user(id):
    request_body = request.json
    edited_user = edit_user(id, request_body)
    return edited_user, 200
   
#send email
@api.route('/send-email', methods=['POST'])
def handle_send_email():
    request_body = request.json
    message_from_user(request_body)
    message_from_bike4u(request_body)
    return jsonify({"msg": "message sent"}), 200
    
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
   

# @api.route('/steal-bikes', methods=['POST'])
# def handle_steal_bikes():
#     response = steal_bikes("urban")
#     steal_bikes("mtb")
#     steal_bikes("road")
#     return jsonify(response), 200



# @api.route('/json-data', methods=['POST'])
# def handle_json_data():
#     data = load_from_json(bikes_json)
#     for bikes in data:
#         bike = Bike(
#             title=bikes["title"],
#             image=bikes["image"],
#             link=bikes["link"],
#             terrain=bikes["terrain"]
#         )
#         db.session.add(bike)
#         db.session.commit()
#     return jsonify({"msg": "json cargado"}), 200


# @api.route('/add-part', methods=['POST'])
# def handle_add_part():
#     data = load_from_json(parts_json)
#     for parts in data:
#         part = BikePart(
#             part = parts["part"],
#             terrain = parts["terrain"],
#             size = parts["size"],
#             title = parts["title"],
#             image = parts["image"],
#             link = parts["link"]
#         )
#         db.session.add(part)
#         db.session.commit()
#     return jsonify({"msg": "json cargado"}), 200



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


