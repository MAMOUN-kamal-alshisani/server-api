'use strict'

class Collection{
    constructor(model){
        this.model=model
    }
    async createfood(fooddata){
        let foodRecords= await this.model(fooddata);
        return foodRecords;
    }
    async getID(id){
        let getTheRecord=await this.model.findOne({where:{id:id}});
        return getTheRecord
    }
    async getALL(){
        let getAllRecords=await this.model.findAll()
        return getAllRecords
    }
    async update (id,updateData){
        let idDataBase= await this.model.findOne({where:{id:id}})
        let UpdateTheRecord=await this.model.update(updateData)
        return UpdateTheRecord

    }

async delete(id){
    await this.model.destroy({where:{id:id}})
}
    

}
module.exports=Collection; 