import React from "react";
import { StyledButton } from "../../styles/button";
import { CarTotalContainer } from "./styles";

const CartTotal = ({ currentSale, setcurrentSale, removeAll }) => {
  const totalPrice = currentSale.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual.price * valorAtual.count;
  }, 0);

  return (
    <CarTotalContainer>
      <div>
        <span>Total:</span>
        <span>
          {totalPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <StyledButton
        buttonSize="big"
        buttonStyle="solid2"
        onClick={() => removeAll()}
      >
        Remover Todos
      </StyledButton>
    </CarTotalContainer>
  );
};

export default CartTotal;
