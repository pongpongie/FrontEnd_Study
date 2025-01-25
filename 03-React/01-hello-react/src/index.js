import React from "react"; // 리액트 기본 패키지
import ReactDOM from "react-dom/client"; // DOM 구성을 위한 패키지
import App from "./App"; // 현 파일(index.js)와 동일한 위치의 App.js를 App이라는 이름으로 가져옴, 만약 './'를 작성해주지 않으면 node-modules에서 모듈을 찾는다.

// 컴포넌트를 페이지에 렌더링 하는 과정
// React.StrictMode는 선언만 하고 사용되지 않는 변수들에 대한 경고 메시지가 브라우저에 출력되고, console.log()를 통한 출력문이 2중으로 표시되는 단점이 있다.
// 개발용이므로 배포시에는 제거 필요.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
