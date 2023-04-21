from smtplib import SMTP_SSL


def send_email(to, message):

    HOST = "smtp.gmail.com"
    FROM_EMAIL = "contact.bike4u@gmail.com"
    TO_EMAIL = to
    PASSWORD = "eqrgkjdmdohubnzh"
    MESSAGE = message

    smtp = SMTP_SSL(HOST)

    smtp.ehlo()

    smtp.login(FROM_EMAIL, PASSWORD)

    smtp.sendmail(FROM_EMAIL, TO_EMAIL, MESSAGE)

    smtp.quit()
