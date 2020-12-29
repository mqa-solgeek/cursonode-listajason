const fs = require('fs');
let listadoPorHacer = [];
const crear = (descripcion) => {
	cargarDB();
	let porHacer = {
		descripcion,
		completado: false
	}
	listadoPorHacer.push(porHacer);
	guardarDB();

	return porHacer;
}
const guardarDB = () =>{
	let data = JSON.stringify(listadoPorHacer);
	fs.writeFile(`db/data.json`, data, (err) => {
		  if (err)throw new Error('No se pudo grabar', err);
		  /*else
		  	resolve(`Se creo la tarea ${listadoPorHacer.descripcion} correctamente`)*/
		});
}

const cargarDB = () =>{
	try{
		listadoPorHacer = require('../db/data.json');
	}catch(error){
		listadoPorHacer = [];
	}

}

const getListado = () =>{
	cargarDB();
	return(listadoPorHacer);
}

const actualizar = (descripcion,completado) =>{
	cargarDB();
	let index = listadoPorHacer.findIndex(tarea =>{
		return tarea.descripcion === descripcion;
	});
	if (index >=0) {
		listadoPorHacer[index].completado = completado;
		guardarDB();
		return true;
	}else{
		return false;
	}

}

const borrar =(descripcion) =>{
 	cargarDB();
 	let nuevolistadoPorHacer = listadoPorHacer.filter(function(item) {
	    return item.descripcion !== descripcion
	})
	if (nuevolistadoPorHacer.length === listadoPorHacer.length) {
		return false;	
	}else{		
		guardarDB();
		return true;
	}

}
module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}