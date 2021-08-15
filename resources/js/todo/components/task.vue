<template>
	<div class="task">
		<input type="checkbox" class="task-check" @change="updateTask()" v-model="task.isCompleted"/>
		<span :class="[task.isCompleted ? 'completed' : '', 'task-text']">{{ task.title }}</span>
		<i class="fa fa-trash" @click="deleteTask()"></i>
		<error v-if="errMsg" :errMsg="errMsg"/>
	</div>
</template>

<script>
import error from './error';

export default{
	props: ['task'],
	components: {
		error
	},
	data(){
		return {
			errMsg: null,
		}
	},
	methods: {
		updateTask(){
			axios.put('api/tasks/' + this.task.id, {
				isCompleted: this.task.isCompleted
			})
			.then( response => {
				if(response.data.status == 'true'){
					this.errMsg = null;
				}else{
					this.errMsg = response.data.errors.isCompleted[0];
				}
			})
			.catch( error => {
				this.errMsg = "Error updating task";
			});
		},
		deleteTask(){
			var self = this;

			axios.delete('api/tasks/' + self.task.id)
			.then( response => {
				if(response.data.status == 'true'){
					self.$emit('taskDeleted');
					this.errMsg = null;
				}else{
					this.errMsg = "Task not found";
				}
			})
			.catch( error => {
				this.errMsg = "Error deleting task";
			});
		}
	}
}
</script>

<style scoped>
.task{
	background: #4f667d;;
	padding: 15px;
}

.task:nth-of-type(2n+1){
	background: #34495E;
}

.task-check{
	cursor: pointer;
}

.completed{
	text-decoration: line-through;	
}

.task-text{
	display: inline-block;
	width: 90%;
	text-align: center;
	color: #fff;
}

.fa-trash{
	color: #ff0000;
	cursor: pointer;
}
</style>