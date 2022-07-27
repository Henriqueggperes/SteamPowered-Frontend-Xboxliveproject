import styled, { css } from "styled-components";

export const Home = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgColor1};
    background-size: cover;
    min-height: 100vh;
    min-width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  `}
`;

export const HomeContentContainer = styled.section`
${({theme})=>css`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`}
`

