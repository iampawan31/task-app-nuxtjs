<script setup lang="ts">
const route = useRoute()

const { data: task, error, status } = await useFetch(`/api/tasks/${route.params.id}`, {
	lazy: true,
})
</script>

<template>
	<div>
		<article
			v-if="status === 'pending'"
			aria-busy
		/>
		<article
			v-else-if="error"
			aria-busy
			class="error"
		>
			{{ error.statusMessage }}
		</article>
		<article v-else-if="task">
			{{ task.title }}
		</article>
	</div>
</template>

<style scoped>

</style>
