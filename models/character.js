module.exports = function (sequelize, DataTypes) {
    var character = sequelize.define("character", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
        health: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10
        },
        sanity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10
        },
        charImg: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    character.associate = function (models) {
        character.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return character;
};