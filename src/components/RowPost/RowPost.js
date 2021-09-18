import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import "./RowPost.css"
import axios from "../../axios"
import{imageUrl,API_KEY} from "../../constants/constants"


function RowPost(props) {
    const[urlId,setUrlId]=useState('')
    const [movies, setMovies] = useState([])
   useEffect(() => {
       axios.get(props.url).then(response=>{
           setMovies(response.data.results)

       })
      
       
   }, [])
   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
      console.log(id)
      axios.get(`/movie/${id}}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
         if(response.data.results.length!==0){
             setUrlId(response.data.results[0])
         }else{
             console.log("array is empty")
         }
      })

  }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                    <img  onClick={()=>handleMovie(obj.id)}  className={props.isSmall ?"smallPosters":"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />



                )}
                
            </div>
           {urlId && <YouTube opts={opts} videoId={urlId.key}/>  }
            
        </div>
    )
}

export default RowPost
