<template>
	<md-drawer class="md-right" :md-active.sync="showDrawer" @md-closed="close">
		<div class="input-title-subtitle-container">
			<md-field>
				<label>Title</label>
				<md-input v-model="form.title"></md-input>
			</md-field>
			<div class="space-title-subtitle-container"></div>
			<md-field>
				<label>Sub Title</label>
				<md-input v-model="form.subtitle"></md-input>
			</md-field>
		</div>

		<md-field>
			<label>Description</label>
			<md-input v-model="form.description"></md-input>
		</md-field>

		<div class="button-container">
			<div class="radio-container">
				<md-radio v-model="form.cid" value="1" class="md-primary"
					>Category 1</md-radio
				>
				<md-radio v-model="form.cid" value="2" class="md-primary"
					>Category 2</md-radio
				>
			</div>

			<md-button class="button md-raised md-primary" @click="save"
				>Add Task</md-button
			>
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
				cid: "1",
				title: "",
				subtitle: "",
				description: "",
			},
			showDrawer: false,
		};
	},
	methods: {
		...mapActions(["taskСreate"]),
		save() {
			store.dispatch("taskСreate", {
				...this.form,
				cid: Number(this.form.cid),
			});
			this.close();
		},
		close() {
			this.showDrawer = false;
			//Дадим время на анимацию свертывания
			setTimeout(() => {
				this.$router.push("/");
			}, 500);
		},
		update() {
			//Дадим время на анимацию развертывания
			setTimeout(() => {
				this.showDrawer = true;
			}, 0);
		},
	},
	mounted() {
		//Прокрутим скролл в самый низ
		window.scrollTo(0, document.body.scrollHeight);
		this.update();
	},
	beforeRouteUpdate(to, from, next) {
		this.update();
		next();
	},
	computed: {
		...mapState(["tasks"]),
	},
};
</script>

<style scoped>
.md-drawer {
	height: 270px;
	width: 100%;
	padding-left: 35px;
	padding-top: 10px;
	padding-right: 35px;
	top: inherit;
}
.radio-container {
	display: flex;
	flex-direction: column;
}
.button {
	min-width: 150px;
	border-radius: 25px;
}
.button-container {
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	align-items: center;
}
.input-title-subtitle-container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
}
.space-title-subtitle-container {
	width: 40px;
}
</style>
