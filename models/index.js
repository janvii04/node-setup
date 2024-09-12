const Sequelize = require("sequelize")
const sequelize = require("../DBconnection").sequelize
module .exports ={
useModels: require("./userModel")(Sequelize,sequelize,Sequelize.DataTypes)
}
