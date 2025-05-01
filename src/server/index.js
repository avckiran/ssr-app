import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from '../shared/App';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const htmlTemplate = (reactAppString) => `
<!DOCTYPE html>
<html>
  <head>
    <title>SSR React App</title>
  </head>
  <body>
    <div id="root">${reactAppString}</div>
  </body>
</html>
`;

app.get('/', (req, res) => {
    const appString = ReactDOMServer.renderToString(<App />);
    res.send(htmlTemplate(appString))
});

app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
});


