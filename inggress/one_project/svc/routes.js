const { Router } = require('express');

const v1Router = new Router();
const v2Router = new Router();

v1Router.get('/', (req, res) => res.send('Hello from home v1 controller'));
v1Router.get('/others', (req, res) => res.send('Hello from others v1 controller'));

v2Router.get('/', (req, res) => res.send('Hello from home v2 controller'));
v2Router.get('/others', (req, res) => res.send('Hello from others v2 controller'));

module.exports = {
    v1Router,
    v2Router
};