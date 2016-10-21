var number, origin, destination;
exports.setNumber=function(num) //para funciones que queremos exportar
{

//parametre de numero per modificar el numero
	number=num;

};


exports.setOrigin=function(o){
	origin=o;

};

exports.setDestination=function(d){
	destination=d;

};

exports.getInfo=function() //get es return
{
	return{
		//quiero que retorne un objeto en javascript
		number : number, //en number tendremos el valor number
		origin : origin,
		destination : destination


		//la primera columna son los campos y la segunda son los valores
	};
};