//var express = require('express');
	var bodyparser = require ('body-parser');
	module.exports = function(app){
  		app.use(bodyparser.json());
  		app.use(bodyparser.urlencoded({extended:true}));
	var controller = require ('./UsuariosController'); //       incluyo al archivo
	app.post('/camping/usuarios',controller.AgregarUsuarios);
	app.get('/camping/usuarios', controller.PedirUsuarios);
	app.get('/camping/usuarios/todos', controller.PedirTodos);
	app.put('/camping/usuarios', controller.ActualizarUsuarios);
	app.delete('/camping/usuarios', controller.BorrarUsuarios);
	app.options('/camping/usuarios', controller.RecursosUsuarios);


}
