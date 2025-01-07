let url = "https://api.openweathermap.org/data/2.5/weather?q=";
let appid = "efdbfa48a1359d9d10acaa8af100ab01";

let searchbox = document.querySelector(".searchbox");
let searchbtn = document.querySelector(".searchbtn");
let weathericon = document.querySelector(".temp_img");

searchbtn.addEventListener("click",()=>{
    getweather(searchbox.value);

});

async function getweather(city) {
    let country = searchbox.value;
    let call = await fetch(url+country+`&appid=${appid}`);
    let data = await call.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp*0.1) + "°C";
    document.querySelector(".humi").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";

    if(data.weather[0].description == "clear sky"){
        weathericon.src= "sun.webp";
    }
    else if(data.weather[0].description == "mist"){
        weathericon.src = "wind.png";
    }
    else if(data.weather[0].description == "Rain"){
        weathericon.src = "rain.avif";
    }
    else{
        weathericon.src = "thunder.png"
    }

    document.querySelector(".weather").style.display = "block";
    searchbox.value = "";
}