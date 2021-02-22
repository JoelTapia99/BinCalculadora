const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index.routers');


// motor de plantilla
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// seteo del puerto.
app.set('port', 3000);


// middelware
app.use(bodyParser.json()); // lee json's
app.use(bodyParser.urlencoded({extended: false})); //lee cuerpos de peticiones de la url

// rutas
app.use(routes);

//levantamiendo del servidor.
app.listen(app.get('port'), ()=>{
    console.log(`servidor ejecutanose en http://localhost:${app.get('port')}`);
})