import requests
import json
import pymongo

def get_rating():
    url = "https://api.themoviedb.org/3/genre/movie/list?language=en"

    headers = {
        "accept": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzNjODc5MThiYjA3Mjk5ZjAzY2NlNGU0ZDA3MTFiZSIsInN1YiI6IjY1NGNhM2QzYjE4ZjMyMDBhYzNlZDFiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XANKZdfeoc99yHfwNK85aDgZnRRSHWr2x-SuFKv8s4Q"
    }

    response = requests.get(url, headers=headers)

    print(response.text)

def get_movie_by_rating():
    url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"

    headers = {
        "accept": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzNjODc5MThiYjA3Mjk5ZjAzY2NlNGU0ZDA3MTFiZSIsInN1YiI6IjY1NGNhM2QzYjE4ZjMyMDBhYzNlZDFiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XANKZdfeoc99yHfwNK85aDgZnRRSHWr2x-SuFKv8s4Q"
    }

    response = requests.get(url, headers=headers).json()

    return response["results"]

def get_genre_name():
    url = "https://api.themoviedb.org/3/genre/movie/list"

    headers = {
        "accept": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzNjODc5MThiYjA3Mjk5ZjAzY2NlNGU0ZDA3MTFiZSIsInN1YiI6IjY1NGNhM2QzYjE4ZjMyMDBhYzNlZDFiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XANKZdfeoc99yHfwNK85aDgZnRRSHWr2x-SuFKv8s4Q"
    }

    response = requests.get(url, headers=headers).json()

    return response["genres"]

def save_data(data):
    client = pymongo.MongoClient("mongodb://localhost:27017/")
    database = client["Web_system"]  # Replace 'your_database_name' with your actual database name
    collection = database["genre"]  # Replace 'your_collection_name' with your actual collection name
    
    for i in range(len(data)):
        collection.insert_one(data[i])

# data = get_movie_by_rating()
data = get_genre_name()
save_data(data)