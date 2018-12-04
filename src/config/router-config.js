module.exports = {
	init(app){
		const staticRoutes = require('../routes/static');
		const topiccRoutes = require('../routes/topics');
		const postRoutes = require('../routes/posts');
		app.use(staticRoutes);
		app.use(topiccRoutes);
		app.use(postRoutes);
	}
}