import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://edisss1.github.io/Furniro/",
  build: {
    target: "esnext",
  },
})
