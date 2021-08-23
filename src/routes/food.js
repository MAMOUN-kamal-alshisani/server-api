"use strict";

const express = require('express');
const router=express.Router();


const { Food }=require('../models/index');

router.get('/food', getAllFood);
router.get('/food/:id', getFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);


router.get('/', (req, res)=>{
    res.send('hello');
});

// router.get('/bad', (req, res)=>{
//     let number = 12;
//     number.forEach(x=> console.log(x));
//     res.send('this Bad Route');

// });





async function getAllFood(req, res){
    let foods = await food.getAll();
    res.status(200).json(foods);
}

async function createFood(req, res){
  let food = req.body;

  let foods = await Food.create(food);
  res.status(200).json(foods);
}

async function getFood(req, res){
    let id = parseInt(req.params.id);

    let food = await food.getOne(id);
    res.status(200).json(food);
}

async function updateFood(req, res){
    let id = parseInt(req.params.id);
    let foodInfo = req.body;

    let food = await Food.update(foodInfo, id);
    res.status(200).json(food);
}

async function deleteFood(req, res){
    let id = parseInt(req.params.id);

    await Food.delete(id);
}


module.exports = router;