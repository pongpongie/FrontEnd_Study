import React, { memo } from "react";

import styled from "styled-components";

const WishlistContainer = styled.div`
  background-color: #ff000055;
`;

const Wishlist = memo(() => {
  return (
    <WishlistContainer>
      <h2>Wishlist</h2>
    </WishlistContainer>
  );
});

export default Wishlist;
