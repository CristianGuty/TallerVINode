// Get the packages we need
var express = require('express');

// Create our Express application
var app = express();

// Use environment defined port or 3000
var port = process.env.PORT || 80;

// Create our Express router
var router = express.Router();

//require('./Connection')(app);
require('./routes')(app);

// Initial dummy route for testing
// http://localhost:80/api
// Start the server
app.listen(port);
console.log('Escuchando puerto: ' + port);

/*var connection = mysql.createConnection({
   host: 'www.xints.com.ar',
   user: 'irso',
   password: 'colon34',
   database: 'irso',
   port: 3306
});
connection.connect(function(error){
   if(error){ 
      console.log ('Tuviste un error negro!');
      throw error;


   }else{
      console.log('Conexion correcta.');
   }
});
connection.end();

 Register all our routes with /api
app.use('/api', router);

var buscarUsuario = function(req, res) {
  var nombre = req.query.nombre;
  var clave = req.query.clave;
  
  res.json({ message: 'te devuelvo argentina' });
};

router.get('/user', buscarUsuario);

router.post('/city', function(req, res) {
  res.json({ message: 'inserto Argentina' });
});

router.get('/camping')
*/