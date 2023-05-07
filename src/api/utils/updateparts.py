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
FRAME_MTB_S = os.getenv("FRAME_MTB_S")
FRAME_MTB_M = os.getenv("FRAME_MTB_M")
FRAME_MTB_L = os.getenv("FRAME_MTB_L")
WHEEL_MTB_S = os.getenv("WHEEL_MTB_S")
WHEEL_MTB_M = os.getenv("WHEEL_MTB_M")
WHEEL_MTB_L = os.getenv("WHEEL_MTB_L")
#ROAD#
FRAME_ROAD_S = os.getenv("FRAME_ROAD_S")
FRAME_ROAD_M = os.getenv("FRAME_ROAD_M")
FRAME_ROAD_L = os.getenv("FRAME_ROAD_L")
WHEEL_ROAD_S = os.getenv("WHEEL_ROAD_S")
WHEEL_ROAD_M = os.getenv("WHEEL_ROAD_M")
WHEEL_ROAD_L = os.getenv("WHEEL_ROAD_L")
#URBAN#
FRAME_URBAN_S = os.getenv("FRAME_URBAN_S")
FRAME_URBAN_M = os.getenv("FRAME_URBAN_M")
FRAME_URBAN_L = os.getenv("FRAME_URBAN_L")
WHEEL_URBAN_S = os.getenv("WHEEL_URBAN_S")
WHEEL_URBAN_M = os.getenv("WHEEL_URBAN_M")
WHEEL_URBAN_L = os.getenv("WHEEL_URBAN_L")


#funcion para indroducir los datos de los frames en la base de datos
def get_part(part, terrain, size):
    bike_parts_url = {
        "FRAME": {
            "MTB": {
                "S": FRAME_MTB_S,
                "M": FRAME_MTB_M,
                "L": FRAME_MTB_L
            },
            "ROAD": {
                "S": FRAME_ROAD_S,
                "M": FRAME_ROAD_M,
                "L": FRAME_ROAD_L
            },
            "URBAN": {
                "S": FRAME_URBAN_S,
                "M": FRAME_URBAN_M,
                "L": FRAME_URBAN_L
            }
        },
        "WHEELS": {
            "MTB": {
                "S": WHEEL_MTB_S,
                "M": WHEEL_MTB_M,
                "L": WHEEL_MTB_L
            },
            "ROAD": {
                "S": WHEEL_ROAD_S,
                "M": WHEEL_ROAD_M,
                "L": WHEEL_ROAD_L
            },
            "URBAN": {
                "S": WHEEL_URBAN_S,
                "M": WHEEL_URBAN_M,
                "L": WHEEL_URBAN_L
            }
        }
    }

    if part not in bike_parts_url or terrain not in bike_parts_url[part] or size not in bike_parts_url[part][terrain]:
        return jsonify({"msg": "Frame type not found"}), 404

    url = BIKES + bike_parts_url[part][terrain][size]
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    parts = soup.find_all('div', 'product-item-extended')
    for item in parts:
        title = item.find('h3', class_='headline').text.strip()
        image = item.find('div', class_='product-image').find('img').get('data-src')
        if image == None:
            image = IMG_DEFAULT
        href = item.find('a', class_='product-item')['href']
        link = "https://www.bike-components.de" + href
        new_part = BikePart(
        part=part,
        terrain=terrain,
        size=size,
        title=title,
        image=image,
        link=link
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