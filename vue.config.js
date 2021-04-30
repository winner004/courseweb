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
            // chunks: ['index']
            chunks: ['chunk-vendors', 'chunk-common','index']
            //'chunk-vendors', 'chunk-common' chunk没有这两参数页面为空白！
        },
        course:{
            entry:'src/modules/course/index.js',
            template: 'src/templates/course.html',
            title: '课程 - 付费阅读',
            filename: 'course/index.html',
            // chunks: ['course']
            chunks: ['chunk-vendors', 'chunk-common','course']
        },
        users:{
            entry:'src/modules/users/index.js',
            template: 'src/templates/users.html',
            title: '会员中心 - 付费阅读',
            filename: 'users/index.html',
            // chunks: ['users']
            chunks: ['chunk-vendors', 'chunk-common','users']
        }
    }
}