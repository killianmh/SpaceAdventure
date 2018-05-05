module.exports = function(sequelize, DataTypes){
    var character = sequelize.define("character", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        health: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100
        },
        money: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 25
        },
    });
    return character;
};