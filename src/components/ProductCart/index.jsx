import React from "react";
import ProductCard, { ProductCardButtons } from "./styles";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const Product = ({
  name,
  category,
  img,
  product,
  currentSale,
  setCurrentSale,
}) => {
  function addCartAmount(prod) {
    product.count++;
    if (!currentSale.find((item) => item.id === prod.id)) {
      setCurrentSale([...currentSale, prod]);
    } else {
      const prodsCounts = currentSale.filter((item) => item.id !== prod.id);
      setCurrentSale([...prodsCounts, product]);
    }
  }
  function removeCardAmount(deletedCard) {
    product.count--;
    if (currentSale.find((item) => item === deletedCard)) {
      if (product.count > 0) {
        setCurrentSale([...currentSale]);
      } else {
        console.log("else " + product.count);
        const newCurrentList = currentSale.filter(
          (card) => card !== deletedCard
        );
        setCurrentSale(newCurrentList);
      }
    }
  }

  function removeCard(deletedCard) {
    if (currentSale.find((item) => item === deletedCard)) {
      product.count = 0;
      const newCurrentList = currentSale.filter((card) => card !== deletedCard);
      setCurrentSale(newCurrentList);
    }
  }

  return (
    <ProductCard>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="div">
        <h3>{name}</h3>
        <p>{category}</p>
      </div>
      <ProductCardButtons>
        <div className="cards">
          <button onClick={() => addCartAmount(product)}>
            <MdAddCircle className="MdAddCircle" />
          </button>
          <button>{product.count}</button>
          <button onClick={() => removeCardAmount(product)}>
            <MdRemoveCircle className="MdRemoveCircle" />
          </button>
        </div>
        <button onClick={() => removeCard(product)}>Remover</button>
      </ProductCardButtons>
    </ProductCard>
  );
};

export default Product;
