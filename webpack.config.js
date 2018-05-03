module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            include: /src/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
};