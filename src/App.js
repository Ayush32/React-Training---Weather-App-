// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput]  = useState();
  const [weather, setWeather]  = useState();

  const inputHandler=(event)=> {
   setInput(event.target.value)
  }

  

  const clickHandler = (event) => {
    axios
    .get(`http://api.weatherapi.com/v1/current.json?key=a2bbd6d67d8941cc988101928221506&q=${input}&aqi=no`
    ).then((data) => {
      setWeather(data.data);
    })
    .catch((error) => {
      console.log(error)
    })

  };
  console.log(weather);

  // var x = document.getElementsByClass("Container");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }
  

  return (
    <div className="App">
      <div className="inputTag">
      <div><input id= "input" placeholder="Enter the city name" type = "text" onChange={inputHandler} /></div>
    <button onClick={clickHandler}>Search</button>
      </div>
      
      <div className = "Container">
      
      { weather &&
       ( <div>
        <div className="date"> {new Date().toDateString("en-US")}</div>
         <div className='name'><h1>{weather.location.name}</h1></div> 
     <div className='country'> <p>{weather.location.country}</p></div>
     <div className='temp'> <p>{weather.current.temp_c}<sup>&deg;C</sup>
</p></div>
     <div><img className='iconImg' src = {weather.current.condition.icon} alt ="" /></div>
     <div><p className='text'>{weather.current.condition.text}</p></div>
        </div>
      )}
      </div>
      
      
    </div>
  );
  

  
}

export default App;
