import Header from "components/Header";
import "./style.css";

import { useState, useEffect } from "react";
import edit from "./../../assets/icons/edit.icon.svg"
import add from "./../../assets/icons/add-profile.svg"
import EditProfile from "pages/CreateEditProfile";

import { profilesService } from "./../../services/profilesService";
import { Link, useNavigate } from "react-router-dom";

const Profiles = () => {
  
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();
  
  
  const jwt = localStorage.getItem("jwt");
  
  const userProfiles = async () => {
    try {
      const response: any = await profilesService.getAllProfiles();
      setProfiles(response.data);
      console.log(profiles)
    } catch {
      if (!jwt) {
        alert("Acesso não autorizado, por favor, efetue o login");
        navigate("/");
      }
    }
  };
  
  useEffect(()=>{
    userProfiles();
  },[]);
  
  

  return (
    <>
      <Header></Header>
      <section className="profiles_card-container">
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
