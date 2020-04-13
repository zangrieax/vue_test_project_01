<template>
	<div>
		<div class="task-category-container">
			<div class="name-and-sort-container">
				<div class="name-and-sort">
					<h3>{{ name }}</h3>
					<div class="sort-date" @click="onSort">sort by date</div>
				</div>
				<div class="line-category" />
			</div>

			<div v-for="task in tasksLocal">
				<task :data="task" :key="task.id" />
			</div>

			<div v-if="!more">
				<div class="load-more-container">
					<div class="load-more-button" @click="onMore">Load more</div>
					<div class="line" />
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/babel">
import { mapActions, mapState } from "vuex";
import task from "./Task.vue";

export default {
	props: {
		name: String,
		cid: String,
	},

	data() {
		return {
			more: false,
			sort: true,
		};
	},

	components: {
		task,
	},

	methods: {
		...mapActions(["editTask"]),
		onMore() {
			this.more = true;
		},
		onSort() {
			this.sort = !this.sort;
		},
		tasksFilterSort() {
			const cidFilterTasks = this.tasks.data.filter(
				({ cid }) => cid === Number(this.cid)
			);
			const sortFn = this.sort
				? (a, b) => a["date"] - b["date"]
				: (a, b) => b["date"] - a["date"];
			return cidFilterTasks.sort(sortFn);
		},
	},

	mounted() {
		this.more = this.tasksFilterSort().length < 6;
	},

	computed: {
		...mapState(["tasks"]),
		tasksLocal() {
			//Фикс кейса при удаление, чтобы more убралось само, когда < 6 позиций в категории
			this.more = this.more || this.tasksFilterSort().length < 6;
			//Сортировка
			return this.more
				? this.tasksFilterSort()
				: this.tasksFilterSort().slice(0, 6);
		},
	},
};
</script>

<style scoped>
.name-and-sort {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.sort-date {
	cursor: pointer;
	font-weight: bold;
	font-size: 12px;
	color: #95969d;
	padding-right: 12px;
	user-select: none;
	white-space: nowrap;
}
.load-more-button {
	cursor: pointer;
	font-weight: bold;
	font-size: 14px;
	user-select: none;
	white-space: nowrap;
}
.load-more-container {
	margin-top: 30px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.line {
	height: 1px;
	width: 100%;
	margin-left: 20px;
	margin-right: 12px;
	background-color: #f0f0f0;
	margin-top: 3px;
}

.line-category {
	height: 1px;
	margin-right: 8px;
	background-color: #f0f0f0;
	margin-bottom: 10px;
}
.name-and-sort-container {
	display: flex;
	flex-direction: column;
}
.task-category-container {
	margin-bottom: 40px;
}
</style>
