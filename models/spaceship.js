module.exports = function(sequelize, DataTypes){
    var spaceship = sequelize.define("spaceship", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fuel: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100
        }
    });

    spaceship.associate = function(models){
        spaceship.belongsTo(models.character, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return spaceship;
};