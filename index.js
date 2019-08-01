// code away!

const server = require('./server');
require('dotenv').config();

const port = process.env.PORT || 4001;

server.listen(port, () => {
 console.log(`API is running on port ${port}`);
});
