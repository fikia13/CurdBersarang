import { Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Questions= db.define('questions',{
    idquis: DataTypes.INTEGER,
    name: DataTypes.STRING
},{
    freezeTableName:true
});


export default Questions;