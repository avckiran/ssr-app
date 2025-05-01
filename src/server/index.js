import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from '../shared/App';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const htmlTemplate = (reactAppString, initialData) => `
<!DOCTYPE html>
<html>
  <head>
    <title>SSR React App</title>
    <link rel="stylesheet" href="/main.css">
  </head>
  <body>
    <script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData)}</script>
    <div id="root">${reactAppString}</div>
    <script src="/bundle.js"></script>
  </body>
</html>
`;

app.get('/', (req, res) => {

  const renderApp = async () => {
    try {
      const apiResponse = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
      const initialData = await apiResponse.json();
      const appString = ReactDOMServer.renderToString(<App initialData={initialData} />);
      res.send(htmlTemplate(appString, initialData));
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Error fetching data");
    }
  };
  renderApp();
});

app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
});
