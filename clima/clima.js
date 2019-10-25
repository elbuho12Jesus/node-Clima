const axios = require('axios');
const getClima = async(lat, lng) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6debf0496b8c477c3782dc1cd93c0a35&units=metric`);
    return res.data.main.temp;
}
module.exports = {
    getClima
}