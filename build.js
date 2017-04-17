const commonjs = require('rollup-plugin-commonjs')
const rollup = require('rollup')
const path = require('path')
const fs = require('fs')

if(!process.argv[2]) {
  console.error('node build.js path/to/module.js')
  process.exit()
}

const file = process.argv[2] || './lib/433.js'
const base = path.basename(file, '.js')

rollup.rollup({
  entry: file,
  plugins: [commonjs()],
})

.then(function (bundle) {
  bundle.write({
    format: 'es',
    moduleName: base.replace('-','_'),
    dest: `./es/${base}.js`
  });
})


const source = fs.createReadStream(file)
const target = fs.createWriteStream(`./cjs/${base}.js`)

source.pipe(target)
