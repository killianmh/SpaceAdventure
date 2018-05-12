module.exports = function (sequelize, DataTypes) {
    var spaceship = sequelize.define("spaceship", {
        fuel: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100
        },
        shipImg: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    spaceship.associate = function (models) {
        spaceship.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return spaceship;
};