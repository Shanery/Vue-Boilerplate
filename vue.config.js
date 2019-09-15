// User Variables
const widgetStyle = false
const publicPath = "/"

// Packages & Plugins
const path = require('path')


module.exports = {
  // Base URL
  publicPath: process.env.NODE_ENV === 'production' ?
    publicPath : '/',


  pages: {
    index: {
      entry: './src/main.js',
      template: './public/index.html'
    },
  },

  // Remove Vendor
  chainWebpack: config => {
    if (widgetStyle) {
      config.optimization.delete('splitChunks');
    }

    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
      types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))

    function addStyleResource (rule) {
      rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: [
            path.resolve(__dirname, './src/styles/styles.styl'),
          ],
        })
    }
  },
  configureWebpack: {
    plugins: [
      
    ]
  },

  // Remove Hashing
  filenameHashing: !widgetStyle,
}