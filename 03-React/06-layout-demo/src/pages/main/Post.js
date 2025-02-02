import React, { memo } from "react";

import styled from "styled-components";

import FakeImg from "../../components/FakeImg.js";

const PostContainer = styled.div`
  flex: 1;

  .post-item {
    padding: 20px;

    h2 {
      font-size: 24px;
      font-weight: 700;
      margin: 10px auto;
    }

    h3 {
      font-size: 18px;
      font-weight: 500;
      margin: 10px auto;
    }

    p {
      font-size: 16px;
      line-height: 130%;
      font-weight: 400;
      margin-bottom: 7px;
    }
  }
`;

const Post = memo(() => {
  return (
    <PostContainer>
      {[1, 2, 3, 4, 5].map((v, i) => {
        return (
          <div className="post-item" key={i}>
            <h2>TITLE HEADING</h2>
            <h3>Title description, Dec 7 , 2017</h3>
            <FakeImg height="200">Image</FakeImg>
            <p>Some text...</p>
            <p>
              Sunt in culpa mea culpa mea culpa... Sunt in culpa mea culpa mea
              culpa... Sunt in culpa mea culpa mea culpa...
            </p>
            <br />
          </div>
        );
      })}
    </PostContainer>
  );
});

export default Post;
