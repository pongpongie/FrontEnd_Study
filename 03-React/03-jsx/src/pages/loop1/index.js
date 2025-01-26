import React from "react";

const Loop1 = () => {
  const createListItems = (count) => {
    let li = [];
    for (let i = 0; i < count; i++) {
      li.push(<li key={i}>List Item {i}</li>);
    }
    return li;
  };

  return (
    <div>
      <h1>Loop1</h1>
      <p>{createListItems(5)}</p>
    </div>
  );
};

export default Loop1;
