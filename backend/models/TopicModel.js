import { Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Topic = db.define('topics',{
    idcourse: DataTypes.INTEGER,
    name: DataTypes.STRING
},{
    freezeTableName:true
});


export default Topic;