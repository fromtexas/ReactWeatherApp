var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=ed233e64e2814994ef28fcc821622ae9&units=metric';
//ed233e64e2814994ef28fcc821622ae9
module.exports = {
    getTemp: function (location){
       var encodedLocation = encodeURIComponent(location);
       var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; 
        
      return axios.get(requestUrl).then(function(res){
         // debugger;
         if(res.data.cod && res.data.message){
             throw new Error(res);
             
           
         }else{
          return res.data.main.temp;   
         }  
       },function(res){
         throw new Error(res);
         
       }) 
    }
}