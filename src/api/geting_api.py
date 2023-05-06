import requests
import json
from api.models import db, Frame
import openai
import os
from time import sleep
from flask import jsonify
from bs4 import BeautifulSoup

GPT = os.getenv("OPENAI_API_KEY")
ORGANIZATION = os.getenv("ORGANIZATION")
BIKESTER = os.getenv("BIKESTER")
IMG_DEFAULT = os.getenv("IMG_DEFAULT")


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
def get_frame():
    url = BIKESTER + '/piezas/cuadros-horquillas/cuadros/'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    frames = soup.find_all('div', 'product-tile-inner')
    for frame in frames:
        brand = frame.find('div', class_='cyc-typo_subheader').text.strip()
        title = frame.find('div', class_='product-name').text.strip()
        image = frame.find('div', class_='product-image').find('img').get('data-src')
        if image == None:
            image = IMG_DEFAULT
        href = frame.find('a', class_='thumb-link')['href']
        link = BIKESTER + href
        new_frame = Frame(
        brand=brand,
        title=title,
        image=image,
        link=link)
        db.session.add(new_frame)
        db.session.commit()
    return jsonify({"msg": "Frames added"}), 200