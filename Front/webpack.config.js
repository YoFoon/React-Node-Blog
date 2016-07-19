var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var node_modules_dir = path.join(__dirname, 'node_modules');

var srcDir = path.resolve(process.cwd(), 'src');

//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
    var jsPath = path.resolve(srcDir, 'js');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [], files = {};
    dirs.forEach(function (item) {
        console.log(item);
        matchs = item.match(/(.+)\.js$/);
        //console.log(matchs);
        if (matchs) {
            files[matchs[1]] = path.resolve(srcDir, 'js', item);
        }
    });
    //console.log(JSON.stringify(files));
    return files;
}

var deps = [ 
  'jquery/dist/jquery.min.js'
];

var config = {
    cache: true,
    devtool: false,
    entry: getEntry(),
    output: {
        path: path.join(__dirname, "dist/js/"),
        publicPath: "dist/js/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    resolve: {
        alias: {
            //jquery: srcDir + "/js/lib/jquery.min.js",
        }
    },
    module: {
        noParse: [],
        loaders: [
            { 
                test: /\.jsx?$/,loader: 'babel-loader', include: /src/
            },
            { 
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: /src/,
                query: {
                  presets:['react','es2015']
                }
            }
        ]
    },
    plugins: [
        new CommonsChunkPlugin('common.js'),
        // new uglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
};

function setAlias() {
    var matchs = [];
    deps.forEach(function (dep) {
      var depPath = path.resolve(node_modules_dir, dep);
      var item = dep.split("/");
      item = item[item.length-1].split(".")[0];
      console.log(item);
      config.resolve.alias[item] = depPath;
      config.module.noParse.push(depPath);
    });
}
setAlias();

console.log(config)

module.exports = config;