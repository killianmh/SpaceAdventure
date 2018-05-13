module.exports = function (sequelize, DataTypes) {
    var spaceship = sequelize.define("spaceship", {
        shields: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10
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