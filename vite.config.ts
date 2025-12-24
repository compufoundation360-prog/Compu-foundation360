import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split node_modules into separate chunks
          if (id.includes('node_modules')) {
            // Split large libraries into their own chunks
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'lucide-vendor';
            }
            if (id.includes('recharts')) {
              return 'charts-vendor';
            }
            if (id.includes('motion')) {
              return 'motion-vendor';
            }
            if (id.includes('@radix-ui')) {
              return 'radix-vendor';
            }
            if (id.includes('@splinetool')) {
              return 'spline-vendor';
            }
            // All other node_modules
            return 'vendor';
          }
          // Split ModuleDetail into its own chunk (it's a large file)
          if (id.includes('ModuleDetail')) {
            return 'module-detail';
          }
          if (id.includes('Module11')) {
            return 'module-11';
          }
          if (id.includes('Module12')) {
            return 'module-12';
          }
        },
      },
    },
    chunkSizeWarningLimit: 2000,
  },
}));
