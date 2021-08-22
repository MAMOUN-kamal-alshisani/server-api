'use strict';

const clothesModel = (sequelize,DataType)=>sequelize.define('clothes',{
    clothesName:{

        type:DataType.STRING,
        allowNull: false,
        },

clothesType:{
type:DataType.STRING,
},

color:{
type:DataType.STRING,
allowNull: false,
},
}); 

module.exports =clothesModel;