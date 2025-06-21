import { mountSuspended } from "@nuxt/test-utils/runtime"
import { describe, expect, it } from "vitest"
import Navbar from "./Navbar.vue"

describe("Navbar", () => {
	it("can mount the component", async () => {
		const component = await mountSuspended(Navbar)

		expect(component.html()).toContain("Tasks App")
	})
})
