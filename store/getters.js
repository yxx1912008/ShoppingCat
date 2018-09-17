/**
 * getter模块
 */

export default {

	startTime(state) {
		if (JSON.stringify(state.goodDetail) === '{}') {
			return '';
		}
		return state.goodDetail.addtime.substring(0, 16);
	}
}
