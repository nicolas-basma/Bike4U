import requests
import json
from api.models import db, Parts
# from flask_sqlalchemy import SQLAlchemy
from bs4 import BeautifulSoup


def add_part():
    url = "https://bpartcomponents.com/wp-json/wp/v2/product/18072"
    response = requests.get(url)
    response.encoding = 'utf-8-sig'
    data = json.loads(response.text)
    data_list = BeautifulSoup(
        data['content']['rendered'], 'html.parser').find_all('li')
    response = {}
    for element in data_list:
        try:
            value = element.__repr__().split(':')[1].split('</li>')[0]
            key = element.__repr__().split(':')[0].split('<li>')[1]
            response[key] = value
        except:
            pass
    # guardamos la informacion en una tabla Part de nuestra base de datos
    print(type(data['title']['rendered']))
    new_part = Parts(model=data['title']['rendered'],
                     marca=data['title']['rendered'],
                     description=data['title']['rendered'],
                     category=data['title']['rendered'],
                     part=data['title']['rendered'])
    db.session.add(new_part)
    db.session.commit()

    print(new_part)
    return new_part.serialize()
