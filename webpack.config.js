const path = require('path');
const fs = require('fs');
const WebpackShellPlugin = require('webpack-shell-plugin');
const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
    entry: './src/server',
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.ts/,
                use: 'ts-loader',
            },
        ],
    },
    target: 'node',
    externals: nodeModules,
    resolve:{
        extensions:[
            '.ts',
        ],
    },
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build'),
    },
    plugins: [
        new WebpackShellPlugin({onBuildEnd: ['nodemon build/bundle.js --watch build']})
    ]
}

