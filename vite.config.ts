import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@types": "/src/types",
      "@hooks": "/src/hooks",
      "@contexts": "/src/contexts",
      "@utils": "/src/utils",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@constants": "/src/constants",
    },
  },
});
