const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {
  const method = req.method; // 获取请求方法
  if (method === 'GET') { // get 请求
    const fileName = path.resolve(__dirname, 'data.txt');
    let stream = fs.createReadStream(fileName);
    stream.pipe(res); // 将 res 作为 stream 的 dest
  }
});
server.listen(8000);