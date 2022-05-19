import { Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Choice = db.define('choice',{
    idquestion: DataTypes.INTEGER,
    name: DataTypes.STRING
},{
    freezeTableName:true
});


export default Choice;