import express from "express";
import { 
    getCourses, 
    getCourseById,
    createCourse,
    updateCourse,
    destroyCourse
} from "../controllers/CourseController.js";
import { 
    getTopics, 
    getTopicById, 
    createTopic,
    updateTopic,
    destroyTopic
} from "../controllers/TopicController.js";

import {
    getQuis,
    getQuisById,
    createQuis,
    updateQuis,
    destroyQuis

} from "../controllers/QuisController.js";


import { getQuestion, getQuestionById, createQuestion, updateQuestion , destroyQuestion} from "../controllers/QuestionController.js";

import { getChoice,getChoiceById, createChoice , updateChoice, destroyChoice} from "../controllers/ChoiceController.js";

const router = express.Router();

router.get('/courses',getCourses);
router.get('/courses/:id',getCourseById);
router.post('/courses', createCourse);
router.patch('/courses/:id',updateCourse);
router.delete('/courses/:id', destroyCourse);

router.get('/topics/:id',getTopics);
router.get('/topics/:id/:idtopic',getTopicById );
router.post('/topics/:id', createTopic);
router.patch('/topics/:id/:idtopic',updateTopic);
router.delete('/topics/:id/:idtopic',destroyTopic );

router.get('/quis/:id',getQuis);
router.get('/quis/:id/:idquis',getQuisById );
router.post('/quis/:id',createQuis);
router.patch('/quis/:id/:idquis',updateQuis);
router.delete('/quis/:id/:idquis',destroyQuis);

router.get('/ques/:id',getQuestion);
router.get('/ques/:id/:id2',getQuestionById);
router.post('/ques/:id', createQuestion);
router.patch('/ques/:id/:id2', updateQuestion);
router.delete('/ques/:id/:id2', destroyQuestion);

router.get('/choice/:id',getChoice);
router.get('/choice/:id/:id2',getChoiceById);
router.post('/choice/:id', createChoice);
router.patch('/choice/:id/:id2',updateChoice);
router.delete('/choice/:id/:id2',destroyChoice);

export default router;