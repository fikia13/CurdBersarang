import { Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Quis = db.define('quis',{
    idtopic: DataTypes.INTEGER,
    name: DataTypes.STRING
},{
    freezeTableName:true
});


export default Quis;