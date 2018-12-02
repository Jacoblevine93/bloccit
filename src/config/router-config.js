module.exports = {
	init(app){
		const staticRoutes = require('../routes/static');
		const topiccRoutes = require('../routes/topics');
		const advertisementRoutes = require('../routes/advertisements');
		app.use(staticRoutes);
		app.use(topiccRoutes);
		app.use(advertisementRoutes);
	}
}