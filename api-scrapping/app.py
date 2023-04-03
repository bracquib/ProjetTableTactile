import requests
from bs4 import BeautifulSoup
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'Server Works!'
  
@app.route('/repas/<string:restaurant>')
def say_hello(restaurant):
    URL = "https://www.crous-grenoble.fr/restaurant/" + restaurant
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, 'html.parser')

    meal_date = soup.find(class_="menu_date_title")

    meal_foodies = soup.find('ul', class_='meal_foodies')
    meal_date = "<h1>" + str(meal_date.text) + "</h1>"

    meal = meal_date + str(meal_foodies)

    return meal
