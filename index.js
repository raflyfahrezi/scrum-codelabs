const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const routes = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routes);

app.listen(3000, () => {
    console.log('Server is running on port ' + 3000);
    console.log('Visit http://localhost:' + 3000 + '/');
});