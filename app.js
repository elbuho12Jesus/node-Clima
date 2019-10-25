const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.direccion} es ${temperatura} C°`;
    } catch {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}
getInfo(argv.direccion).then(console.log).catch(console.log);