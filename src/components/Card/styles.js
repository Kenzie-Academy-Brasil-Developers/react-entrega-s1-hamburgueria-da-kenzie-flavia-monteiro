import styled from "styled-components";

const Card = styled.li`
  width: 18vw;
  height: 48vh;
  color: var(--color-grey-100);
  background: var(--color-white);
  border: 2px solid var(--color-grey-20);
  border-radius: 5px;

  .imgContainer {
    display: flex;
    justify-content: center;
    height: 40%;
    margin: 0px;
    background: var(--color-grey-0);
  }

  figure img {
    max-width: max-content;
    max-height: max-content;
    align-items: baseline;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 5%;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-grey-300);
    margin-bottom: 1rem;
  }

  span {
    font-weight: 600;
    font-size: 14px;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }

  .button {
    height: 40px;
    width: 40%;
    border: var(--color-primary);
    background-color: var(--color-primary);
    color: var(--color-white);
  }
  .button:hover {
    height: 40px;
    border: var(--color-primary);
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  @media (max-width: 950px) {
    min-width: 25vw;

    .imgContainer {
      display: flex;
      justify-content: center;
      height: 100px;
      margin: 0px;
      background: var(--color-grey-0);
    }

    figure img {
      max-width: max-content;
      max-height: max-content;
      align-items: unset;
    }

    h2 {
      font-size: 16px;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      font-size: 10px;
    }

    span {
      font-size: 12px;
    }
  }
`;

export default Card;
