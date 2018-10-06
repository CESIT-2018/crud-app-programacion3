const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require("./src/conf");

require('./src/models/Todo');
require('./src/models/Producto');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());

require('./src/routes/todoRoutes')(app);
require('./src/routes/productoRoutes')(app);

app.listen(keys.PORT, () => console.info(`Listen in ${keys.PORT}`));