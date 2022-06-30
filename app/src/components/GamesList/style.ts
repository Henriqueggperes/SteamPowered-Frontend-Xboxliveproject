import styled ,  { css } from 'styled-components'

export const FavoritesGenresListContainer = styled.section`
${({theme})=>css`
height:50%;
width: 100%;
display: flex;
`}
`
export const FavoritesGenresTitleContainer = styled.div`
${({theme})=>css`
height:10%;
width: 20%;
display: flex;
`}
`
export const FavoritesGenresTitle = styled.span`
${({theme})=>css`
 color: ${theme.colors.headerTextColor};
 font-size: ${theme.constants.headingFontSize};
 margin: 70px 0 0 40px;
`}
`





