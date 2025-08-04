import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'icon.png',
        'pwa-152x152.png',
        'pwa-192x192.png',
        'pwa-512x512.png',
        'apple-touch-icon.png'
      ],
      manifest: {
        name: 'SALVE – Primeiros Socorros',
        short_name: 'SALVE',
        start_url: '/',
        display: 'standalone',
        background_color: '#fafafa',
        theme_color: '#b30000',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ]
})
