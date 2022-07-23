import Header from "components/Header";
import "./style.css";

import { useState, useEffect } from "react";
import edit from "./../../assets/icons/edit.icon.svg"
import EditProfile from "pages/EditProfile";

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
  
  const selectProfile = ()=>{
    
  }

  return (
    <>
      <Header></Header>
      <section className="profiles_card-container">
        {profiles.map((element: any) => (
          <div className="profile-card" key={element.id}>
            <div className="profile_image-container">
              <img onClick={selectProfile} className="profile-image" src={element.imageUrl} />
              <Link  to={`/edit/profile/${element.id}`} >
              <img src={edit} className="edit_profile-icon"/>
              </Link>
            </div>
            <div className="profile_title-container">
              <span className="profile-title">{element.title}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Profiles;