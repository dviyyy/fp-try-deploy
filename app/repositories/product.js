const { Products } = require("../models");

module.exports = {
	create(inputData) {
		return Products.create(inputData);
	},

	update(id, updatedData) {
		return Products.update(updatedData, {
			where: {
				id,
			},
		});
	},

	delete(id) {
		return Products.destroy({
			where: {
				id
			}
		});
	},

	find(id) {
		return Products.findByPk(id);
	},

	findAll() {
		return Products.findAll();
	},

	findOne(key) {
		return Products.findOne(key);
	},

	getTotalUsers() {
		return Products.count();
	},
};
