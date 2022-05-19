import Course from "../models/CourseModel.js";

export const getCourses = async(req, res) => {
    try{
        const response = await Course.findAll();
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const getCourseById = async(req, res) => {
    try{
        const response = await Course.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const createCourse = async(req, res) => {
    try{
        await Course.create(req.body);
        res.status(201).json({msg:"Course Telah Dibuat"});
    } catch(error){
        console.log(error.message);
    }
}

export const updateCourse = async(req, res) => {
    try{
        await Course.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Course Telah Diupdate"});
    } catch(error){
        console.log(error.message);
    }
}

export const destroyCourse = async(req, res) => {
    try{
        await Course.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Course Telah Dihpist"});
    } catch(error){
        console.log(error.message);
    }
}