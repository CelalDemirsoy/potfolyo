import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vercel için optimize edilmiş config
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist"
  },
  server: {
    port: 5173,
    open: true
  }
});
