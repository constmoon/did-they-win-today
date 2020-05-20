const path = require('path');

let config = {
  webpack: config => {
    config.resolve.modules.push(path.join(__dirname));
    return config;
  }
}

module.exports = config;
