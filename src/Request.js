
const API_KEY ='25b3451482a4692301351dc099451eb5'

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,

    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,

    fetchRomance:`/discover/movie?api_key=${API_KEY}&with_genres=10749&
    primary_release_year=2020`,
    
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35&with_cast=23659&sort_by=revenue.desc`,
    
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    
    fetchToprated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
}


export default requests;












// https://api.themoviedb.org/3/discover/movie?api_key=25b3451482a4692301351dc099451eb5&with_genres=878&with_cast=500&sort_by=vote_average.desc

// console.log(process.env.API_KEY);console.log('ji');


// /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22
// /discover/movie?sort_by=popularity.desc
// /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc

// /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc

// /discover/movie?with_genres=18&primary_release_year=2014

// URL: /discover/movie?primary_release_year=2010&sort_by=vote_average.desc

// URL: /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc

// URL: /discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc

// URL: /discover/movie?with_people=287,819&sort_by=vote_average.desc


