import React from "react";
import Card from "./styles";
import { StyledButton } from "../../styles/button";

const Product = ({
  name,
  category,
  price,
  img,
  product,
  currentSale,
  setCurrentSale,
}) => {
  function handleClick(prod) {
    product.count++;
    if (!currentSale.find((item) => item.id === prod.id)) {
      setCurrentSale([...currentSale, prod]);
    } else {
      const prodsCounts = currentSale.filter((item) => item.id !== prod.id);
      setCurrentSale([...prodsCounts, product]);
    }
  }

  return (
    <Card>
      <figure className="imgContainer">
        <img src={img} alt={name} />
      </figure>
      <div>
        <h2>{name}</h2>
        <p>{category}</p>
        <span>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <StyledButton
          buttonSize="default"
          buttonStyle="solid1"
          onClick={() => handleClick(product)}
        >
          Adicionar
        </StyledButton>
      </div>
    </Card>
  );
};

export default Product;
