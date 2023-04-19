"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import bcrypt

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


#SingUp route to create a user

@api.route("/singup", methods=["POST"])
def handle_singup():
    request_body = request.json
    coded_password = bcrypt.hashpw(request_body["password"].encode(
        "utf-8"), bcrypt.gensalt())  # encriptando la password
    new_user = User(
        name=request_body["name"],
        email=request_body["email"],
        password=coded_password,
        is_active=False
    )
    db.session.add(new_user)
    db.session.commit()
    return new_user.serialize()

#Login route to valid the user

@api.route('/login', methods=['POST'])
def handle_login():
    request_user = request.json
    user = User.query.filter_by(email=request_user["email"]).first_or_404()
    user_info = user.serialize()

    if not user.verify(request_user["password"].encode("utf-8")):
        return jsonify({"msg": "the password is incorrect!!! boludo!"}), 403

    login_token = create_access_token(identity=user_info)
    return jsonify({"login_token": login_token, "Name": user_info["name"]})

#AllUSers to GET all users of the db

@api.route('/allusers', methods=['GET'])
def handle_all_users():
    all_user = User.query.all()
    print(all_user)
    list_of_users = []
    for user in all_user:
        list_of_users.append(user.serialize())
    return jsonify(list_of_users)


#delete user by ID
@api.route('/deleteuser/<int:id>', methods=['DELETE'])
def handle_delete_user(id):
    user_to_delete = User.query.get_or_404(id)
    db.session.delete(user_to_delete)
    db.session.commit()
    return jsonify(user_to_delete.serialize())


#edit user
@api.route('/edit/<int:id>', methods=['PUT'])
def handle_edit_user(id):
    user_to_edit = User.query.get_or_404(id)
    print(user_to_edit)
    return 'ok'
