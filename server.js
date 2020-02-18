const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Word !')
});

app.get('/status/:parameter', (req, res) => {
  const param = req.params.parameter;
  res.send('The status is: ' + param);
});

app.listen(80, () => {
  console.log("Express server listening on port " + 80);
});