import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'
import babel from 'vite-plugin-babel'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/test-vapi/',
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    mkcert(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false
      }
    })
  ]
})
