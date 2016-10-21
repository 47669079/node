module.exports=function(info){

	var values={ //es un objeto/array

	number:null,
	origin:null,
	destination:null,
	departs: null,
	arrives:null,
	actualDepart:null,
	actualArrive:null

	};


		for(var prop in values){ //prop es cada uno de los segmentos de value(la array)

				if(values[prop]!=='undefined'){ // !== no identicos en valor y en tipo de dato 
					values[prop]=info[prop];
				}

			};

	var functions={ //array/manejador de funciones (punteros a funciones)

		triggerDepart:function(){ //actualiza las fechas de salida
				values.actualDepart=Date.now();
		},  //como es una entrada del array ponemos coma
		triggerArrive:function(){
				values.actualArrive=Date.now();
		},
		getInformation:function(){
				//devuelve el vector entero
				return values;
		}
	};

	return functions; //que nos devuelva el objeto de las funciones

};

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