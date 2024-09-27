const CracoLessPlagin = require('craco-less')
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  plugins: [{ plugin: CracoLessPlagin }],
  // 修改 webpack 配置
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components')
    }
  },
  // 修改 babel 配置
  babel: {
    // ...
  },
  // 修改 eslint 配置
  eslint: {
    // ...
  },
  devServer: {
    proxy: {

    }
  }
}