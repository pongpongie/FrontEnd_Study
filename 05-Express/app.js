/**
 * yarn add express dotenv cors json-server@0.17.2
 *
 * 명령프롬프트(터미널)로 소스코드가 위치한 폴더로 이동 후 아래 명령으로 실행
 *
 * >>> node app.js
 */

/** 1) 필요한 패키지 로드 및 설정파일 로드 */
const path = require("path"); // 기본 내장 패키지
const express = require("express"); // yarn add express
const cors = require("cors"); // yarn add cors

// 현재 프로그램이 가동중인 위치와 환경설정 파일 이름을 결합
const env_path = path.join(__dirname, ".env.development");

// 환경설정 파일 로드
require("dotenv").config({ path: env_path });
// 로드한 설정값은 process.env.변수명 으로 접근
//console.log(process.env.HELLO);

/** 2) 데이터 파일 구성 */
// json 파일을 DB로 사용할 수 있는 패키지
const jsonServer = require("json-server");

// JSON 서버 구성
const jsonServerRouter = jsonServer.router(process.env.DBFILE);

// JSON 서버가 출력하는 응답 구조를 정의
jsonServerRouter.render = (req, res) => {
  const currentStatus = Object.keys(res.locals.data).length === 0 ? 404 : 200;
  const currentMessage = currentStatus === 404 ? "Not Found" : "OK";

  const json = {
    status: currentStatus,
    message: currentMessage,
    item: res.locals.data,
    timestamp: new Date().toISOString(),
  };

  res.header("Content-Type", "application/json; charset=utf-8");
  res.status(json.status).send(json);
};

/** 3) 백엔드 가동 */
// 백엔드 본체
const app = express();

// CORS 접근 허용
app.use(cors());

// Express에 json서버 연결
app.use(jsonServerRouter);
app.use(jsonServer.bodyParser);

app.listen(9000, () => {
  console.log("I'm start...!!!");
});
