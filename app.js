const argv = require('./config/yargs').argv;
const colors = require('colors');
//console.log(argv);

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
switch(comando){
	case 'crear':
	let tarea = porHacer.crear(argv.descripcion);
	console.log(tarea);
	break;
	case 'listar':
	let listado = porHacer.getListado();
	console.log('======= Por hacer ======='.green);
	for(let tarea of listado){
		console.log(tarea.descripcion);
		console.log(tarea.completado);
	}
	console.log('========================='.green);
	//console.log('mostrar por hacer');
	break;
	case 'actualizar':
		let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
		console.log(actualizado);
	break;
	case 'borrar':
		let borrar = porHacer.borrar(argv.descripcion);
		console.log(borrar);
	break;
	default:
	console.log('comando no reconocido');
	break;
}