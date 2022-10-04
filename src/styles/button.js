/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid;
  transition: 0.4s;
  padding: 0 20px;
  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "big":
        return css`
          height: 60px;
        `;
      default:
        return css`
          height: 40px;
          width: 50%;
        `;
    }
  }}
  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "solid1":
        return css`
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--color-white);
          &:hover {
            background: var(--color-primary-50);
            border-color: var(--color-primary-50);
          }
        `;
      case "solid2":
        return css`
          background: var(--color-grey-20);
          border-color: var(--color-grey-20);
          color: var(--color-grey-300);
          &:hover {
            background: var(--color-grey-300);
            border-color: var(--color-grey-300);
            color: var(--color-grey-20);
          }
        `;
    }
  }}
  @media (max-width: 950px) {
    font-size: 12px;
    width: 90%;
  }
`;
