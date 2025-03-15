import React, { memo, useMemo } from "react";

import { useRouter } from "next/router";

import styled from "styled-components";

const ProductContainer = styled.div`
  background-color: #ff000055;
`;

const Product = memo(() => {
  const { query } = useRouter();

  const pList = [
    { category: "man", name: "티셔츠" },
    { category: "man", name: "청바지" },
    { category: "woman", name: "원피스" },
    { category: "woman", name: "스커트" },
  ];

  const currentList = useMemo(() => {
    if (!query?.category) {
      console.log(pList);
      return pList;
    }
    return pList.filter((v, i) => v.category == query?.category);
  }, [query]);

  return (
    <ProductContainer>
      <h2>{query?.category ? query?.category : <>전체상품</>}</h2>
      <ul>
        {!currentList ? (
          <li>검색결과가 없습니다</li>
        ) : (
          currentList?.map((v, i) => {
            return <li key={i}>{v.name}</li>;
          })
        )}
      </ul>
    </ProductContainer>
  );
});

export default Product;
