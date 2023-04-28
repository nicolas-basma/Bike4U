import requests
import json
# from bs4 import BeautifulSoup

url = "https://bpartcomponents.com/wp-json/wp/v2/product/18083"
response = requests.get(url)
response.encoding = 'utf-8-sig'
data = json.loads(response.text)
print(data['guid']['rendered'])
