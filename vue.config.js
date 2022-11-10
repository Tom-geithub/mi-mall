const { defineConfig } = require('@vue/cli-service')
module.exports = ({
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'https://mock.apifox.cn/m1/1901965-0-default',
        //是否把主机的url设置为原点（上面代理的地址从头开始作为新的url）
        chageOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
})
