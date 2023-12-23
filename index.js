const express = require('express');
const { Client } = require('pg');
const cors = require('cors');
const app = express();
const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'StariyBrat',
  database: 'Test'
});
app.use(cors());
app.get('/query', (req, res) => {
  client.connect();
  client.query('SELECT * FROM client', (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Error executing the query' });
    } else {
        console.log(result.rows);
      const rows = result.rows;
      res.json(rows);
    }
    client.end();
  });
});

  app.get('/check',(request, res)=>{
    client.connect();
    const mail = request.body.mail;
  
    const password = request.body.password;
    client.query(('SELECT COUNT(*) AS column_count FROM client WHERE mail = $1 AND password = $2', [mail, password]), (err, result) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error executing the query' });
      } else {
          console.log(result.rows.length);
        const rows = result.rows;
        res.json(rows.length);
      }
      client.end();
    });
  });
  





app.listen(3001, () => {
  console.log('Server listening on port 3000');
});