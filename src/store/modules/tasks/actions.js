"use strict";

import * as type from "./types";

const actions = {
	taskEdit({ commit }, params) {
		commit(type.TASK_EDIT, {
			...params,
		});
	},
	taskDelete({ commit }, id) {
		commit(type.TASK_DELETE, {
			id,
		});
	},
	taskСreate({ commit }, params) {
		commit(type.TASK_CREATE, {
			...params,
		});
	},
};

export default actions;
