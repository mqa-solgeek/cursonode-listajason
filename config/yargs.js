const descripcion = {
							demand: true,
							alias: 'd',
							desc: 'Descripción de la tarea'
						};
const completado = {
							alias: 'c',
							default: true,
							desc: 'Esatdo de la tarea completo / incompleto'
						}						

const argv = require('yargs')
					.command('crear','Crea una tarea por hacer',{
						descripcion
					})
					.command('actualizar','Actualiza el estado de la tarea',{
						descripcion,
						completado
					})
					.command('borrar','Borra una tarea de la lista',{
						descripcion
						
					})
					.help()
					.argv;

module.exports = {
	argv
}