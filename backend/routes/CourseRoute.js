import express from "express";
import { 
    getCourses, 
    getCourseById,
    createCourse,
    updateCourse,
    destroyCourse
} from "../controllers/CourseController.js";

const router = express.Router();

router.get('/courses',getCourses);
router.get('/courses/:id',getCourseById);
router.post('/courses', createCourse);
router.patch('/courses/:id',updateCourse);
router.delete('/courses/:id', destroyCourse)

export default router;