const path = require('path');

const alias = {
    '@': path.resolve(__dirname, 'src'),
    '@layout': path.resolve(__dirname, 'src/app/layout'),
    '@components': path.resolve(__dirname, 'src/app/components'),
    '@images': path.resolve(__dirname, 'src/assets/images'),
    
  }
  

module.exports = {
    webpack: {
      module: {
        rules: [
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ],
      },
  
      alias: alias,
    }
  };