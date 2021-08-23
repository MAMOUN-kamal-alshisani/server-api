"use strict";

const express = require('express');
const router=express.Router();


const { customer }=require('../models/index');

router.get('/customer', getAllcustomer);
router.get('/customer/:id', getcustomer);
router.post('/customer', createcustomer);
router.put('/customer/:id', updatecustomer);
router.delete('/customer/:id', deletecustomer);


router.get('/', (req, res)=>{
    res.send('hello');
});

// router.get('/bad', (req, res)=>{
//     let number = 12;
//     number.forEach(x=> console.log(x));
//     res.send('this Bad Route');

// });



async function getcustomer(req,res){
const id =parseInt(req.params.id);
    let partialcustomer= await customer.findOne({where: {id:id}}) 
    res.status(200).json(partialcustomer)
};

async function getAllcustomer(req, res) {
    let Allcustomers= await customer.findAll();
    res.status(200).json(Allcustomers);
};

async function createcustomer(req, res) {
    let newcustomer = req.body;
    // console.log(newFood);
    let customers = await customer.create(newcustomer);
    res.status(201).json(customers);
};

async function updatecustomer(req, res) {
    let id = parseInt(req.params.id);
    let reqBody = req.body;
    let found = await customer.findOne({ where: {id: id} });
    let updatedcustomer = await found.update(reqBody);
    res.status(200).json(updatedcustomer);
};

async function deletecustomer(req,res) {
    let id = parseInt(req.params.id);
    let deletedcustomer= await food.destroy({where: {id: id}});
    res.status(204).json(deletedcustomer);
};

module.exports = router;