import Header from "components/Header";
import "./style.css";
import backArrow from "./../../assets/icons/arrow.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import cam from "./../../assets/img/camera.png";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { profilesService } from "services/profilesService";
import { useEffect } from "react";

const EditProfile = () => {
  const [profile, setProfile] = useState<any>({});
  const params = useParams();
  const navigate = useNavigate();

  const getProfile = async () => {
    const response: any = await profilesService.getProfileById(params.id);
    setProfile(response.data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
    console.log(profile);
  };

  const submitUpdatedProfile = async (event:React.SyntheticEvent) => {
    event.preventDefault()
    const response: any = await profilesService.patchProfileById(
      params.id,
      profile
    );
    if(response){
      alert('Perfil atualizado com sucesso');
      navigate('/profiles')
    }
  };

  return (
    <>
      <Header></Header>
      <section className="content-container">
        <div className="section_header-container">
          <Link to="/profiles" className="profiles-link">
            <img
              className="back_arrow-icon"
              src={backArrow}
              alt="Botão, icone de uma flecha para voltar uma página"
            />
          </Link>
          <span className="section_header-title">EDITAR PERFIL</span>
        </div>
        <div className="edit_profile_form-container">
          <form onSubmit={submitUpdatedProfile} className="edit_profile-form">
            <div className="edit_profile_img-container">
              <img
                src={profile?.imageUrl}
                alt=""
                className="edit_profile-image"
              />
            </div>
            <div className="name_input-container">
              <label htmlFor="imageUrl">URL da imagem do perfil</label>
              <input
                type="text"
                name="imageUrl"
                className="photo-input input"
                placeholder={profile?.imageUrl}
                onChange={handleChange}
              />
            </div>
            <div className="name_input-container">
              <label htmlFor="title">Nome do perfil</label>
              <input
                type="text"
                name="title"
                className="name-input input"
                value={profile?.title}
                onChange={handleChange}
              />
            </div>
            <div className="buttons-container">
              <button type="submit" className="update-button button">ATUALIZAR</button>
              <button className="delete-button button">DELETAR</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditProfile;
