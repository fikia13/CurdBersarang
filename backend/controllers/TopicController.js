import Topic from "../models/TopicModel.js";

export const getTopics = async(req, res) => {
    try{
        const response = await Topic.findAll({
            where:{
                idcourse : req.params.id
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const getTopicById = async(req, res) => {
    try{
        const response = await Topic.findOne({
            where:{
                idcourse : req.params.id,
                id : req.params.idtopic
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const createTopic = async(req, res) => {
    try{
        await Topic.create(req.body);
        res.status(201).json({msg:" Telah Dibuat"});
    } catch(error){
        console.log(error.message);
    }
}

export const updateTopic = async(req, res) => {
    try{
        await Topic.update(req.body,{
            where:{
                idcourse : req.params.id,
                id : req.params.idtopic
            }
        });
   
        res.status(200).json({msg:"Course Telah Diupdate"});
    } catch(error){
        console.log(error.message);
    }
}

export const destroyTopic = async(req, res) => {
    try{
        await Topic.destroy({
            where:{
                idcourse : req.params.id,
                id : req.params.idtopic
            }
        });
        res.status(200).json({msg:"Course Telah Dihpist"});
    } catch(error){
        console.log(error.message);
    }
}