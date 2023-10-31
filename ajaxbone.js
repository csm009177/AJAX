var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com/data.json', true); // GET 요청을 보내고, 비동기적으로 처리
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText); // 서버에서 받은 JSON 데이터를 파싱
        console.log(data); // 데이터를 콘솔에 출력 또는 원하는 대로 처리
    }
};
xhr.send();