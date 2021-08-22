'use strict';

const express =require('express');
const app = express();
app.use(express.json());

const notFoundHandler =require('./error-handlers/404');
const errorHandler =require('./error-handlers/500');
const loggerMeddleware =require('./middleware/logger');
const validator =require('./middleware/validator');
const foodRoute=require('./routes/food');
const clothesRoute=require('./routes/clothes');

app.use(foodRoute);
app.use(clothesRoute);
app.use(loggerMeddleware);
app.use(validator);



// app.post('/person',(req,res)=>{
// console.log('aaaaaaaaaaaaa',req.body);
// res.send(`hello just post body, ${req.body.name}`);


// })


app.get('/badreq',(req,res)=>{

res.send('error')


})

app.use('*',notFoundHandler);
app.use(errorHandler);

module.exports={
server: app,
start: port=>{

app.listen(port, ()=>{console.log(`server is listening on port ${port}`);})


}
}

