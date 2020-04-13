<template>
	<div class="main">
		<div class="tasks page-container">
			<div class="tasks-list-description">
				<h2>Task list</h2>
				<div class="task-list-subtitle">
					Organize it with Task List
				</div>
			</div>

			<TaskCategory cid="1" name="Category 1" />
			<TaskCategory cid="2" name="Category 2" />

			<div class="create-task-button">
				<md-speed-dial md-direction="bottom">
					<md-speed-dial-target class="md-primary" @click="addTask">
						<md-icon>add</md-icon>
					</md-speed-dial-target>
				</md-speed-dial>
			</div>

			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/babel">
import TaskCategory from "../components/TaskCategory.vue";

export default {
	components: {
		TaskCategory,
	},
	methods: {
		addTask() {
			this.$router.push("/create");
		},
	},
};
</script>

<style scoped>
.tasks {
	width: 600px;
}

.page-container {
	min-height: 100vh;
	overflow: hidden;
	position: relative;
	padding-left: 20px;
	padding-right: 20px;
}
.create-task-button {
	display: flex;
	width: 100%;
	justify-content: flex-end;
	padding: 10px;
}

.main {
	display: flex;
	width: 100%;
	justify-content: center;
}
.task-list-subtitle {
	color: #95969d;
}
.tasks-list-description {
	display: flex;
	flex-direction: column;
	margin-bottom: 40px;
}
</style>
