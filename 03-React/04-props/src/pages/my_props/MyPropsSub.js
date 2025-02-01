import React from "react";

const MyPropsSub = (props) => {
  return (
    <div>
      <h3>MySubProps</h3>
      <p>
        제 이름은 <b>{props.name}</b>이고, 나이는 <b>{props.age}</b>입니다.
      </p>
    </div>
  );
};

export default MyPropsSub;
