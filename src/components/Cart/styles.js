import styled from "styled-components";

export const CartContainer = styled.div`
  gap: 1rem;
  margin: 0 auto;
  min-width: 26%;

  .title {
    color: var(--color-white);
    background: var(--color-primary);
    border-radius: 5px 5px 0px 0px;
    height: 65px;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    font-weight: 700;
    font-size: 18px;
  }

  .emptyCar {
    padding: 5rem 0 5rem 0;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    padding-bottom: 1rem;
    color: var(--color-grey-100);
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: var(--color-grey-50);
  }

  @media (max-width: 950px) {
    gap: 1rem;
    margin-bottom: 5%;
    padding-right: 5px;
    width: 38vw;
    max-height: 45vh;
  }
`;

export const ProductCartContainer = styled.ul`
  max-height: 50vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  padding-top: 1rem;
  background-color: var(--color-grey-0);
`;
