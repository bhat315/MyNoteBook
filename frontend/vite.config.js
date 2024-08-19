import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173 // Optional: You can set the port if needed
  }
})
// export default {

//   server: {
//     host: '0.0.0.0',
//     port: 5173 // Optional: You can set the port if needed
//   }
// }

