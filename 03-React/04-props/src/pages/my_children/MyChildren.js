import React from "react";

import MyChildrenSub from "./MyChildrenSub";

const MyChildren = () => {
  return (
    <div>
      <h2>MyChildren</h2>
      <MyChildrenSub color="red">
        <b>Hello World</b>
      </MyChildrenSub>
      <MyChildrenSub color="green">안녕 React</MyChildrenSub>
      <MyChildrenSub color="blue"></MyChildrenSub>
    </div>
  );
};

export default MyChildren;
