const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  fs.readFile("text.txt", "utf8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Internal Server Error");
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(data);
  })
})

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on 3000");
});