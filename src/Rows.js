import React,{useState,useEffect} from 'react'
import axios from './Axios';
import Youtube from 'react-youtube';
// import movieTrailer from 'movie-trailer'
import './row.css';

function Rows(props) {
    const [movies,setMovies] = useState([]);
    const [trailerUrl,settrailerUrl] = useState('');

    useEffect(()=>{
        async function fetchurl(){
            const req = await axios.get(`${props.fetchURL}`);
            setMovies(req.data.results);
            return req;
        }
        fetchurl()
    },[props.fetchURL]);

    console.log(movies);

    const getTrailer = async (item)=>{
        if(trailerUrl){
            settrailerUrl('');
        }else{
            const req = await axios.get(`/movie/${item.id}/videos?api_key=25b3451482a4692301351dc099451eb5`);
            console.log(req.data.results[0]);
            settrailerUrl(req.data.results[0].key);
        }
    }

    // console.log(trailerUrl);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }
    
    return (
        <div className="row">
            <div className="row-title">
                {props.title}
            </div>

            <div className="row-posters">
                {/* to avoid dead links */}
                {movies.map((item)=>
                 /* eslint-disable */ 
                ((props.isLargeRow && item.poster_path) || 
                (!props.isLargeRow && item.backdrop_path)) &&
                     (item.poster_path !== undefined ?
                     <img onClick={()=>getTrailer(item)}
                     className={`row-poster ${props.isLargeRow && "row-posterLarge"}`} 
                     key={item.id} 
                     alt={item.title} 
                     src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
                     :''
                    )
                    // change above url to below one (assuming there is no dead link)
                    )
                }
            </div>

            {trailerUrl && <Youtube videoId ={trailerUrl} opts={opts}/>
            }
            
        </div>
    )
}
// props.isLargeRow? item.poster_path      :item.backdrop_path


// const RowItem = (props)=>{
//     return(
//         <div className="item">
//             <img alt="" style={{width:'200px',height:'180px'}} src={`https://image.tmdb.org/t/p/original${props.poster}`}/>
//         </div>
//     )
// }

export default Rows;
