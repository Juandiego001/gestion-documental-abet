// const mysql = require('mysql');

module.exports = routes = function (app, con){
    app.get('/docentes', (req, res) => {
        con.query('SELECT * FROM DOCENTES', (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })
};