import * as S from "./style";
import {ReactComponent as Logo} from './../../assets/img/logo_steam.svg'
const HomePage = () => { 
  return (
    <S.Home>
      <S.HomeHeader> {/*HEADER*/}
         <S.HomeHeaderImgContainer>
           <Logo/>
         </S.HomeHeaderImgContainer>
           <S.HomeHeaderProfileCardContainer>
            
            <S.HomeHeaderProfileCard>  {/* Container que contém o mini card do perfil*/}
              
              <S.CardProfileImage>IMAGEM</S.CardProfileImage>
              
              <S.CardProfileContainer> {/*Mini card do perfil*/}
                <S.CardProfileName>Frenchie</S.CardProfileName>
                <S.CardProfileAdminSettings>Admin settings</S.CardProfileAdminSettings>
              </S.CardProfileContainer> {/*Mini card do perfil*/}
                <S.CardProfileCurrencyContainer>
                   <S.CardProfileCurrency>R$: 1,00</S.CardProfileCurrency>
                </S.CardProfileCurrencyContainer>
            
            </S.HomeHeaderProfileCard> {/* Container que contém o mini card do perfil*/}
           </S.HomeHeaderProfileCardContainer>
      </S.HomeHeader>{/*HEADER*/}

    </S.Home>
  );
};

export default HomePage;
