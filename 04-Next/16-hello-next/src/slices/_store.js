import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import TrafficAccSlice from "@/slices/TrafficAccSlice";

// 기존의 store 객체를 리턴하는 함수로 감싼다.
const makeStore = () => {
  const store = configureStore({
    // 리듀서 설정 --> Slice 객체들을 나열하여 설정
    // Slice --> 백엔드와 통신하는 비동기 처리를 수행하는 객체
    //           백엔드 URL 1개 당 파일 하나 씩 생성
    reducer: (state, action) => {
      // next.js에서 추가 --> 서버 사이드 데이터를 클라이언트 사이드 Store에 통합
      if (action.type == HYDRATE) {
        return { ...action.payload };
      }
      const combineReducer = combineReducers({
        // slice 객체들을 나열
        TrafficAccSlice,
      });
      return combineReducer(state, action);
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  return store;
};

// Next.js에서 추가 --> store 객체를 리턴하는 함수를 createWrapper() 함수에 전달 후 리턴되는 개체를 export

const wrapper = createWrapper(makeStore, {
  debug: false,
});

export default wrapper;
