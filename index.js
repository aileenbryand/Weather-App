//variable to store values of the API

let weather = {
    "apiKey": "2cb0ee244fa901e33d94f3d995fcae46",
    fetchWeather: function (city) {
        fetch ("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&appid=" 
        + this.apiKey
        )
        
        .then ((response) => response.json())
        .then ((data) => console.log(data));
    },
    displayWeather: function (data) {
        const {name} = data;
        const { description} = data.weather[2];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,description,humidity,speed,temp);

    }
}


