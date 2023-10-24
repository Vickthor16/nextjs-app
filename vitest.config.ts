import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const path = require("path");

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: ['./tests/setup.ts'],
    },
})

