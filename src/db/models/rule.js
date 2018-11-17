'use strict';
module.exports = (sequelize, DataTypes) => {
	var Rule = sequelize.define('Rule', {
		source: DataTypes.STRING,
		description: DataTypes.STRING,
		topicID: {
			type: DataTypes.INTEGER,
			onDelete: 'CASCADE',
			references: {
				model: 'Rules',
				key: 'id',
				as: 'ruleId',
			}
		}

	}, {});
	Rule.associate = function(models) {
		Rule.hasMany(models.Topic, {
			foreignKey: 'ruleId',
			as: 'topics',
		});
	};

	return Rule;
};