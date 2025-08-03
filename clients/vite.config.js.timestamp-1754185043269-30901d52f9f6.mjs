// vite.config.js
import { defineConfig } from "file:///C:/Users/arpit/OneDrive/Desktop/TuneIt/clients/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/arpit/OneDrive/Desktop/TuneIt/clients/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import tagger from "file:///C:/Users/arpit/OneDrive/Desktop/TuneIt/clients/node_modules/@dhiwise/component-tagger/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), tagger()],
  build: {
    outDir: "build"
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@components": path.resolve("./src/components"),
      "@pages": path.resolve("./src/pages"),
      "@assets": path.resolve("./src/assets"),
      "@constants": path.resolve("./src/constants"),
      "@styles": path.resolve("./src/styles")
    }
  },
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: [".amazonaws.com", ".builtwithrocket.new"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhcnBpdFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFR1bmVJdFxcXFxjbGllbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhcnBpdFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFR1bmVJdFxcXFxjbGllbnRzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hcnBpdC9PbmVEcml2ZS9EZXNrdG9wL1R1bmVJdC9jbGllbnRzL3ZpdGUuY29uZmlnLmpzXCI7Ly8gdml0ZS5jb25maWcuanNcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgdGFnZ2VyIGZyb20gXCJAZGhpd2lzZS9jb21wb25lbnQtdGFnZ2VyXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLHRhZ2dlcigpXSxcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiBcImJ1aWxkXCIsXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZSgnLi9zcmMnKSxcclxuICAgICAgJ0Bjb21wb25lbnRzJzogcGF0aC5yZXNvbHZlKCcuL3NyYy9jb21wb25lbnRzJyksXHJcbiAgICAgICdAcGFnZXMnOiBwYXRoLnJlc29sdmUoJy4vc3JjL3BhZ2VzJyksXHJcbiAgICAgICdAYXNzZXRzJzogcGF0aC5yZXNvbHZlKCcuL3NyYy9hc3NldHMnKSxcclxuICAgICAgJ0Bjb25zdGFudHMnOiBwYXRoLnJlc29sdmUoJy4vc3JjL2NvbnN0YW50cycpLFxyXG4gICAgICAnQHN0eWxlcyc6IHBhdGgucmVzb2x2ZSgnLi9zcmMvc3R5bGVzJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiBcIjQwMjhcIixcclxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcclxuICAgIGFsbG93ZWRIb3N0czogWycuYW1hem9uYXdzLmNvbScsICcuYnVpbHR3aXRocm9ja2V0Lm5ldyddXHJcbiAgfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxZQUFZO0FBR25CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUUsT0FBTyxDQUFDO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLE9BQU87QUFBQSxNQUN6QixlQUFlLEtBQUssUUFBUSxrQkFBa0I7QUFBQSxNQUM5QyxVQUFVLEtBQUssUUFBUSxhQUFhO0FBQUEsTUFDcEMsV0FBVyxLQUFLLFFBQVEsY0FBYztBQUFBLE1BQ3RDLGNBQWMsS0FBSyxRQUFRLGlCQUFpQjtBQUFBLE1BQzVDLFdBQVcsS0FBSyxRQUFRLGNBQWM7QUFBQSxJQUN4QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLGNBQWMsQ0FBQyxrQkFBa0Isc0JBQXNCO0FBQUEsRUFDekQ7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
