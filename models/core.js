module.exports=(Sequelize,DataTypes) => {
    return {
        id:{
            type:DataTypes.UUID,
            defaultValue:Sequelize.UUID,
            primaryKey:true
        }
    }
}