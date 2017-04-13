var config = {
   entry: './main.js',
   output: {
      filename: './index.js',
   },
   module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }
        ],
    },
    devServer: {
      inline: true,
      port: 8080
   }

}

module.exports = config;
