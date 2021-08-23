'use strict';

const express =require('express');
const app = express();
app.use(express.json());

const notFoundHandler =require('./error-handlers/404');
const errorHandler =require('./error-handlers/500');
const loggerMeddleware =require('./middleware/logger');
const validator =require('./middleware/validator');

const customerRoute = require('./routes/customer');
const foodRoute = require('./routes/food')
const clothesRoute = require('./routes/clothes')


app.get('/', (req, res) => {
    res.status(200).send('welcome')
})


app.use(customerRoute);
app.use(foodRoute);
app.use(clothesRoute);


// app.post('/person',(req,res)=>{
// console.log('aaaaaaaaaaaaa',req.body);
// res.send(`hello just post body, ${req.body.name}`);


// })



app.use('*',notFoundHandler);
app.use(errorHandler);

module.exports={
server: app,
start: port=>{

app.listen(port, ()=>{console.log(`server is listening on port ${port}`);})


}
}

