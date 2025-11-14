import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mockApi } from './tests/support/mock-api.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mockApi()],
})
