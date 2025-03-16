/**
 * 백엔드 서버(Express)와 프론트엔드(Next.js)를 통합하는 파일
 *
 * yarn add express dotenv cors json-server@0.17.2
 */

/** 1) 필요한 패키지 로드 및 설정파일 로드 */
const path = require("path"); // 기본 내장 패키지

// 현재 프로그램이 가동중인 위치와 환경설정 파일 이름을 결합
const env_path = path.join(__dirname, ".env.development");

// 환경설정 파일 로드
require("dotenv").config({ path: env_path });

/** 2) 백엔드와 프론트엔드를 각각 로드 */
const backend = require("./backend/app");
const next = require("next");

const app = next({ dev: true });
const handler = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();
    backend.set("trust proxy", true);
    backend.get("*", (req, res) => {
      return handler(req, res);
    });
  } catch (ex) {
    console.error("");
    console.error("--------------------------------------------------");
    console.error(`${ex.name} Error (${ex.number})`);
    console.error(`${ex.message}`);
    console.error(
      `>>> ${ex.fileName}(Line: ${ex.lineNumber}, Column: ${ex.columnNumber})`
    );
    console.error("--------------------------------------------------\n");
  }
})();
