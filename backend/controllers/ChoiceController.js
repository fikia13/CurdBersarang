import Choice from "../models/ChoiceModel.js";

export const getChoice = async(req, res) => {
    try{
        const response = await Choice.findAll({
            where:{
                idquestion : req.params.id
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const getChoiceById = async(req, res) => {
    try{
        const response = await Choice.findOne({
            where:{
                idquestion: req.params.id,
                id : req.params.id2
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const createChoice = async(req, res) => {
    try{
        await Choice.create(req.body);
        res.status(201).json({msg:" Telah Dibuat"});
    } catch(error){
        console.log(error.message);
    }
}

export const updateChoice = async(req, res) => {
    try{
        await Choice.update(req.body,{
            where:{
                idquestion : req.params.id,
                id : req.params.id2
            }
        });
   
        res.status(200).json({msg:"Course Telah Diupdate"});
    } catch(error){
        console.log(error.message);
    }
}

export const destroyChoice = async(req, res) => {
    try{
        await Choice.destroy({
            where:{
                idquestion : req.params.id,
                id : req.params.id2
            }
        });
        res.status(200).json({msg:"Course Telah Dihpist"});
    } catch(error){
        console.log(error.message);
    }
}