module.exports = {
	init(app){
		const staticRoutes = require('../routes/static');
		const topiccRoutes = require('../routes/topics');
		const postRoutes = require('../routes/posts');
		const userRoutes = require("../routes/users");
		app.use(staticRoutes);
		app.use(topiccRoutes);
		app.use(postRoutes);
		app.use(userRoutes);
	}
}