var Flight=function(){


	this.data={
		number:null,
		origin:null,
		destination:null,
		departs:null,
		arrives:null,
		actualDepart:null,
		actualArrive:null
	};

	//definició de funcions o métodes
	//omplir atributs
/**
*	fill: omplir atributs de Flight
*
**/

	this.fill=function(info){


		for(var prop in this.data){ //prop es cada uno de los segmentos de value(la array)

				if(this.data[prop]!=='undefined'){ // !== no identicos en valor y en tipo de dato 
					this.data[prop]=info[prop];
				}

			};

	}



		

 //array/manejador de funciones (punteros a funciones)

		this.triggerDepart=function(){ //actualiza las fechas de salida
				this.data.actualDepart=Date.now();
		};  //como es una entrada del array ponemos coma
		this.triggerArrive=function(){
				this.data.actualArrive=Date.now();
		};
		this.getInformation=function(){
				//devuelve el vector entero
				return this.data;
		};
};

module.exports=Flight;