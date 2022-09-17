module.exports = {
    plugins: [
      require('postcss-nested'),//sass compiling
      require('postcss-import'),//@import function
      require('cssnano'),//minify
    ]
  }