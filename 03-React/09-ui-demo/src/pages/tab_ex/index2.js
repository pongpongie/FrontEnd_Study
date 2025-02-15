import React, { memo, useCallback, useState, useMemo } from "react";

import styled from "styled-components";

import classnames from "classnames";

import { tabContent } from "../../dataset";

const TabExContainer = styled.div`
  .tab-button-group {
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    display: flex;

    .tab-button {
      display: block;
      padding: 14px 16px;
      min-width: 100px;
      font-size: 17px;
      color: #222;
      text-decoration: none;
      text-align: center;

      &:hover {
        background-color: #ddd;
      }

      &.active {
        background-color: #ccc;
      }
    }
  }
`;

const TabEx = memo(() => {
  const [tabIndex, setTabIndex] = useState(0);

  const onTabButtonClick = useCallback((e) => {
    e.preventDefault();

    const index = e.currentTarget.dataset.index;
    console.log("before -->", tabIndex);
    setTabIndex(index);
    console.log("after -->", tabIndex);
  }, []);

  const { subject, content } = useMemo(() => {
    return tabContent[tabIndex];
  }, [tabIndex]);

  return (
    <TabExContainer>
      <h2>TabEx</h2>

      <div className="tab-button-group">
        {tabContent.map((v, i) => {
          const mycls = classnames({
            "tab-button": true,
            active: tabIndex === i,
          });

          return (
            <a
              key={i}
              href={`#${v.id}`}
              data-index={i}
              className={mycls}
              onClick={onTabButtonClick}
            >
              {v.subject}
            </a>
          );
        })}
      </div>

      <div className="tab-page">
        <h3>{tabContent[tabIndex].subject}</h3>
        <p>{tabContent[tabIndex].content}</p>
      </div>
    </TabExContainer>
  );
});

export default TabEx;
