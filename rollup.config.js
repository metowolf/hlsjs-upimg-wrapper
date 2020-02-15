import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/HlsjsUpimgWrapper.js',
  output: {
    file: 'dist/HlsjsUpimgWrapper.js',
    format: 'umd',
    name: 'HlsjsUpimgWrapper',
  },
  plugins: [
    commonjs(),
    resolve(),
    babel(),
    terser()
  ]
}
