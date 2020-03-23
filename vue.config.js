const path=require('path')
module.exports = {
    configureWebpack: {
        resolve:{
            alias:{
                "@":path.join(__dirname,'src')
            }
        }
    },
    css:{
        loaderOptions:{
            less:{
                javascriptEnabled:true,
            }
        }
    },
    pages:{
        index: {
            entry: 'src/main.js',
            template: 'src/templates/index.html',
            filename: 'index.html',
            title: '首页 - 付费阅读',
            chunks: ['chunk-vendors', 'chunk-common','index']
            //'chunk-vendors', 'chunk-common' chunk没有这两参数页面为空白！
        },
        course:{
            entry:'src/modules/course/index.js',
            template: 'src/templates/course.html',
            title: '课程 - 付费阅读',
            filename: 'course/index.html',
            chunks: ['chunk-vendors', 'chunk-common','course']
        }
    }
}