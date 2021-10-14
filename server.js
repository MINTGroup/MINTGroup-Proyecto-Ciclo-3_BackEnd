import Express from 'express';
/*const Express = require('express');*/
import { MongoClient } from "mongodb";
/*const { MongoClient } = require('mongodb').MongoClient;*/
import dotenv from 'dotenv';
import cors from 'cors';
//TODO: import rutasProducto from '/ruta';



dotenv.config({path: './.env'});

const app = Express();
app.use(Express.json());
app.use(cors());
/*app.use(rutasProducto());*/

/*const stringConnection =
    ;*/

let connection;
const client = new MongoClient(stringConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.get('/vehiculos', (req, res)=>{})
app.post('/vehiculos/nuevo', (req, res)=>{
    console.log(req);
    const productData = req.body;
    console.log('keys: ', Object.keys(productData));
    //TODO: Modificar los product keys con base en los campos con los que finalmente quede nuestra lista de productos
    try {
        if (
            Object.keys(productData).includes('ProductName') &&
            Object.keys(productData).includes('ProductBrand') &&
            Object.keys(productData).includes('ProductModel')
        ){
            connection.collection('Product').insertOne(productData, (err, result)=>{
                if (err) {
                    res.sendStatus(500);
                    console.error(err)
                }else {
                    console.log(result)
                    res.sendStatus(200);
                }
            })
            res.sendStatus(200);
        }
    } catch {res.sendStatus(500);}
})

const main = ()=>{
    client.connect((err, db)=>{
        if(err){
            console.error('Error connecting datadase')
        }
        connection = db.db('ProductsMINT');
        console.log('Successful connection')
        return app.listen(5000, ()=>{
            console.log('Listening PORT 5000')
        })
    });
};
main()
