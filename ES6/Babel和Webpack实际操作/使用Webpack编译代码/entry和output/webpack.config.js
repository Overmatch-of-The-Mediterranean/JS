const path = require('path');

module.exports = {
    mode: 'development',
    // entry: './src/index.js', 单入口
    entry: {
        main: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),//__dirname指当前这个文件所在的目录，返回绝对路径，然后与'dist'拼接,拼接后返回一个绝对路径，指的是dist这个目录
        filename: '[name].js'
    }
};