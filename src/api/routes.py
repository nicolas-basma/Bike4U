"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required,get_jwt_identity
import bcrypt

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/singup", methods=["POST"])
def handle_singup():
    request_body = request.json
    coded_password = bcrypt.hashpw(request_body["password"].encode("utf-8"), bcrypt.gensalt()) #encriptando la password
    new_user = User(
        name = request_body["name"],
        email = request_body["email"],
        password = coded_password,
        is_active = False
    )
    db.session.add(new_user)
    db.session.commit()
    return new_user.serialize()

@api.route('/login', methods=['POST'])
def handle_login():
    request_user = request.json
    user = User.query.filter_by(email=request_user["email"]).first_or_404()
    user_info = user.serialize()
    
    if  not user.verify(request_user["password"].encode("utf-8")):
        return jsonify({ "msg": "the password is incorrect!!! boludo!"}), 403
    
    login_token = create_access_token(identity=user_info)
    return jsonify({ "login_token": login_token, "Name": user_info["name"] })