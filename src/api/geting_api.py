import requests
import json
from api.models import db, Parts
import openai
import os
from time import sleep

GPT = os.getenv("OPENAI_API_KEY")
ORGANIZATION = os.getenv("ORGANIZATION")


def use_gpt3(message):
    response = openai.Completion.create(engine="text-davinci-003",
                                        prompt=message,
                                        max_tokens=1000)
    return response['choices'][0]['text']


def get_part():
    url = "https://bpartcomponents.com/wp-json/wp/v2/product/"
    response = requests.get(url)
    response.encoding = 'utf-8-sig'
    data = json.loads(response.text)
    list_data = [{"description": element['content']['rendered'],
                  'title':element['title']['rendered'], "link": element['link']} for element in data]
    diccionarios = []
    for element in list_data:
        message = f"""
        con esta informacion genera un diccionario de python con los siguientes datos eliminando las etiquetas html:
        title:
        link:
        model:
        size:
        buscalo dentro de este elemento: {element}
        """
        diccionarios.append(use_gpt3(message))
        sleep(1)
        # continue
    print(diccionarios)
    return diccionarios
