import styled, { css } from "styled-components";

export const Home = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgColor1};
    min-height: 100vh;
    min-width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
  `}
`;
export const HomeHeader = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgColor2};
    height: 10vh;
    width: 100%;
    display: flex;
  `}
`;

export const HomeHeaderImgContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const HomeHeaderProfileCardContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: end;
    align-items: center;
  `}
`;

export const HomeHeaderProfileCard = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgColor1};
    height: 60%;
    width: 30%;
    display: flex;
    margin: 30px 80px 10px;
    justify-content: start;
    align-items: center;
  `}
`;

export const CardProfileImage = styled.div`
  ${({ theme }) => css`
    //MUDAR CONSTANTS DEPOIS
    height: 100%;
    width: 30%;
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
    color: ${theme.colors.cardProfileNameColor};
    font-size: ${theme.constants.profileNameFontSize};
  `}
`;
export const CardProfileAdminSettings = styled.span`
${({theme})=>css`
 color: ${theme.colors.headerTextColor};
 font-size:${theme.constants.adminSettingsFontSize} ;
`}
`
export const CardProfileCurrencyContainer = styled.div`
${({theme})=>css`
 height: 100%;
 width: 40%;
 display: flex;
 justify-content: center;
 align-items: center;
`}
`
export const CardProfileCurrency = styled.span`
${({theme})=>css`
  color: ${theme.colors.btnTextColor2};
  font-weight: ${theme.constants.fontWheight};
  font-size: ${theme.constants.currencyFontSize};
`}
`