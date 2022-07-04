import styled, { css } from "styled-components";

export const FavoritesGenresListContainer = styled.section`
  ${({ theme }) => css`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
  `}
`;
export const FavoritesGenresTitleContainer = styled.div`
  ${({ theme }) => css`
    height: 10%;
    width: 20%;
    display: flex;
  `}
`;
export const FavoritesGenresTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.headerTextColor};
    font-size: ${theme.constants.headingFontSize};
    margin: 50px 0 0 40px;
  `}
`;
export const GamesGenresContainer = styled.div`
  ${({ theme }) => css`
    height: 50%;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
  `}
`;

export const GameGenreCard = styled.div`
${({theme})=>css`
  margin-left:80px;
  margin-top: 10px;
  height: 70%;
  width: 10%;
  border-radius: 0.3rem;
  background-color: ${theme.colors.bgColor2};
`}
`
