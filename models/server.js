const express = require('express')
const cors = require('cors')
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;


        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
        this.listen();
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.static('public'))
        this.app.use(express.json());

    }

    routes() {
        this.app.use('/api/usuarios', require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto', this.port)
        })
    }

}

module.exports = Server;