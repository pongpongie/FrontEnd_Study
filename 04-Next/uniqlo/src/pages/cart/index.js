import React, { memo } from "react";

import styled from "styled-components";

const CartContainer = styled.div`
  background-color: #ff000055;
`;

const Cart = memo(() => {
  return (
    <CartContainer>
      <h2>Cart</h2>
    </CartContainer>
  );
});

export default Cart;
