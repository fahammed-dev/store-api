const http = require('http');
const app = require('./app/app');
// internal import
const dbConnect = require('./db/dbConnect');

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI;

const server = http.createServer(app);

const startServer = async () => {
  try {
    await dbConnect(DB_URI);
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
