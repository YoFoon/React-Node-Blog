import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

//var routes = require('./lib/router');
import Routers from './router/index';

let app = express();

app.set('port', process.env.PORT || 8000);
//app.set('views', path.join(__dirname, 'view'));

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

Routers(app);

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
