import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: var(--color-grey-0);

  nav {
    width: 100%;
    max-width: 85vw;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .head {
    padding-top: 1rem;
  }

  .logoInit {
    font-weight: 700;
    font-size: 26px;
    color: var(--color-grey-100);
  }

  .logoEnd {
    font-weight: 600;
    font-size: 18px;
    color: var(--color-secondary);
    margin-left: 5px;
  }

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 15px;
    gap: 2rem;
    width: 22rem;
    height: 60px;
    background: var(--color-white);
    border: 2px solid var(--color-grey-20);
    border-radius: 8px;
  }

  @media (max-width: 950px) {
    nav {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    form {
      margin-top: 1rem;
      width: 80%;
      height: 45px;
    }
  }
`;

export default HeaderContainer;
