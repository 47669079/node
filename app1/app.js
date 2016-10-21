var flight=require('./vols'); //require es lo que usamos para utilizar un modulo
//podemos acceder a las funciones de la carpeta vols

flight.setOrigin('Barcelona');
flight.setDestination('London');

flight.setNumber(123);


console.log(flight.getInfo()); 