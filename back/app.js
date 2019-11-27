const path = require('path');

const express = require('express');
const config = require('./util/cfg');
const sequelize = require('./util/database');

const User = require('./models/user');
const Transaction = require('./models/transaction');
const Statement = require('./models/statement');
const userRoutes = require('./routers/user');
const bodyParser = require('body-parser');

const cfg = config.config;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//db relations
User.belongsToMany(Transaction, { through: Statement });
User.hasOne(Statement);
Transaction.hasMany(Statement);
//

//There's something about CORS that's goofing the code, so I gotta put this here for things to work
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//

//routes
app.use(userRoutes);
//

sequelize.sync()
    //adding a dummy user
    .then(() => {
        return User.findByPk(1);
    })
    .then(user => {
        if (!user) {
            return User.create({ 
                    name: 'TestName', 
                    login: 'admin',
                    password: 'admin',
                    email: 'test@test.com',
                    balance: 7000
                }
            );
        }
      })
    //
    //starting server
    .then(() =>{
        app.listen(cfg.serverPort);
    })
    .catch(err => console.log(err));
    //
