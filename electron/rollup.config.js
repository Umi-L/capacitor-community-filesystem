import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'electron/build/electron/src/index.js',
  output: {
    file: 'electron/dist/plugin.js',
    format: 'cjs',
    sourcemap: true
  },
  external: ['@capacitor/core', 'os', 'path', 'fs'],
  plugins: [resolve(), commonjs()]
};