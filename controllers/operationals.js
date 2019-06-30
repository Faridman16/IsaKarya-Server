const db = require('../models');

module.exports = {
    getAllOP : (req, res) => {
        db.sequelize.query("SELECT * FROM OPERATIONALS").then(([results, metadata]) => {
            res.status(200).send(results);
        })
        .catch((err)=> {
            res.status(500).send({
                message: err,
            });
        });        
    },

    getOP7 : (req, res) => {
        console.log('this is called');
        db.sequelize.query("SELECT * FROM OPERATIONALS ORDER BY tanggal DESC LIMIT 7").then(([results, metadata]) => {
            res.status(200).send(results);
        })
        .catch((err)=> {
            res.status(500).send({
                message: err,
            });
        });        
    },

    addOP : (req, res) => {
        db.operational.create({
            tanggal: req.body.tanggal,
            trip: req.body.trip,
            qty: req.body.qty,
            harga: req.body.harga,
            jumlah: req.body.jumlah,
            fee: req.body.fee,
        })
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            res.status(500).send({
                message: err,
            })
        });
    }
}