import {
	SET_INDEX_BANNER
} from './mutation-types.js'
import utils from '../common/util.js'

export default {

	demo({
		commit
	}, testName) {
		commit(testName);
	},

	setIndexBanner({
		commit
	}, list) { //设置首页海报
		commit(SET_INDEX_BANNER, list)
	}

}
