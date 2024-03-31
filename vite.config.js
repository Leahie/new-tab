import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port : 3000,
    proxy: {
        '/schedule': {
            target: 'https://ion.tjhsst.edu/api/',
            changeOrigin: true,
            secure: false,
            ws: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
        }
    }
    
}
})
