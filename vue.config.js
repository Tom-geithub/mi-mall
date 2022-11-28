const { defineConfig } = require('@vue/cli-service')
module.exports = ({
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        //设置为true时会将原来url中的Host（localhost:8080）替换为上面的target
        chageOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    },
  }
})
