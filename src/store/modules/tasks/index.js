"use strict";

import * as type from "./types";
import actions from "./actions";

const state = {
	data: [
		{
			id: 1,
			cid: 1,
			title: "Create Layout",
			subtitle: "Create initial layout homepage",
			description: "test",
			completed: true,
			date: 1,
		},
		{
			id: 2,
			cid: 1,
			title: "Fixing Icons",
			subtitle: "Fixing Icons transparetnt desing",
			description: "test2",
			completed: false,
			date: 2,
		},
		{
			id: 3,
			cid: 1,
			title: "Create Layout",
			subtitle: "Create initial layout homepage",
			description: "test",
			completed: false,
			date: 3,
		},
		{
			id: 4,
			cid: 1,
			title: "Fixing Icons",
			subtitle: "Fixing Icons transparetnt desing",
			description: "test2",
			completed: false,
			date: 4,
		},
		{
			id: 5,
			cid: 1,
			title: "Create Layout",
			subtitle: "Create initial layout homepage",
			description: "test",
			completed: false,
			date: 5,
		},
		{
			id: 6,
			cid: 1,
			title: "Fixing Icons",
			subtitle: "Fixing Icons transparetnt desing",
			description: "test2",
			completed: false,
			date: 6,
		},
		{
			id: 7,
			cid: 1,
			title: "Create Layout",
			subtitle: "Create initial layout homepage",
			description: "test",
			completed: true,
			date: 7,
		},
		{
			id: 8,
			cid: 1,
			title: "Fixing Icons",
			subtitle: "Fixing Icons transparetnt desing",
			description: "test2",
			completed: false,
			date: 8,
		},
		//cid: 2
		{
			id: 9,
			cid: 2,
			title: "Create Layout",
			subtitle: "Create initial layout homepage",
			description: "test",
			completed: true,
			date: 9,
		},
		{
			id: 10,
			cid: 2,
			title: "Fixing Icons",
			subtitle: "Fixing Icons transparetnt desing",
			description: "test2",
			completed: false,
			date: 10,
		},
		{
			id: 11,
			cid: 2,
			title: "Create Layout",
			subtitle: "Create initial layout homepage",
			description: "test",
			completed: false,
			date: 11,
		},
	],
};

const mutations = {
	[type.TASK_DELETE](state, action) {
		state.data = state.data.filter(({ id }) => id !== action.id);
	},
	[type.TASK_EDIT](state, action) {
		const task = state.data.find(({ id }) => id === action.id);
		if (!task) return undefined;
		//Грязно, но быстро, чтобы не перечислять свойства
		Object.assign(task, action);
	},
	[type.TASK_CREATE](state, action) {
		const timestamp = Number(new Date());
		state.data = [
			...state.data,
			{
				id: timestamp,
				date: timestamp,
				cid: action.cid,
				title: action.title,
				subtitle: action.subtitle,
				description: action.description,
				completed: false,
			},
		];
	},
};

export default {
	state,
	mutations,
	actions,
};
