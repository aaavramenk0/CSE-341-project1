const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Temple API',
    },
    host: 'cse341-ipg5.onrender.com/',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

// generate swagger.json file
swaggerAutogen(outputFile, endpointsFile, doc);

