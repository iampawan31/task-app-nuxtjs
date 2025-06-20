<script setup lang="ts">
import type { FetchError } from "ofetch"

const errorMessage = ref("")
const loading = ref(false)

const taskName = ref("")

const onSubmit = async (): Promise<void> => {
	try {
		if (!taskName.value.trim()) {
			errorMessage.value = "Task name is required"

			return
		}

		loading.value = true
		errorMessage.value = ""

		const result = await $fetch("/api/tasks", {
			method: "POST",
			body: {
				title: taskName.value,
			},
		})

		navigateTo({
			name: "tasks-id",
			params: {
				id: result.id,
			},
		})

		console.log(result)
	}
	catch (e) {
		loading.value = false

		const error = e as FetchError

		errorMessage.value = error.statusMessage || "Undefined error occurred!!"
	}
}
</script>

<template>
	<div>
		<article
			v-if="loading"
			aria-busy
		/>
		<article
			v-else-if="errorMessage"
			class="error"
		>
			{{ errorMessage }}
		</article>
		<form @submit.prevent="onSubmit">
			<label for="">
				Task
				<input
					v-model="taskName"
					type="text"
					name="title"
				>
			</label>
			<div class="button-container">
				<button>Create</button>
			</div>
		</form>
	</div>
</template>

<style scoped>

</style>
