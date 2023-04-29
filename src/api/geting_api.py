import requests
import json
from api.models import db, Parts


def get_part():
    url = "https://bpartcomponents.com/wp-json/wp/v2/product/"
    response = requests.get(url)
    response.encoding = 'utf-8-sig'
    data = json.loads(response.text)
    list_data = [{"description": element['content']['rendered'],
                  'title':element['title']['rendered'], "link": element['link']} for element in data]
    print(list_data)

    return list_data
