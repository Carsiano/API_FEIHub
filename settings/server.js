const express = require('express');
const cors = require('cors');
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use('/apifeihub/users', require('../routes/users'));
        this.app.use('/apifeihub/credentials', require('../routes/credentials'));
        this.app.use('/apifeihub/follows', require('../routes/followers'));
    }
    listen(){
        this.app.listen(this.port, () => {
        console.log(`Server listening on port ${this.port}`)
        })
    }
}
module.exports = Server;