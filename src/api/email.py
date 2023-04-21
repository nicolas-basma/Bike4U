import smtplib

HOST = "smtp-relay.gmail.com"

PORT = 587

FROM_EMAIL = "pruebabike4u@gmail.com"

TO_EMAIL = "pruebabike4u@gmail.com"

PASSWORD = "pruebaBike4U!!!"

MESSAGE = "testing how is going"

smtp = smtplib.SMTP(HOST, PORT)

status_code, response = smtp.ehlo()
print(f"status_code: {status_code} , response : {response}")

status_code, response = smtp.starttls()
print(f"status_code: {status_code} , response : {response}")

status_code, response = smtp.login(FROM_EMAIL, PASSWORD)
print(f"status_code: {status_code} , response : {response}")

smtp.sendmail(FROM_EMAIL, TO_EMAIL, MESSAGE)

smtp.quit()
