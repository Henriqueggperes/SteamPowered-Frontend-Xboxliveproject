import * as S from "./style";
import "./style.css"
import Header from "components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { profilesService } from "services/profilesService";
import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai"
import { BsController } from "react-icons/bs"
import  { AiOutlineSearch } from "react-icons/ai"
import Games from "components/Games";

const HomePage = () => {
  const params = useParams();
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();
  const [currentHomeState, setHomeCurrentState] = useState('Games')
  
  
  const handleCurrentHomeState = (event: any)=>{
    setHomeCurrentState(event.target.id)
  }
  

  const jwt = localStorage.getItem("jwt");
  
  useEffect(() => {
    getProfileById(params.id);
  }, []);

  const getProfileById = async (id: any) => {
    const response = await profilesService.getProfileById(id);
    if (response.data) {
      setProfile(response.data);
    } else if (response == 401) {
        navigate('/')
    }
  };



  return (
    <S.Home>
      <Header profile={profile}></Header>
      <S.HomeContentContainer>
      <header className="home-header">
          <span id="Games" className={`header-games-span-${currentHomeState} home-header-span `} onClick={handleCurrentHomeState}> Jogos <BsController className="header-game-controller"/></span>          
          <span id="Genres" className={`header-genres-span-${currentHomeState} home-header-span `} onClick={handleCurrentHomeState} > Gêneros <AiOutlineSearch className="header-genre-magnifier"/></span>
          <span id="Favorites" className={`header-favorites-span-${currentHomeState} home-header-span `} onClick={handleCurrentHomeState}>Favoritos <AiOutlineStar className="header-favorite-star"/></span>  
        </header>
        {currentHomeState=="Games"?<Games/>:currentHomeState=="Genres"? "": ""}
      </S.HomeContentContainer>
    </S.Home>
  );
};

export default HomePage;
