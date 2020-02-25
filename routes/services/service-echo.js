var express = require('express');
var router = express.Router();
const requestAdapter = require('../request-adapter');

const api = requestAdapter('https://postman-echo.com');
const api2 = requestAdapter('https://httpbin.org');
const api3 = requestAdapter('http://customers:8000');

router.get('/get', async (req, res) => {
  const response = await api.get(req.path, { params: req.query } );
  res.send(response.data);
});

router.get('/ip', async (req, res) => {
  const response1 = await api.get(req.path, { params: req.query } );
  const response2 = await api2.get(req.path, { params: req.query } );
  const data = {
    ip: response1.data.ip,
    origin: response2.data.origin,
  };
  
  res.send(data);
});

router.get('/customers', async (req, res) => {
  const response = await api3.get(req.path, { params: req.query } );
  res.send(response.data);
});

router.post('/post', async (req, res) => {
  const response = await api.post(req.path, req.body);
  res.send(response.data);
});

router.put('/put', async (req, res) => {
  const response = await api.put(req.path, req.body);
  res.send(response.data);
});

router.delete('/delete', async (req, res) => {
  const response = await api.delete(req.path, req.body);
  res.send(response.data);
});

module.exports = router;