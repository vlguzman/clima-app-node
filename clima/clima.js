const axios = require('axios');


const getClima = async(lat, lng) => {

    resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=7fb5737ad4a04b19a6e8a7da5a899b7c&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}