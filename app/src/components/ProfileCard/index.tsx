import * as S from './style'
import Crown from "./../../assets/icons/crown.svg"
import Frenchie from "./../../assets/img/Frenchie.png"


const ProfileCard = ({profileInfo}:any) => {
  console.log(profileInfo)
  return (
    <S.HeaderProfileCardContainer>
          <S.HeaderProfileCard>
            {" "}
            {/* Container que contém o mini card do perfil*/}
            <S.CardProfileImage src={profileInfo.imageUrl} />
            <S.CrownImg src={Crown}/>
            <S.CardProfileContainer>
              {" "}
              {/*Mini card do perfil*/}
              <S.CardProfileName>{profileInfo.title}</S.CardProfileName>
              <S.CardProfileAdminSettings>
                Admin settings
              </S.CardProfileAdminSettings>
            </S.CardProfileContainer>{" "}
            {/*Mini card do perfil*/}
            <S.CardProfileCurrencyContainer>
              <S.CardProfileCurrency>R$: 1,00</S.CardProfileCurrency>
            </S.CardProfileCurrencyContainer>
          </S.HeaderProfileCard>{" "}
          {/* Container que contém o mini card do perfil*/}
        </S.HeaderProfileCardContainer>
  )
}

export default ProfileCard