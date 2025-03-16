/**
 * yarn add express dotenv cors json-server@0.17.2
 *
 * 명령프롬프트(터미널)로 소스코드가 위치한 폴더로 이동 후 아래 명령으로 실행
 *
 * >>> node app.js
 */

/** 1) 필요한 패키지 로드 및 설정파일 로드 */
const express = require("express"); // yarn add express
const cors = require("cors"); // yarn add cors

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

const router = express.Router();
app.use(router);

// Express에 json서버 연결
app.use(process.env.NEXT_PUBLIC_API_BASE_URL, jsonServerRouter);
app.use(jsonServer.bodyParser);

app.listen(process.env.HTTP_PORT, () => {
  console.log(`Server Started on ${process.env.NEXT_PUBLIC_API_BASE_URL}`);
});

process.on("exit", function () {
  console.debug("Server shutted down");
});

process.on("SIGINT", () => {
  process.exit();
});

module.exports = app;
