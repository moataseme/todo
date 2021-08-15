<template>
	<div class="add-task">
		<input type="text" class="task-title" placeholder="Task Title" v-model="title"/>
		<button class="add-button" @click="addTask()">
			<i class="fa fa-plus"></i>
			Add Task
		</button>
		<error v-if="errMsg" :errMsg="errMsg"/>
	</div>
</template>

<script>
import error from './error';

export default{
	data(){
		return{
			"title": null,
			"errMsg": null,
		}
	},
	components: {
		error
	},
	methods:{
		addTask(){
		 	if(this.title){
		 		var self = this;

				axios.post('api/tasks', {
					"title": this.title
				})
				.then( function(response){
					if(response.data.status == 'true'){
						self.$emit('taskAdded');
						self.title = null;
						self.errMsg = null;
					}else{
						self.errMsg = response.data.errors.title[0];
					}
				})
				.catch( function(error){
					self.errMsg = 'Error adding task';
				});
			}else{
				this.errMsg = 'Title is required';
			}
		}
	}
}
</script>

<style scoped>
.add-task{
	text-align: center;
	margin-bottom: 20px;
}

.task-title{
	width: 50%;
	padding: 10px;
}

.add-button{
	background: #17b202;
	color: #fff;
	border: 0;
	outline: 0;
	padding: 10px;
	cursor: pointer;
}
</style>