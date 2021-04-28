import React,{useState,useEffect} from 'react'
import axios from './Axios';
import './row.css';

function Rows(props) {
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        async function fetchurl(){
            const req = await axios.get(`${props.fetchURL}`);
            setMovies(req.data.results);
            return req;
        }
        fetchurl()
    },[props.fetchURL]);

    // console.log(movies);

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
                    (
                     <img 
                     className={`row-poster ${props.isLargeRow && "row-posterLarge"}`} 
                     key={item.id} 
                     alt={item.title} 
                     src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
                    )
                    // change above url to below one (assuming there is no dead link)
                    )
                }
            </div>
            
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
