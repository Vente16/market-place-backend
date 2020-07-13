const express = require('express');
const connectionDB = require('./config/db');
// Server
const app = express();

connectionDB();
// json
app.use(express.json({ extended: true }));

const port = process.env.port || 4000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, authorization"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS"
    );
    next();
  });

app.use('/api', require('./routes/products'));

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(port, '0.0.0.0', () => {
    // console.log(`El servicdor esta functionando por el puerto ${PORT}`);
});
