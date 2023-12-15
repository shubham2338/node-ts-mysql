import { Sequelize } from "sequelize-typescript";
const connectDB = new Sequelize({
    database: "demo",
    dialect: "mysql",
    username:"root",
    password:"shubham2338",
    host:"localhost",
    port:3306
})
export default connectDB;