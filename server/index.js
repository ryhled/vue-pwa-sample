/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prefer-template */
/* eslint-disable no-path-concat */
const express = require('express');

const serveStatic = require('serve-static');

const app = express();

const rootFolder = __dirname + '/../dist';
const port = process.env.PORT || 5005;

// Serve up the static files in dist folder
app.use(serveStatic(rootFolder));

// Catch-all for index.html
app.get('/*', (req, res) => {
  res.sendFile(rootFolder + '/index.html');
});

app.listen(port);
console.log('server listening on port ' + port);
