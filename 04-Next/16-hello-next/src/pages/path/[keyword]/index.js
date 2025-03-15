import React, { memo } from "react";

import { useRouter } from "next/router";

import styled from "styled-components";

const KeywordContainer = styled.div`
  background-color: #ff000055;
`;

const Keyword = memo(() => {
  const router = useRouter();
  console.log(router);

  const { query } = router;
  const { keyword } = query;

  return (
    <KeywordContainer>
      <h2>Keyword : {keyword}</h2>
    </KeywordContainer>
  );
});

export default Keyword;
