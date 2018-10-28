<template>
	<div class="wrap__main--noinfo">
			<i class="far fa-calendar-times"></i>
			<h1 class="wrap__title">Quest info not found</h1>
			<p class="wrap__text">
				For more information, please contact the developers.
			</p>
	</div>
</template>

<script>
export default {

}
</script>

<style>
.wrap__main--noinfo {
	width: 300px;
	margin-top: 40px;
	height: 100%;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: space-around;
	align-content: center;
	flex-direction: column;
}
.fa-calendar-times{
	text-align: center;
	font-size: 200px;
	color: #dddddd;
}
.wrap__title {
	font-size: 18px;
	color: #000;
	text-align: center;
}
.wrap__text {
	font-size: 16px;
	text-align: center;
	color: #000;
}
</style>

