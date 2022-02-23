
const path = require('path')
module.exports = {
  lintOnSave: false,
  chainWebpack:config =>{
    const dir = path.resolve(__dirname,'src/assets/icons')  //首先确定当前处于哪个目录

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)   //文件能匹配到这个规则就要用这个规则
      .include.add(dir).end()  //只需到当前目录下的走这个规则，因此添加这个为规则
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
      //.use('svgo-loader').loader('svgo-loader')
      //.tap(options=>({...options,plugin:[{removeAttrs:{attrs:'fill'}}]}))
      //.end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'),[{plainSprite:true}])
    config.module.rule('svg').exclude.add(dir) //其他svg排除出这个目录
  },
  pluginOptions:{}
}
