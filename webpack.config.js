const path = require('path');

const fixed = process.argv.includes('--fixed');
const entry = fixed ? './src/indexFixed.js' : './src/index.js';

module.exports = {
    entry,
    output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist')

    },
    mode: 'production',
    optimization: {
        namedModules: true,
        usedExports: true,
        minimize: false,
        concatenateModules: false,
    }
};