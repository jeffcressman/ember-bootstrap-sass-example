/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.

app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');
app.import('bower_components/bootstrap-sass-official/assets/fonts/bootstrap/glyphicons-halflings-regular.woff', {
  destDir: 'fonts/bootstrap/'
});

module.exports = app.toTree();
