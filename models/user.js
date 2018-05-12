module.exports = function (sequelize, Sequelize) {

	var User = sequelize.define('user', {

		username: {
			type: Sequelize.TEXT
		},

		password: {
			type: Sequelize.STRING,
			allowNull: false
		},

		last_login: {
			type: Sequelize.DATE
		},

		status: {
			type: Sequelize.ENUM('active', 'inactive'),
			defaultValue: 'active'
		}

	});

	User.associate = function (models) {
		User.hasOne(models.character, {
			onDelete: "cascade"
		});
		User.hasOne(models.spaceship, {
			onDelete: "cascade"
		})
	};

	return User;

}