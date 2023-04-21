from smtplib import SMTP_SSL


def send_email(message):

    HOST = "smtp.gmail.com"
    FROM_EMAIL = "pruebabike4u@gmail.com"
    TO_EMAIL = "pruebabike4u@gmail.com"
    PASSWORD = "stpsuvdctqoyzrih"
    MESSAGE = message

    smtp = SMTP_SSL(HOST)

    smtp.ehlo()

    smtp.login(FROM_EMAIL, PASSWORD)

    smtp.sendmail(FROM_EMAIL, TO_EMAIL, MESSAGE)
    print("ok")

    smtp.quit()
