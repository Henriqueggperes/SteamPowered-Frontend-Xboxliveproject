import * as S from "./style";
import "./style.css";
import Crown from "./../../assets/icons/crown.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "components/Modal";

const ProfileCard = ({ profileInfo }: any) => {
  const isAdmin = localStorage.getItem("isAdmin");
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = ()=> {
    if(!isModalOpen){
      setIsModalOpen(true)
    }
    else{
      setIsModalOpen(false)
    }
       
   
  }

  return (
    <>
      <S.HeaderProfileCardContainer>
        <S.HeaderProfileCard>
          {" "}
          {/* Container que contém o mini card do perfil*/}
          <Link to="/profiles" className="profiles-link">
            <S.CardProfileImage src={profileInfo.imageUrl} />
          </Link>
          {isAdmin == "true" ? <S.CrownImg src={Crown} /> : ""}
          <S.CardProfileContainer>
            {/*Mini card do perfil*/}
            <S.CardProfileName>{profileInfo.title}</S.CardProfileName>
            {isAdmin == "true" ? (
              
                <S.CardProfileAdminSettings onClick={handleModalOpen}>
                  Admin settings
                </S.CardProfileAdminSettings>
              
            ) : (
              ""
            )}
          </S.CardProfileContainer>{" "}
          {/*Mini card do perfil*/}
          <S.CardProfileCurrencyContainer>
            <S.CardProfileCurrency>R$: 1,00</S.CardProfileCurrency>
          </S.CardProfileCurrencyContainer>
        </S.HeaderProfileCard>{" "}
        {/* Container que contém o mini card do perfil*/}
      </S.HeaderProfileCardContainer>
      <Modal isOpen={isModalOpen} closeModal={handleModalOpen} onChange="" />
    </>
  );
};

export default ProfileCard;
