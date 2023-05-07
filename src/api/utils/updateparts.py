import requests
import json
from api.models import db, BikePart
import openai
import os
from time import sleep
from flask import jsonify
from bs4 import BeautifulSoup

GPT = os.getenv("OPENAI_API_KEY")
ORGANIZATION = os.getenv("ORGANIZATION")
BIKES = os.getenv("BIKES")
IMG_DEFAULT = os.getenv("IMG_DEFAULT")
#MTB#
FRAME_MTB = os.getenv("FRAME_MTB")
#ROAD#
FRAME_ROAD = os.getenv("FRAME_ROAD")
#URBAN#
FRAME_URBAN = os.getenv("FRAME_URBAN")
#WHEELS#
WHEEL_S = os.getenv("WHEEL_S")
WHEEL_M = os.getenv("WHEEL_M")
WHEEL_L = os.getenv("WHEEL_L")

#funcion para indroducir los datos de los frames en la base de datos
def get_part(part, terrain, size):
    bike_parts_url = {
        "FRAME": {
            "MTB":{
                "S": FRAME_MTB,
                "M": FRAME_MTB,
                "L": FRAME_MTB
            },
            "ROAD":{
                "S": FRAME_ROAD,
                "M": FRAME_ROAD,
                "L": FRAME_ROAD
            },
            "URBAN":{
                "S": FRAME_URBAN,
                "M": FRAME_URBAN,
                "L": FRAME_URBAN
            }
        },
        "WHEELS": {
            "MTB":{
                "S": WHEEL_S,
                "M": WHEEL_M,
                "L": WHEEL_L
            },
            "ROAD":{
                "S": WHEEL_S,
                "M": WHEEL_M,
                "L": WHEEL_L
            },
            "URBAN":{
                "S": WHEEL_S,
                "M": WHEEL_M,
                "L": WHEEL_L
            }
            }
        }

    if part not in bike_parts_url or terrain not in bike_parts_url[part] or size not in bike_parts_url[part][terrain]:
        return jsonify({"msg": "Frame type not found"}), 404

    url = BIKES + bike_parts_url[part][terrain][size]
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser').find('div', class_='items')
    parts = soup.find_all('a', 'item site-hover site-product-list-item-nojs')
    all_url = []
    for href in parts:
        url = "https://www.bike-components.de" + href['href']
        all_url.append(url)
    for url in all_url:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser').find('article', class_='container module-product-detail js-site-init-functions site-module-margin-bottom')
        parts = soup.find('div', class_='row')
        imagen = parts.find("div", class_="image").find("img").get("src")
        if imagen == None:
            img = IMG_DEFAULT
        else:
            img = "https://www.bike-components.de" + imagen
        title = parts.find("li", class_="flex items-center grow md:w-full md:pt-4").find("h1").text.strip()
        url = url
        new_part = BikePart(
            part=part,
            terrain=terrain,
            size=size,
            title=title,
            image=img,
            link=url
        )
        db.session.add(new_part)
        db.session.commit()
    return jsonify({"msg": "Frames added"}), 200











# def use_gpt3(message):
#     response = openai.Completion.create(engine="text-davinci-003",
#                                         prompt=message,
#                                         temperature=0.7,
#                                         max_tokens=600,
#                                         top_p=1,
#                                         frequency_penalty=0,
#                                         presence_penalty=0
#                                         )
#     return response['choices'][0]['text']


# def get_part():
#     url = "https://bpartcomponents.com/wp-json/wp/v2/product?_fields=id,title,link,_embedded,_links&_embed"   
#     response = requests.get(url)
#     response.encoding = 'utf-8-sig'
#     data = json.loads(response.text)
#     list_data = [{'img': element['_embedded']['wp:featuredmedia'][0]['link']
#                   ,'title':element['title']['rendered'], 'link': element['link']} for element in data]
#     # diccionarios = []
#     # ejemplo = {'tamaño': '', 'link': '', 'tittle': ''}
#     # for element in list_data:
#     #     message = f"""
#     #     Rellena el siguiente objeto JSON de ejemplo con la informacion que te paso acontinuacion.
#     #     Solo quiero que devuelvas un objeto como el del ejemplo rellenada con la informacion mas abajo sin saltos de linea:
#     #     Ejemplo:
#     #     {ejemplo}
#     #     Informacion:{element}
#     #     """
#     #     part = use_gpt3(message)
#     #     print(part)
#     #     diccionarios.append(part)
#     #     sleep(1)
#     return list_data