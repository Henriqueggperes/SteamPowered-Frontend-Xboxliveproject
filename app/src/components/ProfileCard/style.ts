import styled, {css} from 'styled-components'

export const HeaderProfileCardContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: end;
    align-items: center;
  `}
`;

export const HeaderProfileCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgColor1};
    height: 65%;
    width: 30%;
    display: flex;
    margin: 30px 80px 10px;
    justify-content: start;
    align-items: center;
  `}
`;

export const CardProfileImage = styled.img`
  ${({ theme }) => css`
    height: 90%;
    width: 180%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
export const CardProfileContainer = styled.div`
  ${({ theme }) => css`
    height: 90%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 2px solid;
    border-radius: ;
    border-color: ${theme.colors.bgColor2};
  `}
`;
export const CardProfileName = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 80%;
    width: 100%;
    color: ${theme.colors.cardProfileNameColor};
    font-size: 1rem;
  `}
`;
export const CardProfileAdminSettings = styled.span`
${({theme})=>css`
 cursor: pointer;
 position: relative;
 top: 5px;
 height: 20%;
 width: 110%;
 color: ${theme.colors.headerTextColor};
 font-weight: bold;
 font-size:.7rem ;
`}
`
export const CardProfileCurrencyContainer = styled.div`
${({theme})=>css`
 height: 100%;
 width: 30%;
 display: flex;
 justify-content: center;
 align-items: center;
`}
`
export const CardProfileCurrency = styled.span`
${({theme})=>css`
  color: ${theme.colors.btnTextColor2};
  font-weight: ${theme.constants.fontWheight};
  font-size: 1.3rem;
`}
`
export const CrownImg = styled.img`
${({theme})=>css`
position: relative;
top: 25px;
right: 10px;
`}
`