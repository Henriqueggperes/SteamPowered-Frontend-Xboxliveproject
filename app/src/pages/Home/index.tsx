import * as S from "./style";
import GamesList from "components/GamesList";
import Header from "components/Header";
import { useParams } from "react-router-dom";
import { profilesService } from "services/profilesService";
import { useEffect, useState } from "react";
const HomePage = () => { 
  const params = useParams();
  const [profile, setProfile] = useState([]);
  const isAdmin = localStorage.getItem("isAdmin")
  
  useEffect(()=>{
    getProfileById(params.id)
  },[])

  const getProfileById = async (id: any) => {
    const response = await profilesService.getProfileById(id);
    if (response) {
      setProfile(response.data);
    }

  };


  return (
    <S.Home>
      <Header profile={profile} ></Header>
      <S.HomeContentContainer>
        <GamesList></GamesList>
      </S.HomeContentContainer>
    </S.Home>
  );
};

export default HomePage;
