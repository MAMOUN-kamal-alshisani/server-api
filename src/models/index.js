'use strict';
// "postgres://postgres:0000@localhost:5432/postgres";
require('dotenv').config();
const POSTGRES_URI =process.env.DATABASE_URL
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food.model');
const clothes = require('./clothes.model')
const customer= require('./customer.model')
const Collection=require('./collection')

let Sql = new Sequelize(POSTGRES_URI, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
});
const customerModel = customer(Sql, DataTypes);
const foodModel = food(Sql, DataTypes);
const clothesModel = clothes(Sql, DataTypes);

customerModel.hasMany(foodModel, { sourceKey: 'id', foreignKey: 'customerId' });
customerModel.hasMany(clothesModel, { sourceKey: 'id', foreignKey: 'customerId' });
foodModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id' });
clothesModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id' });

const customercollection = new Collection(customerModel);
const clothescollection = new Collection(clothesModel);
const foodcollection = new Collection(foodModel);
module.exports={

db:Sql,
food:foodcollection,
Clothes:clothescollection,
Customer:customercollection
}