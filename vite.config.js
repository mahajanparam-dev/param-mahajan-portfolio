import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/param-mahajan-portfolio/", // <-- set this to your repo name
  build: {
    outDir: "docs"
  },
  plugins: [react()],
});
