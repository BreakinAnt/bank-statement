const User = require('../models/user');
const Transaction = require('../models/transaction');
const Statement = require('../models/statement');

//
exports.addTransaction = (req, res, next) => {
    let fetchedUser;
    User.findByPk(req.body.id)
        .then(user => {
            fetchedUser = user;
            return Transaction.create({})
        })
        .then(transaction => {
            res.redirect('/');
            return fetchedUser.addTransaction(transaction, {
                through:  { 
                    money_transaction: (Math.random() * 500).toFixed(2),
                    money_destiny: "Mercado Livre",
                    type_payment: "Boleto" 
                }
            })
        })
        .catch(err => console.log(err));
}
//

//
exports.getList = (req,res,next) => {
    let list = {};
    Statement.findAll({where: { userId: req.body.id }})
        .then(data => {
            list = data.map(value => value.dataValues)
        })
        .then(() => {
            res.send(list);
            res.redirect('/');
        });
}
//

//
exports.postLogin = (req, res, next) =>{
    User.findAll({ where: { login: req.body.login, password: req.body.password }})
        .then(data => {
            res.json(data[0].dataValues.id);
            res.redirect('/');
        })
}
//
