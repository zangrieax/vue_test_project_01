<template>
	<span>
		<div class="task">
			<div class="task-buttons">
				<md-checkbox
					v-model="data.completed"
					class="md-primary task-checkbox"
					@change="completed"
				/>
				<div class="container-category-titles">
					<div class="category-title">{{ data.title }}</div>
					<div class="category-subtitle">{{ data.subtitle }}</div>
				</div>
			</div>
			<div class="task-buttons">
				<router-link :to="{ name: 'task-edit', params: { id: data.id } }">
					<div class="task-edit">
						<md-button class="md-icon-button">
							<md-icon>edit</md-icon>
						</md-button>
					</div>
				</router-link>
				<div class="task-delete" @click="taskDeleteLocal">
					<md-button class="md-icon-button">
						<md-icon>close</md-icon>
					</md-button>
				</div>
			</div>
		</div>
	</span>
</template>

<script type="text/babel">
import { mapActions } from "vuex";
import store from "../store/index";
export default {
	props: {
		data: { title: String, subtitle: String, id: Number },
	},

	methods: {
		taskDeleteLocal() {
			store.dispatch("taskDelete", this.data.id);
		},
		completed(completed) {
			store.dispatch("taskEdit", { id: this.data.id, completed });
		},
		...mapActions(["taskDelete", "taskEdit"]),
	},
};
</script>

<style scoped>
.task {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

.task-checkbox {
	z-index: 0;
}

.task-buttons {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.container-category-titles {
	display: flex;
	flex-direction: column;
}
.category-title {
	font-size: 14px;
	font-weight: bold;
	color: #76777e;
}
.category-subtitle {
	color: #95969d;
}
</style>
