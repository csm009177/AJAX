
// 1. XMLHttpRequest 객체 생성
var xhr = new XMLHttpRequest();

// 2. 요청 초기화
xhr.open("GET", "https://example.com/data.json", true);
// GET 방식의 요청을 보내기 위해 'open' 메서드를 사용합니다.
// 세 번째 매개변수: 비동기 여부 (true: 비동기, false: 동기)

// 3. 상태 변화 이벤트 핸들러 등록
xhr.onreadystatechange = function () {
  // 4. 요청이 완료되면 실행
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 5. 응답 데이터 처리
    // 서버로부터 받은 응답 데이터는 'responseText'에 저장됩니다.
    var data = JSON.parse(xhr.responseText); // JSON 데이터를 파싱
    console.log(data); // 데이터를 콘솔에 출력하거나 다른 작업 수행 가능
  }
};

// 6. 요청 보내기
xhr.send();

// 7. 코드 실행이 여기까지 진행됩니다. 비동기로 데이터를 가져오는 중입니다.
// 따라서 요청이 완료되면 위에서 설정한 상태 변화 이벤트 핸들러가 호출됩니다.
