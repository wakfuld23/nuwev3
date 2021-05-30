import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths({
      extensions: ['ts', 'tsx'],
      loose: true,
    }),
  ],
  base: 'https://wakfuld23.github.io/nuwev3/',
})
