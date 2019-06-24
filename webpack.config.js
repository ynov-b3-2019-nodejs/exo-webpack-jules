const path = require('path');

module.exports = {
    entry: './src/App.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.jsx$/, use: 'babel-loader'}
        ]
    },
    resolve: {
        modules: ["node_modules"],
        extensions: ['*','.js','.jsx']
    }
}
