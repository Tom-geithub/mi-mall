const { defineConfig } = require('@vue/cli-service')
module.exports = ({
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        //是否把主机的url设置为原点（上面代理的地址从头开始作为新的url）
        chageOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
})
