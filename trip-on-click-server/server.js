const http = require('http');
const app = require('./app');
<<<<<<< HEAD
const port =  8080;
=======
const port = process.env.PORT || 8080;
>>>>>>> e402fbfe44161c12c92e03467b98824926c8df45

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Listening on Port ${port}`)
});