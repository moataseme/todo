<template>
	<p class="error">{{ errMsg }}</p>
</template>

<script>
export default{
	props:['errMsg'],	
}
</script>

<style scoped>
.error{
	color: #ae0000;
	background: #fdfdfd;
	text-align: center;
	padding: 5px;
	font-weight: bold;
	margin-top: 20px;
}
</style>
