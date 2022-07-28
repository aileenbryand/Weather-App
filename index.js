//variable to store values of the API

let weather = {
    "apiKey": "2cb0ee244fa901e33d94f3d995fcae46",
    fetchWeather: function () {
        fetch ("https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=2cb0ee244fa901e33d94f3d995fcae46"
        ).then ((response) => response.json())
        .then ((data) => console.log(data));

    }
  

}


