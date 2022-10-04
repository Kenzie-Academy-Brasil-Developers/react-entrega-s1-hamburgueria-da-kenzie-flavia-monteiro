import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
      /* Brand Colors */
      --color-primary: #27AE60;
      --color-primary-50: #93D7AF;
      --color-secondary: #EB5757;

      /* Grey Scale Palette */
      --color-grey-300: #828282;
      --color-grey-100: #333333;
      --color-grey-50: #828282;
      --color-grey-20: #E0E0E0;
      --color-grey-0: #F5F5F5;
      --color-white: #FFFFFF;


      /* Feedback Palette */
      --color-negative: #E60000;
      --color-warning :#FFCD07;
      --color-sucess: #168821;
      --color-information: #155BCB;
    }

   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    ul, ol, li{
        list-style: none;
    }
    img{
        max-width: 100%;
    }
    input, select{
        background: transparent;
        border: none;
    } 

    body{
        background: var( --color-white);
    }
    h1, h2, h3, h4, h5, h6, p, span, li, div{
    font-family: 'Inter', sans-serif;

}
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  ${({ containerDisplay }) => {
    switch (containerDisplay) {
      case "flex":
        return css`
          display: flex;
          justify-content: space-between;
        `;
      case "main":
        return css`
          display: flex;
          justify-content: center;
        `;
      default:
        return css`
          display: flex;
          flex-direction: column;
        `;
    }
  }}

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  max-width: 85vw;
  margin: 0 auto;
  padding: 1rem;
`;
