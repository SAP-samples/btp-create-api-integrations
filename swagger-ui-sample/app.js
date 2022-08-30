'use strict';

const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;
const host = '0.0.0.0';
const swaggerUi = require('swagger-ui-express');

app.use('/public', express.static(__dirname + '/public'));  
app.use(express.static(__dirname + '/public')); 
app.use(express.json());

var options = {
    swaggerOptions: {
        url: '/public/swagger.json'
    },
    customCssUrl: '/public/custom.css'
};

app.post('/api-spec', function (req, res, next) {
    if (req.body && req.body.content) {
        let buff = Buffer.from(req.body.content, 'base64');
        let jsonSpec = JSON.parse(buff.toString('ascii'));  
        let filePath = __dirname + '/public/swagger.json';
        fs.writeFile(filePath, JSON.stringify(jsonSpec), (err) => {
            if (err) return next(err);
            next();
        })
        res.sendStatus(204);
    }
    else {
        res.sendStatus(500);
    }
    next();
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));

app.listen(port, host, () => {
    console.log(`Listening on http://${host}:${port}`);
})
