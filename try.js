const express = require('express');
const app = express();
const port = 3000;

// get
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/nt5.html');
});
// post
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

  // 여기에서 사용자 인증을 수행하고 로그인 여부를 확인합니다.

//   if (/* 사용자가 로그인에 성공했다면 */) {
//     res.send('로그인 되었습니다.');
//     } else {
//     res.send('로그인 실패');
//     }
});

app.listen(port, () => {
    console.log(`Server is running on port 
http://localhost:${port}`);
});
