module.exports = {
  publicPath: '',

  devServer:{
    host:'0.0.0.0',
    port:'8088',
    // https:false,
    //open:true,//启动时自动打开浏览器
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy:{ //配置跨域
        '/api':{
            target:'http://localhost:3000/web',
            ws:true,
            changeOrigin:true,//允许跨域
            pathRewrie:{
                '^/api':''   //会将url的api同义替换成''
            }
        }
    }
}

}