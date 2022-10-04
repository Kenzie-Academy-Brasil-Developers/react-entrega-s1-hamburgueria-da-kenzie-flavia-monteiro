import styled from "styled-components";

const ProductsCard = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;

  min-width: 58%;

  @media (max-width: 950px) {
    gap: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 2%;
    flex-wrap: nowrap;
    max-height: 52vh;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    margin: 0 auto;
  }
`;

export default ProductsCard;
