
"use strict";

const express = require('express');
const router=express.Router();


const {clothes}=require('../models/index');
router.get('/clothes/:id', getClothes);
router.get('/clothes', getAllClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);



async function getClothes(req,res){
    const id =parseInt(req.params.id);
        let partialclothes= await clothes.findOne({where: {id:id}}) 
        res.status(200).json(partialclothes)
    };

async function getAllClothes(req, res) {
    let data = await clothes.findAll();
    res.status(200).json(data);
}

async function createClothes(req, res) {
    let newClothes = req.body;
    console.log(newClothes);
    let data = await clothes.create(newClothes);
    res.status(201).json(data);
}

async function updateClothes(req, res) {
    let id = parseInt(req.params.id);
    let reqBody = req.body;
    let found = await clothes.findOne({ where: {id: id} });
    let updatedClothes = await found.update(reqBody);
    res.status(200).json(updatedClothes);
}

async function deleteClothes(req,res) {
    let id = parseInt(req.params.id);
    let deletedClothes= await clothes.destroy({where: {id: id}});
    res.status(204).json(deletedClothes);
}

module.exports = router;