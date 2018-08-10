import {DEMO} from '/store/mutation-types.js'


export default {

	demo({commit},testName){
		commit(testName);
	}
	
}