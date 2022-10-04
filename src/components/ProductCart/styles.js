import styled from "styled-components";

const ProductCard = styled.li`
  display: flex;
  width: 100%;
  padding: 5% 3%;
  justify-content: space-between;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border: 2px solid var(--color-grey-20);
    border-radius: 5px;
    background: var(--color-grey-20);
  }
  figure img {
    width: 70px;
    height: auto;
  }
  .div {
    margin: 0px 0px 0px 2%;
    display: flex;
    flex-direction: column;
  }
  div h3 {
    margin: 4% 0px 18% 0px;
    font-weight: 700;
    font-size: 14px;
    white-space: nowrap;
    width: 11vw;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  div p {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-grey-50);
  }
  button {
    margin-left: auto;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    background: none;
    border: none;
    color: var(--color-grey-50);
    font-weight: 500;
    font-size: 11px;
  }

  .MdAddCircle,
  .MdRemoveCircle {
    font-size: 11px;
    color: var(--color-primary);
  }
`;
export default ProductCard;

export const ProductCardButtons = styled.div`
  display: flex;
  flex-direction: column;

  .cards {
    display: flex;
  }
`;
