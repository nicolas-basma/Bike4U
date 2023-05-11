import bcrypt
from flask import jsonify, request
from api.models import db, User, Bike, BikePart
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

import string
import random

#funcion para agregar usuarios nuevos
def add_user(body):
    coded_password = bcrypt.hashpw(body["password"].encode(
        "utf-8"), bcrypt.gensalt())
    user = User(
        name=body["name"],
        lastname=body["lastname"],
        email=body["email"],
        size=body["size"],
        weight=body["weight"],
        bike_type=body["bike_type"],
        password=coded_password,
        is_active=False
    )
    try:
        db.session.add(user)
        db.session.commit()
    except:
        return jsonify({"msg": "el email ya esta registrado bobo"}), 403
    return jsonify(user.serialize()), 200

#funcion para loguearse en la pagina web
def login(body):
    msj_error = "Usuario o contraseña incorrectos"
    try:
        body["email"]
        body["password"]
    except:
        return jsonify({"msg": "todos los campos son obligatorios"}), 400
    user = User.query.filter_by(email=body["email"]).first()
    if user == None:
        return jsonify({"msg": msj_error}), 401
    user_info = user.serialize_token_info()
    if not user.verify(body["password"].encode("utf-8")):
        return jsonify({"msg": msj_error}), 401
    login_token = create_access_token(identity=user_info)
    return jsonify({"login_token": login_token, "Name": user_info["name"]}), 200
    
#funcion para obtener todos los usuarios de la base de datos
def get_all_users():
    all_users = User.query.all()
    list_of_users = []
    if all_users == None:
        return jsonify({"msg": "no hay usuarios en la base de datos"}), 404
    for user in all_users:
        list_of_users.append(user.serialize())
    return jsonify(list_of_users), 200

#funcion para obtener un usuario mediante su ID
def get_user_by_id(id):
    user = User.query.filter_by(id=id).first()
    if user == None:
        return jsonify({"msg": "El usuario no existe"}), 404
    return jsonify(user.serialize()), 200

def get_user_by_email(email):
    user = User.query.filter_by(email=email).first()
    if user == None:
        return jsonify({"msg": "El usuario no existe"}), 404
    return user

#funcion para borrar un usuario mediante su ID
def delete_user(id):
    user_to_delete = User.query.filter_by(id=id).first()
    if user_to_delete == None:
        return jsonify({"msg": "El usuario no existe"}), 404
    db.session.delete(user_to_delete)
    db.session.commit()
    return jsonify(user_to_delete.serialize()), 200

#funcion para editar un usuario mediante su ID
def edit_user(id, body):
    user_to_edit = User.query.filter_by(id=id).first()
    if user_to_edit == None:
        return jsonify({"msg": "El usuario no existe"}), 404
    user_to_edit.name = body["name"]
    user_to_edit.lastname = body["lastname"]
    user_to_edit.email = body["email"]
    # new_password = bcrypt.hashpw(
    #     body["password"].encode("utf-8"), bcrypt.gensalt())
    # user_to_edit.password = new_password
    user_to_edit.size = body["size"]
    user_to_edit.weight = body["weight"]
    user_to_edit.bike_type = body["bike_type"]
    db.session.commit()
    user_info = user_to_edit.serialize()
    login_token = create_access_token(identity=user_info)
    return jsonify({"login_token": login_token, "Name": user_info["name"], "User_info": user_info}), 200

#funcion para editar la contraseña de un usuario mediante su ID
def edit_user_password(id, body):
    user_to_edit = User.query.filter_by(id=id).first()
    if user_to_edit == None:
        return jsonify({"msg": "El usuario no existe"}), 404
    new_password = bcrypt.hashpw(
        body["password"].encode("utf-8"), bcrypt.gensalt())
    user_to_edit.password = new_password
    db.session.commit()
    return jsonify({"msg": "Password changed successfully"}), 200

#funcion para agregar favoritos a un usuario mediante su ID
def add_favorite_bike(user_id, bike_id):
    user = User.query.filter_by(id=user_id).first()
    if user == None:
        return jsonify({"msg": "El usuario no existe"}), 404
    bike = Bike.query.filter_by(id=bike_id).first()
    if bike == None:
        return jsonify({"msg": "La bici no existe"}), 404
    user.favorites_bikes.append(bike)
    db.session.commit()
    return jsonify({"msg": "Bike added to favorites"}), 200
#funcion para eliminar favoritos a un usuario mediante su ID
def delete_favorite_bike(user_id, bike_id):
    user = User.query.filter_by(id=user_id).first()
    if user == None:
        return jsonify({"msg": "El usuario no existe"}), 404
    bike = Bike.query.filter_by(id=bike_id).first()
    if bike == None:
        return jsonify({"msg": "La bici no existe"}), 404
    user.favorites_bikes.remove(bike)
    db.session.commit()
    return jsonify({"msg": "Bike removed from favorites"}), 200

#funcion para agregar partes favoritas a un usuario mediante su ID
def add_favorite_part(user_id, part_id):
    user = User.query.filter_by(id=user_id).first()
    if user == None:
        return jsonify({"msg": "El usuario no existe"}), 404
    part = BikePart.query.filter_by(id=part_id).first()
    if part == None:
        return jsonify({"msg": "La parte no existe"}), 404
    user.favorites_parts.append(part)
    db.session.commit()
    return jsonify({"msg": "Part added to favorites"}), 200
#funcion para eliminar partes favoritas a un usuario mediante su ID
def delete_favorite_part(user_id, part_id):
    user = User.query.filter_by(id=user_id).first()
    if user == None:
        return jsonify({"msg": "El usuario no existe"}), 404
    part = BikePart.query.filter_by(id=part_id).first()
    if part == None:
        return jsonify({"msg": "La parte no existe"}), 404
    user.favorites_parts.remove(part)
    db.session.commit()
    return jsonify({"msg": "Part removed from favorites"}), 200

#funcion para obtener los favoritos de un usuario mediante su ID
def get_user_favorites(user_id):
    user = User.query.filter_by(id=user_id).first()
    if user == None:
        return jsonify({"msg": "El usuario no existe"}), 404
    user_favorites = user.serialize_favorites()
    return jsonify(user_favorites), 200

