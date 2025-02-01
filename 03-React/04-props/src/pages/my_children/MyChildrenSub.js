import React from "react";

const MyChildrenSub = ({ color, children }) => {
  return (
    <div>
      <h3>MyChildrenSub</h3>
      <font color={color}>{children}</font>
    </div>
  );
};

export default MyChildrenSub;
