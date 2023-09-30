import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import historyApiFallback from "connect-history-api-fallback";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
    middleware: [historyApiFallback()], // Middleware should be an array
  },
});
