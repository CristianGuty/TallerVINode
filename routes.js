var express = require('express');
module.exports = function(app){
	var controller = require ('./controller');
	app.post('/camping/contactos',controller.contactos);
	app.get('/camping/usuarios', controller.usuarios);
	
}
