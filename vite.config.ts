import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'
import babel from 'vite-plugin-babel'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    mkcert(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: ['@babel/plugin-transform-runtime']
      }
    })
  ]
})
