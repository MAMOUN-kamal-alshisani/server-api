const foodModel = (sequelize,DataType)=>sequelize.define('food',{
foodName:{

type:DataType.STRING,
allowNull: false,
},
recipes:{
type:DataType.STRING,

},
}); 

module.exports =foodModel;