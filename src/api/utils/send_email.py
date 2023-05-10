from smtplib import SMTP_SSL
import os
from flask import jsonify

BIKE4U_EMAIL = os.environ.get('BIKE4U_EMAIL')
MESSAGE_FROM_BIKE4U = os.environ.get('MESSAGE_FROM_BIKE4U')
BIKE4U_NAME = os.environ.get('BIKE4U_NAME')
SUBJECT = os.environ.get('SUBJECT')

def send_email(to, message):

    HOST = "smtp.gmail.com"
    FROM_EMAIL = os.environ.get('BIKE4U_EMAIL', 'BIKE4U_EMAIL')
    TO_EMAIL = to
    PASSWORD = os.environ.get('BIKE4U_PASSWORD', 'BIKE4U_PASSWORD')
    MESSAGE = message

    smtp = SMTP_SSL(HOST)

    smtp.ehlo()

    smtp.login(FROM_EMAIL, PASSWORD)

    smtp.sendmail(FROM_EMAIL, TO_EMAIL, MESSAGE)

    smtp.quit()


def full_message(name, message):
    return f"""\
        Subject: {name} sent you a message
        
        
        {message}"""


def message_from_user(body):
    if not body["email"]:
        return jsonify({"msg": "email is missing"}), 400
    if not body['message']:
        return jsonify({"msg": "message is missing"}), 400
    message = body['message']
    name = body['name']
    user_message = full_message(name, message)
    send_email(BIKE4U_EMAIL, user_message)
    return 

def message_from_bike4u(body):
    email = body["email"]
    message_bike_4u = full_message(SUBJECT, MESSAGE_FROM_BIKE4U)
    send_email(email, message_bike_4u)
    return

    