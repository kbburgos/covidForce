const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// importing routes
const customerRoutes = require('./routes/customer');
const markerRoutes = require('./routes/marker');
const reportRoutes = require('./routes/report');
const semaforoRoutes = require('./routes/semaforo');
const zonaRoutes = require('./routes/zona');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '0000',
  port: 3306,
  database: 'covid_force'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);
app.use('/customer', customerRoutes);
app.use('/', markerRoutes);
app.use('/semaforo', semaforoRoutes);
app.use('/', semaforoRoutes);
app.use('/reporte', reportRoutes);
app.use('/zona', zonaRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});