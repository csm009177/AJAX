const http = require("http");

const server = http.createServer((req, res) => {
  // 요청을 처리할 코드를 여기에 추가
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

server.on("request", (req, res) => {
  if (req.url === "/data" && req.method === "GET") {
    // JSON 데이터를 만듭니다.
    const responseData = {
      message: "This is the data you requested",
      value: 42,
    };

    // JSON 응답 헤더를 설정합니다.
    res.setHeader("Content-Type", "application/json");

    // JSON 데이터를 응답으로 보냅니다.
    res.end(JSON.stringify(responseData));
  } else {
    // 다른 요청에 대한 응답 처리
    res.statusCode = 404;
    res.end("Not Found");
  }
});
