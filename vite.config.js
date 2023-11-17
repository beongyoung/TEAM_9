import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://seasonwell.run.goorm.site/",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
