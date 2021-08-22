"use strict";

const express = require('express');
const router=express.Router();


const { food }=require('../models/index');

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



async function getFood(req,res){
const id =parseInt(req.params.id);
    let partialFood= await food.findOne({where: {id:id}}) 
    res.status(200).json(partialFood)
};

async function getAllFood(req, res) {
    let Allfood = await food.findAll();
    res.status(200).json(Allfood);
};

async function createFood(req, res) {
    let newFood = req.body;
    // console.log(newFood);
    let foods = await food.create(newFood);
    res.status(201).json(foods);
};

async function updateFood(req, res) {
    let id = parseInt(req.params.id);
    let reqBody = req.body;
    let found = await food.findOne({ where: {id: id} });
    let updatedFood = await found.update(reqBody);
    res.status(200).json(updatedFood);
};

async function deleteFood(req,res) {
    let id = parseInt(req.params.id);
    let deletedFood= await food.destroy({where: {id: id}});
    res.status(204).json(deletedFood);
};

module.exports = router;