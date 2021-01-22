const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");
const queries = require('./queries.js')

app.use(express.static(path.join(__dirname, '../public')));

app.get('/todos/list', (req, res) => {
  queries.getTodos(function(err, results) {
    if (err) {
      throw err;
    }
    res.send(results)
    console.log('here are the results: ', results)
  })
})

app.listen(PORT, () => {
  console.log(`Hello, Your server is running on PORT: ${PORT}`);
});