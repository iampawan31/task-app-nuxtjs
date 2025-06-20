import "./lib/env"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@nuxt/test-utils"],
	devtools: { enabled: true },
	css: ["@picocss/pico"],
	compatibilityDate: "2025-05-15",
	eslint: {
		config: {
			stylistic: {
				semi: false,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
})
