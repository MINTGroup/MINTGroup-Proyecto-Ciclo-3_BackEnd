const express = require('express');
var ObjectID = require('mongodb').ObjectID;

const recordRoutes = express.Router();

const dataBaseOrigin = require('../dataBase/connection'); //Conectar a la base de datos

//Listar los registros de la base de datos
recordRoutes.route('/vehicle').get(async function (req, res){
    const dataBaseContent = dataBaseOrigin.getDb(); //Obtener los records (registros)

    dataBaseContent
        .collection('products')
        .find({})
        .limit(50) //Límite dependiente de lo que recuiera mostrar (Muestra sólo 50 registros)
        .toArray(function (err, result) {
            if (err) {
                res.status(400).send('Error fetching Products!');
            } else {
                res.json(result);
            }
        });
});

//Crear nuevos records
recordRoutes.route('vehicle/create')