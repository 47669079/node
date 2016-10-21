var Flight=require('./vols');

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

var pl1=new Flight(); //Crear avió

pl1.fill(pl_data1);

pl1.triggerDepart(); //sortida de l'avio

console.log(pl1.getInformation());

var pl2=new Flight(); //Crear avió

pl2.fill(pl_data2);

pl2.triggerArrive(); //sortida de l'avio

console.log(pl2.getInformation());