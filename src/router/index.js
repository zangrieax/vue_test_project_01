"use strict";

import Vue from "vue";
import Router from "vue-router";
import TaskList from "../pages/TaskList.vue";
import TaskEdit from "../pages/TaskEdit.vue";
import TaskCreate from "../pages/TaskCreate.vue";
Vue.use(Router);

const router = new Router({
	mode: "history",
	base: __dirname,
	linkActiveClass: "active",
	routes: [
		{
			path: "/",
			component: TaskList,
			name: "task-list",
			children: [
				{
					path: "/edit/:id",
					component: TaskEdit,
					props: true,
					name: "task-edit",
				},
				{
					path: "/create",
					component: TaskCreate,
					props: true,
					name: "task-create",
				},
			],
		},
	],
});

export default router;
