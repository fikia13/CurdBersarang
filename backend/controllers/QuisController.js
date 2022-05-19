import Quis from "../models/QuisModel.js";

export const getQuis = async(req, res) => {
    try{
        const response = await Quis.findAll({
            where:{
                idtopic : req.params.id
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const getQuisById = async(req, res) => {
    try{
        const response = await Quis.findOne({
            where:{
                idtopic : req.params.id,
                id : req.params.idquis
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const createQuis = async(req, res) => {
    try{
        await Quis.create(req.body);
        res.status(201).json({msg:" Telah Dibuat"});
    } catch(error){
        console.log(error.message);
    }
}

export const updateQuis = async(req, res) => {
    try{
        await Quis.update(req.body,{
            where:{
                idtopic : req.params.id,
                id : req.params.idquis
            }
        });
   
        res.status(200).json({msg:"Course Telah Diupdate"});
    } catch(error){
        console.log(error.message);
    }
}

export const destroyQuis = async(req, res) => {
    try{
        await Quis.destroy({
            where:{
                idtopic : req.params.id,
                id : req.params.idquis
            }
        });
        res.status(200).json({msg:"Course Telah Dihpist"});
    } catch(error){
        console.log(error.message);
    }
}