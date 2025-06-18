
const API_KEY = `ddccdc0404eb5d03941240300c8d24e9`;
//  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
//  const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
 const form = document.querySelector("form");
 const weather = document.querySelector("#weather");
 const search = document.querySelector("#search");

 form.addEventListener("submit",
    function(event){
        console.log(search.value);
       getweather(search.value )
        
        event.preventDefault();//stop reloading when form is submit

    });

     const getweather = async(city)=>{
            // const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            // console.log(response);
            
            const data = await response.json();

            // if (data.status === 401) {
            // alert("Invalid API Key. Please check your API key.");
            // return;
  


            console.log(data);
            showWeather(data);
            
        }



        const showWeather=(data)=>{
           weather.innerHTML=`
            
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            
            <div>
                <h1>${data.main.temp} °C</h2>
                <h3>${data.weather[0].main}</h3>
            </div>
            `;
        }





