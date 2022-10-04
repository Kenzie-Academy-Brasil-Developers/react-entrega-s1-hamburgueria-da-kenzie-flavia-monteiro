import React from "react";
import Card from "../Card";

import ProductsCard from "./styles";

const ProductList = ({ products, currentSale, setCurrentSale }) => {
  return (
    <ProductsCard>
      {products.map((product) => (
        <Card
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
    </ProductsCard>
  );
};

export default ProductList;
