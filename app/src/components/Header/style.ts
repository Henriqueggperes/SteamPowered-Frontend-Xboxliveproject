import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgColor2};
    height: 10vh;
    width: 100%;
    display: flex;
  `}
`;

export const HeaderImgContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
export const HeaderImgLogo = styled.img`
  ${({ theme }) => css`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

