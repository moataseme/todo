<template>
	<div class="footer">
		<p>Copyright</p>
	</div>
</template>

<script>
export default{
	created: function(){
		console.log('foote');
	}
}
</script>

<style scoped>
.footer{
	position: absolute;
	width: 100%;
	text-align: center;
	color: #fff;
	background: #4f667d;
	padding: 20px;
	margin-top: 50px;
	bottom: 0;
}
</style>