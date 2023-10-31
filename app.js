// 프로젝트 디렉토리에서 Express 앱을 생성하고 기본 라우팅을 설정합니다.
const express = require('express');
const app = express();
const port = 3000
// 기본 라우트
app.get('/', (req, res) => {
    res.send('Hello, this is the root route!');
});

app.listen(port, () => {
    console.log(`
Server is running on port ${port}
http://localhost:${port}
`);
});


// Ajax 요청을 처리하려면 새로운 엔드포인트(라우트)를 만들어야 합니다. 
// 예를 들어, 데이터를 JSON 형식으로 제공하는 /data 엔드포인트를 만들어 보겠습니다.
app.get('/index.html', (req, res) => {
    // 실제 데이터를 생성하거나 데이터베이스에서 가져와서 JSON 형식으로 응답합니다.
    const responseData = {
        message: 'This is the data you requested',
        value: 42,
    };

    res.json(responseData);
});