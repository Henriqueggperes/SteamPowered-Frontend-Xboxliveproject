import api from "./api";

interface gameObj{
  gameName: string
  description: string
  imdbScore: any;
  imageUrl: string
  year: string
  trailerYouTubeUrl: string
  genreName: string
  gameplayYouTubeUrl:  string
}

interface genreObj{
    name:string
}

const gameService = {
    createGame: (values: gameObj )=> api.post('games', values)
    .then((response)=>{
        return response
    })
    .catch((error)=>{
        alert(error.response.message)
    }),
    
    getAllGames: ()=>api.get('games')
    .then((response)=>{
        return response
    })
    .catch((error)=>{
        alert(error.response.data.message)
    }),
    
    getGameById: (id:any)=> api.get(`games/${id}`)
    .then((response)=>{
        return response
    })
    .catch((error)=>{
        alert(error.response.data.message)
    })


}

const genreService = {
    createGenre: (values: genreObj)=>api.post('genres',values)
    .then((response)=>{
        return response
    })
    .catch((error)=>{
        alert(error.response.data.message)
    }),

    getAllGenres: ()=>api.get('genres')
    .then((response)=>{
        return response
    })
    .catch((error)=>{
        console.log(error.response.data.message)
    })
}

export {
    genreService,
    gameService,
}