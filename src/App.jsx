/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import api from "./services/api";
import { Container, GlobalStyle, StyledContainer } from "./styles/global";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        const prods = res.data.map((product) => {
          product.count = 0;

          return product;
        });
        console.log(prods);
        setProducts(prods);
      })
      .catch((error) => console.error(error));
  }, []);

  function showProducts(inputValue) {
    const newFilteredProducts = products.filter((filteredProducts) => {
      return (
        filteredProducts.name
          .toLowerCase()
          .includes(inputValue.toLowerCase().trim()) ||
        filteredProducts.category
          .toLowerCase()
          .includes(inputValue.toLowerCase().trim())
      );
    });
    setFilteredProducts(newFilteredProducts);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        showProducts={showProducts}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Container>
        <StyledContainer containerDisplay="main">
          <ProductList
            products={filteredProducts.length > 0 ? filteredProducts : products}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            showProducts={showProducts}
            inputValue={inputValue}
          />
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </StyledContainer>
      </Container>
    </div>
  );
}

export default App;
