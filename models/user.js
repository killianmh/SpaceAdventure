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

	return User;

}