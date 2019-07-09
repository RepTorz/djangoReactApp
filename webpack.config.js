module.exports = {
    module: {
        rules: [
            {
                // search for js files
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}