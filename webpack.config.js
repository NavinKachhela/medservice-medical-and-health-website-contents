const path = require('path');
module.exports = {
    entry: './app/assets/scripts/app.js',
    output:{
        filename: "app.bundled.js",
        path: path.resolve(__dirname,"app"),
},
    mode: "development",
    watch: true
}