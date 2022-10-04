import React from "react";

import { StyledButton } from "../../styles/button";
import HeaderContainer from "./styles";

const Header = ({ showProducts, inputValue, setInputValue }) => {
  return (
    <HeaderContainer>
      <nav>
        <div className="head">
          <span className="logoInit">Burguer</span>
          <span className="logoEnd">Kenzie</span>
        </div>
        <div>
          <form onSubmit={(event) => event.preventDefault()}>
            <input
              placeholder="Digitar Pesquisa"
              type="text"
              onChange={(event) => {
                setInputValue(event.target.value);
                showProducts(inputValue);
              }}
              value={inputValue}
            />
            <StyledButton
              buttonStyle="solid1"
              onClick={() => showProducts(inputValue)}
            >
              Pesquisar
            </StyledButton>
          </form>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
