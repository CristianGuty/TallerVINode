//exports.contactos = function(req,res){
	//request.body.nombre
//connection.query({
//	sql: 'insert into 
//};
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'www.xints.com.ar',
    user: 'irso',
    password: 'colon34',
    database: 'irso',
    port: 3306
});

exports.PedirUsuarios = function(req,res){
	var query = {
		sql:"select * from usuarios where nombre = ? and clave = ? and nivel = ?",
		values:[req.param('nombre'), req.param('clave'), req.param('nivel')]
	};
	console.log(query);
	var result = function (error,results,fields){
		if (error)
		{
			console.log ('error: '+ error);
			res.status(500).json({error: 'Error en la conexion'});  // NO deberia ser 404 sino una respuesta de error
		} 
		else
		{
			if (results.length >0)
			{
				console.log ('usuario encontrado');
				res.status(200).json({user: results});
			}
			else
			{
				console.log ('Usuario no encontrado');
				res.status(400).json({error:'usuario o contraseña invalidos'}); // NO deberia ser 404 sino una respuesta de error
			}
		}
	};
	connection.query(query, result);
};

exports.PedirTodos = function(req,res){
	var query = {
		sql:"select * from usuarios",
		//values:[req.param('nombre'), req.param('clave'), req.param('nivel')]
	};
	console.log(query);
	var result = function (error,results,fields){
		if (error)
		{
			console.log ('error: '+ error);
			res.status(500).json({error: 'Error en la conexion'});  
		} 
		else
		{
			if (results.length >0)
			{
				console.log ('usuarios encontrados');
				res.status(200).json({user: results});
			}
			else
			{
				console.log ('Usuarios no encontrados');
				res.status(400).json({error:'No se encontraron usuarios'}); 
			}
		}
	};
	connection.query(query, result);
};
exports.AgregarUsuarios = function(req,res){
	var query = {
		sql:"Insert into usuarios(nombre, clave, nivel) values (?,?,?)",
		values:[req.body.nombre, req.body.clave, req.body.nivel]
		};
	console.log(query);
		
	var result = function (error,results,fields){
		if (error)
		{
			console.log ('error: '+ error);
			res.status(500).json({error: 'Error en la conexion'});  
		} 
		else
		{
			console.log ('usuario ingresado correctamente');
			res.status(200).json
			({
				user: results,
				msg: 'Nuevo usuario ingresado'
			});
		}
	};connection.query(query, result);
};

exports.ActualizarUsuarios = function(req,res){
	var query = {
		sql:"Update usuarios set nombre = ?, clave = ?, nivel = ? where usuario = ?",
		values:[req.body.nombre, req.body.clave, req.body.nivel, req.body.usuario]
		};
	console.log(query);
	
	var result = function (error,results,fields){
		if (error)
		{
			console.log ('error: '+ error);
			res.status(500).json({error: 'Error en la conexion'});  
		} 
		else
		{
			console.log ('Usuario Actualizado');
				res.status(200).json({user: results,
					msg: 'Usuario Actualizado'
				});
		}
	};connection.query(query, result);
};

exports.BorrarUsuarios = function(req,res){
	var query = {
		sql:"Delete from usuarios where usuario = ?", 
		values:[req.body.usuario]
		};
	console.log(query);
		
	var result = function (error,results,fields){
		if (error)
		{
			console.log ('error: '+ error);
			res.status(500).json({error: 'Error en la conexion'});  
		} 
		else
		{
			console.log ('Usuario Eliminado');
				res.status(200).json({user: results,
					msg: 'Usuario eliminado con exito'
				});
		}
	};connection.query(query, result);
};

exports.RecursosUsuarios = function(req,res){
	var recursos = {
					'POST':'usuario: Ingresa usuario. parametros: nombre,clave,nivel',                
        			'GET':'usuarios: Lista de usuarios',            
        			'GET':'usuario: Realiza Login. parametros: nombre,clave',            
        			'PUT':'usuario: Actualiza usuario. parametros: usuario, nombre,clave,nivel',                
        			'DELETE':'usuario: Borra usuario. parametros: usuario'
        			}
        		res.status(200).json(recursos);
	}