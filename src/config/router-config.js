module.exports = {
	init(app){
		const staticRoutes = require('../routes/static');
		const topiccRoutes = require('../routes/topics');
		app.use(staticRoutes);
		app.use(topiccRoutes);
	}
}