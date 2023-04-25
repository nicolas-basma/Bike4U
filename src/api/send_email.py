from smtplib import SMTP_SSL
import os


def send_email(to, message, name):

    HOST = "smtp.gmail.com"
    FROM_EMAIL = os.environ.get('BIKE4U_EMAIL', 'BIKE4U_EMAIL')
    TO_EMAIL = to
    PASSWORD = os.environ.get('BIKE4U_PASSWORD', 'BIKE4U_PASSWORD')
    MESSAGE = message + " " + name + " " + to

    smtp = SMTP_SSL(HOST)

    smtp.ehlo()

    smtp.login(FROM_EMAIL, PASSWORD)

    smtp.sendmail(FROM_EMAIL, TO_EMAIL, MESSAGE)

    smtp.quit()
