import React, {useEffect, useState} from "react"
import "./movieList.css"
import Cards from "../card/card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
        .then(res => res.json())
        .then(data => setMovieList(data))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">Popular</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList