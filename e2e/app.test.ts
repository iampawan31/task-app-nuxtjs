import { setup, $fetch, createPage, url } from "@nuxt/test-utils/e2e"
import { describe, expect, it } from "vitest"

describe("app", async () => {
	await setup()

	it("contains app name in navbar", async () => {
		const html = await $fetch("/")

		expect(html).toContain("Tasks App")
	})

	it("with playright", async () => {
		const page = await createPage()

		await page.goto(url("/"))

		const text = await page.textContent("a")

		expect(text).toBe("Tasks App")
	})
})
