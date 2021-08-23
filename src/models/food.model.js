'use strict';
const Food = (Sql,DataType)=>Sql.define('food',{
foodName:{

type:DataType.STRING,
allowNull: false,
},
recipes:{
type:DataType.STRING,

},
customerId: {
    type: DataType.INTEGER,
    allowNull: false,
},
}); 

module.exports =Food;