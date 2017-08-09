//var defPath = '/public/';
//var fileName = './public/[name].[ext]';

module.exports = {
    entry: './app/app.jsx',
    output: {
        path:__dirname,
        filename: './public/bundle.js'
        
    },
    resolve:{
        modules: [__dirname, 'node_modules'],
        alias: {
          Main: 'app/components/Main.jsx',
          Nav: 'app/components/Nav.jsx',
          Weather: 'app/components/Weather.jsx',
          About: 'app/components/About.jsx',
          Examples: 'app/components/Examples.jsx',
          Form: 'app/components/Form.jsx',
          Show: 'app/components/Show.jsx',
          openWeatherMap: 'app/api/openWeatherMap.jsx',
          ErrorModal: 'app/components/ErrorModal.jsx'
        },
        extensions: ['.js', '.jsx']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets:['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test:/\.scss$/,
                use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                
            }]
            },
            {
                test:/\.css$/,
                use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
            }
               ]
    },
    devtool: 'cheap-module-eval-source-map'
    
}