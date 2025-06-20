import db from "~/lib/db"
import { InsertTaskSchema, tasks } from "~/lib/db/schema"

export default defineEventHandler(async (event) => {
	const result = await readValidatedBody(event, InsertTaskSchema.safeParse)

	if (!result.success) {
		return sendError(event, createError({
			statusCode: 422,
			statusMessage: "Invalid Task",
		}))
	}

	const [created] = await db.insert(tasks).values(result.data).returning()

	return created
})
