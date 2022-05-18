import { Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Course = db.define('courses',{
    name: DataTypes.STRING,
    teacher: DataTypes.STRING
},{
    freezeTableName:true
});


export default Course;