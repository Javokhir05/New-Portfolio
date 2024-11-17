const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    devtool: 'source-map',
     //mode
     mode: 'production',
     //entry
     entry: {
         main : path.resolve(__dirname, 'src/js/main.js'),
         contact : path.resolve(__dirname, 'src/js/contact.js'),
     },
     //output
     output: {
         path: path.resolve(__dirname, 'public'),
         filename: '[name][contenthash].js',
         clean: true,
     },
     //dev-server
     devServer: {
         static: {
             directory: path.resolve(__dirname, 'public')
         },
         port: 3000,
         hot: true,
         open: true,
         compress: true,
         historyApiFallback: true,
     },
     //plugins
     plugins: [
         new HtmlWebpackPlugin({
             title: "Portfolio_ | Main",
             template: './src/pages/indexTemp.html',
             filename: 'index.html',
             chunks: ['main']
         }),
         new HtmlWebpackPlugin({
             title: "Portfolio_ | Contact",
             template: './src/pages/contactTemp.html',
             filename: 'contact.html',
             chunks: ['contact']
         }), 
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
              { from: 'src/assets/img', to: 'assets/img' },  // Copy images from 'src/images' to 'public/assets/img'
            ],
          }),
     ],
     //loader
     module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Match common image file formats
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name][hash][ext]', // Define output path for images
                  },
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    targets: "defaults",
                    presets: [
                      ['@babel/preset-env']
                    ]
                  }
                }
              },
        ],
        
     },
     
};