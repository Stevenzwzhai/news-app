import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from './components/Content'
import News from './components/content/News'
import Images from './components/content/Image'

Vue.use(VueRouter);
const router = new VueRouter();
router.map({
	'/news':{
		component:News
	},
	'imgs':{
		component:Images
	}
});

export default router;