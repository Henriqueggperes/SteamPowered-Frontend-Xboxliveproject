import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { genreService } from "services/gameGenreService";

const Genres = () => {
  


    const [genres,setGenres] = useState([{
    id: "",
    name: "",
    createdAt: "",
    updatedAt:"",
    game: [
      {
        id: "",
        imageUrl:"",
      }]
    }])

    const allGenres = async ()=>{
       const response:any = await genreService.getAllGenres();
       console.log(response.data)
    }

    useEffect(()=>{
        allGenres()
    },[])
  
    return (
    <>
      <section className="genres-container">
        {genres.map((element: any) => (
          <div className="game-card">
            <Link
              to={`/chosen-genre/${element.id}/profile/`}
              className="chosen-game-link"
            >
              <img src={element.game[0].imageUrl? element.game[0].imageUrl : "" } className="genre-card-image" />
            </Link>
            <div className="game-card-info-container">
              <span className="game-card-name">{element.name}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Genres;
