import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Means that we cna use describe and expect without inporting them
    environment:"jsdom", //Tests work better to test it's working in browser
    setupFiles: "src/setupTests.js" //Any test config before tests run
  }
})
