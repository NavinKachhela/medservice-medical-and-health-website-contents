const path = require('path');
const postCSSplugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
];
module.exports = {
    entry: './app/assets/scripts/app.js',
    output: {
        filename: "app.bundled.js",
        path: path.resolve(__dirname, "app"),
    },


    devServer: {
        before: function (app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, "app"),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    mode: "development",
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader?url=false',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: postCSSplugins
                        }
                 }
                ],
        }
    ]
    }
}
