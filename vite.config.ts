import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const isCloudflare = !!process.env.CF_PAGES

export default defineConfig({
  plugins: [vue({ reactivityTransform: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: isCloudflare ? undefined : '../mortezaom.me',
  },
  define: isCloudflare
    ? {
        'import.meta.env.VITE_ON_CLOUDFLARE': JSON.stringify(true),
      }
    : {},
})