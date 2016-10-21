var flight=require('./vols');

var pl_data1={
	number:847,
	origin: 'BCN',
	destination:'MAD'
};

var pl_data2={
	number:842,
	origin: 'MAD',
	destination:'BCN'
};

var pl1=flight(pl_data1); //Crear avió
pl1.triggerDepart(); //sortida de l'avio

console.log(pl1.getInformation());

var pl2=flight(pl_data2); //Crear avió
pl2.triggerArrive(); //arrivada de l'avio

console.log(pl2.getInformation());