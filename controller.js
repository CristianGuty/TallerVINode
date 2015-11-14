var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'www.xints.com.ar',
    user: 'irso',
    password: 'colon34',
    database: 'irso',
    port: 3306
});
 


exports.contactos = function(req,res){
	//request.body.nombre
//connection.query({
//	sql: 'insert into 
};

exports.usuarios = function(req,res){
	connection.query({
		sql:'select * from usuarios where nombre = ? and clave = ?',
		values:[req.params['nombre'], req.params['clave']]
	}, function (error,results,fields){
		if (error != null)
		{
			console.log ('error: '+ error);
			res.status(500).json({error: 'error interno'});  // NO deberia ser 404 sino una respuesta de error
		}
		else
		{
			if (results.length >= 1)
			{
				console.log ('usuario encontrado');
				res.status(200).json({
					msg: 'logueado correctamente'
				});
			}
			else
			{
				console.log ('usuario no encontrado');
				res.status(400).json({error:'usuario o contraseña invalidos'}); // NO deberia ser 404 sino una respuesta de error
			}
		}
	});


};
