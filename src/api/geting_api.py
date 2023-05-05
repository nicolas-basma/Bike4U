import requests
import json
from api.models import db, Parts
import openai
import os
from time import sleep
from flask import jsonify

GPT = os.getenv("OPENAI_API_KEY")
ORGANIZATION = os.getenv("ORGANIZATION")


def use_gpt3(message):
    response = openai.Completion.create(engine="text-davinci-003",
                                        prompt=message,
                                        temperature=0.7,
                                        max_tokens=1188,
                                        top_p=1,
                                        frequency_penalty=0,
                                        presence_penalty=0
                                        )
    return response['choices'][0]['text']


def get_part():
    url = "https://bpartcomponents.com/wp-json/wp/v2/product/"
    response = requests.get(url)
    response.encoding = 'utf-8-sig'
    data = json.loads(response.text)
    list_data = [{"description": element['content']['rendered'],
                  'title':element['title']['rendered'], "link": element['link']} for element in data]
    diccionarios = []
    ejemplo = {'tamaño': '', 'link': '', 'tittle': ''}
    for element in list_data:
        message = f"""
        Rellena el siguiente objeto JSON de ejemplo con la informacion que te paso acontinuacion.
        Solo quiero que devuelvas un objeto como el del ejemplo rellenada con la informacion mas abajo sin saltos de linea:
        Ejemplo:
        {ejemplo}
        Informacion:{element}
        """
        part = use_gpt3(message)
        print(part)
        diccionarios.append(part)
        sleep(1)
        break
    return diccionarios
