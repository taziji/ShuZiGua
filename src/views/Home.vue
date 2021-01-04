<template>
	<div class="home">
		<GuaForm/>
	</div>
</template>

<script>
	// @ is an alias to /src
	import GuaForm from '@/components/GuaForm.vue'

	export default {
		name: 'Home',
		components: {
			GuaForm
		}
	}
</script>

<style scoped>

</style>
