<template>
	<md-drawer class="md-right" :md-active.sync="showDrawer" @md-closed="save">
		<div class="container">
			<div class="container-close">
				<h2>Edit task</h2>

				<md-button class="md-icon-button" @click="save">
					<md-icon>close</md-icon>
				</md-button>
			</div>
			<div class="container-inputs">
				<md-field>
					<label>Title</label>
					<md-input v-model="form.title"></md-input>
				</md-field>
				<md-field>
					<label>Sub Title</label>
					<md-input v-model="form.subtitle"></md-input>
				</md-field>
				<md-field>
					<label>Description</label>
					<md-textarea v-model="form.description" md-autogrow></md-textarea>
				</md-field>
			</div>
		</div>
	</md-drawer>
</template>

<script type="text/babel">
import { mapActions, mapState } from "vuex";
import store from "../store/index";

export default {
	data: () => {
		return {
			form: {
				title: "",
				subtitle: "",
				description: "",
			},
			showDrawer: false,
		};
	},
	methods: {
		...mapActions(["taskEdit"]),

		save() {
			this.showDrawer = false;
			//Дадим время на анимацию свертывания, грязно, но быстро, можно лучше
			setTimeout(() => {
				store
					.dispatch("taskEdit", {
						...this.form,
						id: Number(this.$route.params.id),
					})
					.then(() => this.$router.push("/"));
			}, 500);
		},

		reset() {
			this.update();
		},

		update() {
			this.form.title = this.task.title;
			this.form.subtitle = this.task.subtitle;
			this.form.description = this.task.description;
			//Дадим время на анимацию развертывания
			setTimeout(() => {
				this.showDrawer = true;
			}, 0);
		},
	},

	mounted() {
		window.scrollTo(0, 0);
		this.update();
	},

	beforeRouteUpdate(to, from, next) {
		this.update();
		next();
	},

	computed: {
		...mapState(["tasks"]),
		task() {
			return this.tasks.data.find(
				({ id }) => id === Number(this.$route.params.id)
			);
		},
	},
};
</script>

<style scoped>
.container-inputs {
	display: flex;
	flex-direction: column;
}
.container-close {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.container {
	padding: 20px;
}
</style>
