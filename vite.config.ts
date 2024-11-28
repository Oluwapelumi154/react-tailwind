import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
   "alias": {
    "@Pages": new URL("./src/Pages",import.meta.url).pathname,
    "@Common": new URL("./src/Common", import.meta.url).pathname,
    "@Icons": '/assets/icons',
    "@Images": "/assets/images",
    "@Routes": new URL("./src/Routes", import.meta.url).pathname
   }
  }
})
