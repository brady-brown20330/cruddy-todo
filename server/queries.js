const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'myPassword',
  database: 'tododatabase'
});

client.connect(function(err) {
  if (err) {
    return console.log('error: ', err.message)
  }
  console.log('Connected to Postgres')
});

const getTodos = (cb, id) => {
  // console.log('id in queries: ', id)
  // client.query('SELECT * from todoItems', function(err, results) {
  //   if (err) {
  //     cb(err, null)
  //   } else {
  //     cb(null, results)
  //   }
  // })
};

const deleteTodos = (cb) => {
  client.query('DELETE FROM todoItems WHERE id = 5')
}

module.exports = {
  getTodos,
  deleteTodos,

}