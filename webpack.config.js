const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'htmx.bundle.js',
    path: path.resolve(__dirname, 'assets'),
  },
};
