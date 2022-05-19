import Questions from "../models/QuestionModel.js";

export const getQuestion = async(req, res) => {
    try{
        const response = await Questions.findAll({
            where:{
                idquis : req.params.id
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const getQuestionById = async(req, res) => {
    try{
        const response = await Questions.findOne({
            where:{
                idquis : req.params.id,
                id : req.params.id2
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const createQuestion = async(req, res) => {
    try{
        await Questions.create(req.body);
        res.status(201).json({msg:" Telah Dibuat"});
    } catch(error){
        console.log(error.message);
    }
}

export const updateQuestion = async(req, res) => {
    try{
        await Questions.update(req.body,{
            where:{
                idquis: req.params.id,
                id : req.params.id2
            }
        });
   
        res.status(200).json({msg:"Course Telah Diupdate"});
    } catch(error){
        console.log(error.message);
    }
}

export const destroyQuestion = async(req, res) => {
    try{
        await Questions.destroy({
            where:{
                idquis : req.params.id,
                id : req.params.id2
            }
        });
        res.status(200).json({msg:"Course Telah Dihpist"});
    } catch(error){
        console.log(error.message);
    }
}