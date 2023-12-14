import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@my-types": "/src/types",
      "@my-hooks": "/src/hooks",
      "@my-contexts": "/src/contexts",
    },
  },
});
