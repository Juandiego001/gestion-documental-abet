// Servidor
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const cookieParser = require("cookie-parser");

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use(cookieParser());

// DB
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'masterkey',
    port: 3306,
    database: 'abet'
  });

  con.connect((err) => {
      if (err) throw err;
        console.log('DB is connected!');
  });


// Routes
const routes = require('./routes/routes.docentes');
routes(app, con);


app.listen(3000, () => {
    console.log('Server on port 3000');
});
