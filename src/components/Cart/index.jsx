import React from "react";
import CartTotal from "../CartTotal";
import ProductCart from "../ProductCart";
import { CartContainer, ProductCartContainer } from "./styles";

const Cart = ({ currentSale, setCurrentSale }) => {
  function removeAll() {
    currentSale.map((item) => (item.count = 0));
    setCurrentSale([]);
  }
  return currentSale.length ? (
    <CartContainer>
      <div className="title">Carrinho de Compras</div>
      <ProductCartContainer>
        {currentSale.map((product) => (
          <ProductCart
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            img={product.img}
            product={product}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        ))}
      </ProductCartContainer>
      <CartTotal
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        removeAll={removeAll}
      />
    </CartContainer>
  ) : (
    <CartContainer>
      <div className="title">Carrinho de Compras</div>
      <ProductCartContainer>
        <li className="emptyCar">
          <h2>Sua sacola está vazia</h2>
          <h4>Adicione Itens</h4>
        </li>
      </ProductCartContainer>
    </CartContainer>
  );
};

export default Cart;
