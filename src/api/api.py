import requests
from bs4 import BeautifulSoup

url = "https://www.vizi-o.es/wp-json/wp/v2/product/"
body = requests.get(url)
soup = BeautifulSoup(body.text, "html.parser")
# data = body.text

print(soup.find("p"))
