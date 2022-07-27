import Header from "components/Header";
import "./style.css";


import { useState, useEffect } from "react";
import edit from "./../../assets/icons/edit.icon.svg"
import add from "./../../assets/icons/add-profile.svg"
import backArrow from "./../../assets/icons/arrow.svg"

import { profilesService } from "./../../services/profilesService";
import { Link, useNavigate } from "react-router-dom";

const Profiles = () => {
  
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();
  
  
  const jwt = localStorage.getItem("jwt");
  
  const userProfiles = async () => {
    
      const response: any = await profilesService.getAllProfiles();
      if(response.data){
        setProfiles(response.data);
        console.log(profiles)
      }
    
      else if (response == 401) {
        alert("Acesso não autorizado, por favor, efetue o login");
        navigate("/");
      }
  };
  
  useEffect(()=>{
    userProfiles();
  },[]);
  
  

  return (
    <>
      <Header></Header>
      <section className="profiles_card-container">
        <Link to="/" className="link-to-login">
        <img src={backArrow}  className='back-arrow-image' alt="Icone de uma flecha para voltar de página"/>
        </Link>
        {profiles.map((element: any) => (
          <div className="profile-card" key={element.id}>
            <div className="profile_image-container">
              <Link to={`/homepage/profile/${element.id}`} className="homepage-link">
                <img className="profile-image" src={element.imageUrl} />
              </Link>
              <Link  to={`/edit/profile/${element.id}`} >
              <img src={edit} className="edit_profile-icon"/>
              </Link>
            </div>
            <div className="profile_title-container">
              <span className="profile-title">{element.title}</span>
            </div>
          </div>
        ))}
        <div className="add_profile_icon-container">
          <Link to="/create/profile">
            <img className="add_profile-icon" src={add} alt="Icone para adicionar um novo perfil" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Profiles;
