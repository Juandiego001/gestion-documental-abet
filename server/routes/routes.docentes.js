const csurf = require('csurf');
const csrfProtection = csurf({ cookie: { httpOnly: true } });

module.exports = routes = function (app, con){

    // Iniciar sesión: Usuarios
    app.get('/usuarios', csrfProtection, (req, res) => {
        let consulta = `SELECT * FROM USUARIOS WHERE nombreUsuario = "${req.query.nombreUsuario}" AND contrasena = "${req.query.contrasena}"`;
        con.query(consulta, (err, result) => {
            if (err) throw err;

            if (result.length > 0) {
                result[0]['token'] = req.csrfToken();

                let consultaSemestre = 'SELECT id FROM SEMESTRES WHERE actual = 1';

                con.query(consultaSemestre, (err, result2) => {
                    if (err) throw err;

                    console.log("PASO POR AQUI");
                    console.log(result2[0]['id']);

                    if (result2.length > 0) {
                        result[0]['idSemestre'] = result2[0]['id'];
                    }

                    res.send(result)
                })
            } else {
                res.send(result);
            }
        });
    })

    // Rutas para asignaturas
    app.route('/asignaturas')

        .get()

        .post((req, res) => {

            console.log(req.query);

            // Se tiene primero que obtener el codigo de la carrera
            let codigoCarrera = `SELECT codigo FROM CARRERAS WHERE nombre = ${req.query.nombreCarrera}`;

            // let sql = `INSERT INTO ASIGNATURAS VALUES(${req.query.codigo}, ${req.query.nombre}, 
            //     ${req.query.creditos}, ${req.query.nombreUsuario, obtener codigo de carrera , 
            //     ${req.query.idSemestre}})`
        })
};