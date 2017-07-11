import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/quark-cef-widgets.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'quark-cef-widgets',
  onwarn: function(warning) {
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
    console.warn( warning.message );
  },
  plugins: [
    nodeResolve({ jsnext: true, main: true, module: true }),
    commonjs()
  ],
  external: ['@angular/core', '@angular/common', '@angular/forms']
}
