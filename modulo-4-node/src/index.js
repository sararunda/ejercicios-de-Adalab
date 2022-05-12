const express = require('express');
const cors = require('cors');
const names = ['alejandra', 'sara', 'andrea'];

const server = express();
//recibir peticiones de cualquier direccion
server.use(cors());

server.listen(3000, () => {
  console.log('arrancando');
});

const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`server listening at http://localhost:${serverPort}`);
});

server.get('/', (req, res) => {
  res.send('holis');
});
server.get('/api/names', (req, res) => {
  console.log('vamosa  preparar json');
  const limit = req.query.limit;
  const search = req.query.search;
  res.json(
    names
      .splice(0, limit)
      .filter((name) => name.toLowerCase().includes(search.toLowerCase()))
  );
});
