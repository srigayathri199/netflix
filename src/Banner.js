import React,{useState,useEffect} from 'react'
import './Banner.css';
import axios from './Axios';
import requests from './Request.js';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
            return request;
        }
        fetchData()
    },[])
    console.log(movie);
    
    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1)+'...':string
    }

    return (
        <div>
            {movie.backdrop_path ?
            <header className="banner" style={{
                backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                
                backgroundPosition:"center center",
             
            }}>

            <div className="banner__contents">
                <h1 className="banner__title">
                {movie?.original_name || movie?.name || movie?.title}</h1>
                
                <p className="banner__description">{truncate(`${movie?.overview}`,150)}
                    
                 </p>

                <div                        
                className="banner__buttons">
                    <button  className="banner__button"> 
                    <PlayArrowRoundedIcon style={{fontSize:'1.2rem',paddingRight:'0.5rem'}}/>
                    Play</button>
                    <button  className="banner__button">
                        <AddRoundedIcon style={{fontSize:'1.2rem',paddingRight:'0.5rem'}} />
                        My List</button>
                </div>
            </div>
           

            <div className="banner__fadeBottom"/>


            </header>
            :''}
        </div>
    )
}

export default Banner
