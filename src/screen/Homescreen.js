import React from 'react'
import './Homescreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import Rows from '../Rows';
import requests from '../Request'



function Homescreen() {
    return (
        <div className="homeScreen">
            <Nav />

            <Banner />

            <Rows title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />

            <Rows title="Trending Now" fetchURL={requests.fetchTrending}/>
            
            <Rows title="Top rated" fetchURL={requests.fetchToprated} />
            
            <Rows title="Romantic Movies" fetchURL={requests.fetchRomance}/>
            
            <Rows title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
            
            <Rows title="Action Movies" fetchURL={requests.fetchActionMovies}/>
            
            <Rows title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
           
            <Rows title="Documentaries" fetchURL={requests.fetchDocumentaries}/>

        </div>
    )
}

export default Homescreen
