from flask import Flask,request
import urllib.request
from bs4 import BeautifulSoup
from newsapi import NewsApiClient
import requests
app = Flask(__name__)

newsapi_apikey = '01dd9bdbb831421da729c605300ec9e2'
newsapi = NewsApiClient(api_key=newsapi_apikey)


@app.route('/agriculture/news')
def blockNews():
    #top_headlines = newsapi.get_top_headlines(sources='TechCrunch')
    top_headlines=newsapi.get_everything(q='agriculture',page=1)
    return top_headlines



@app.route('/agriculture/newsByName')
def blockNewsByName():
    tag = request.args.get('topic')
    top_headlines=newsapi.get_everything(q=tag,page=1)
    return top_headlines


@app.route('/weather')
def temp():
    api_key = "df6d7566e1ff99c3e1f91ec11f22d5e9"
    base_url = "http://api.openweathermap.org/data/2.5/weather?"

    # Give city name
    city_name = 'chennai'
    complete_url = base_url + "appid=" + api_key + "&q=" + city_name
    response = requests.get(complete_url)
    x = response.json()
    if x["cod"] != "404":
        y = x["main"]
        current_temperature = y["temp"]
        current_pressure = y["pressure"]
        current_humidity = y["humidity"]
        z = x["weather"]
        weather_description = z[0]["description"]
        celsius=current_temperature
        fahreheit= current_temperature

        post={
        #'zone': zone,
        'pressure':current_pressure,
        'humidity':current_humidity,
        'weather':z,
        'description':weather_description
        }
        return  post
    else:
        return waitForTransactionReceipt
    #time.sleep(10)


if __name__ == "__main__":
    app.run(port=3000)
