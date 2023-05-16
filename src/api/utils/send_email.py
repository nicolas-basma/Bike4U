from smtplib import SMTP_SSL
import os
from flask import jsonify

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

BIKE4U_EMAIL = os.environ.get('BIKE4U_EMAIL')
MESSAGE_FROM_BIKE4U = os.environ.get('MESSAGE_FROM_BIKE4U')
BIKE4U_NAME = os.environ.get('BIKE4U_NAME')
SUBJECT = os.environ.get('SUBJECT')

def send_email(to, message, my_subject ):

    HOST = "smtp.gmail.com"
    FROM_EMAIL = os.environ.get('BIKE4U_EMAIL', 'BIKE4U_EMAIL')
    TO_EMAIL = to
    PASSWORD = os.environ.get('BIKE4U_PASSWORD', 'BIKE4U_PASSWORD')

    #Funciona
    
    msg = MIMEMultipart()
    #msg['From'] = FROM_EMAIL
    #msg['To'] = TO_EMAIL
    msg['Subject'] = SUBJECT + ": " + my_subject
    msg.attach(MIMEText(message, 'plain'))
    
    MESSAGE = msg.as_string()
    
    smtp = SMTP_SSL(HOST, 465)
    print(PASSWORD, FROM_EMAIL)

    smtp.ehlo()

    smtp.login(FROM_EMAIL, PASSWORD)

    smtp.sendmail(FROM_EMAIL, TO_EMAIL, MESSAGE)

    smtp.quit()


def full_message(name, message):

    return f"""\
        {name} sent you a message:
        
        
        {message}"""


def message_from_user(body):
    if not body["email"]:
        return jsonify({"msg": "email is missing"}), 400
    if not body['message']:
        return jsonify({"msg": "message is missing"}), 400
    message = body['message']
    name = body['name']
    user_message = full_message(name, message)
    send_email(BIKE4U_EMAIL, user_message, "Contact")
    return 

def message_from_bike4u(body):
    email = body["email"]
    user_name = body['name']
    message = f""" Hola {user_name}, 

        {MESSAGE_FROM_BIKE4U}"""
    send_email(email, message, "Contact")
    return

def recover_pass_mail(body):
    name = body["name"]
    #lastname = body["lastname"]
    email = body["email"]
    password = body["password"]
    message = f"""Hello {name}, 

            This is your new password:  {password} 
            Remember to login and change it for one of your choice.
            
            Have a nice day!"""
    SUBJECT = "Password recovery"

    send_email(email, message, SUBJECT )

    return   