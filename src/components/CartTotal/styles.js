import styled from "styled-components";

export const CarTotalContainer = styled.div`
  padding-top: 10%;
  min-height: 20%;
  background-color: var(--color-grey-0);
  border-radius: 0px 0px 5px 5px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
    padding-bottom: 5%;

    color: var(--color-grey-100);
    font-weight: 600;
    font-size: 14px;
  }

  button {
    margin: 0 auto;
    width: 95%;
  }
`;
