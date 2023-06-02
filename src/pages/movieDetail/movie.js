import React, {useEffect, useState} from "react"
import "./movie.css"
import { useParams, useNavigate, Routes, Route } from "react-router-dom";
import BookingForm from "../booking/booking"
const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(res => res.json())
        .then(data => setMovie(data))
        
    }

    const handleBookTickets = () => {
        // Store movie details in local/session storage
        localStorage.setItem("movieName", currentMovieDetail.name);
        localStorage.setItem(
          "movieGenre",
          currentMovieDetail.genres.join(",")
        );
        // Redirect to the ticket booking form
        navigate("/booking");
      };

    console.log(getData)
        console.log("data") 
    return (
        <div className="movie">
            <div className="movie__intro">               
                <img className="movie__backdrop" src={`${currentMovieDetail ? currentMovieDetail.image.original : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                    <img className="movie__backdrop" src={`${currentMovieDetail ? currentMovieDetail.image.original : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.name : ""}</div>
                        
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.rating.average: ""} <i class="fas fa-star" />
                            
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.premiered : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" >{genre}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.summary: ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                     <a href={currentMovieDetail ? currentMovieDetail.officialSite: ""} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    <a href={"https://www.imdb.com/title/" + currentMovieDetail?.externals.imdb} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                  <button
                  onClick={handleBookTickets}
                  className="movie__homeButton movie__Button"
                >
                  Book Tickets
                  <i className="newTab fas fa-external-link-alt"></i>
                </button>
                }
            </div>
            <div className="movie__heading">Network</div>
            <div className="movie__production">
  {currentMovieDetail && (
    <span className="productionCompanyImage">
      <span className="field">
        <span className="fieldLabel">Company Name:</span>
        <span className="fieldValue">{currentMovieDetail?.network?.name}</span>
      </span>
      
      <span className="field">
        <span className="fieldLabel">Country Name:</span>
        <span className="fieldValue">{currentMovieDetail?.network?.country?.name}</span>
      </span>
      
      <span className="field">
        <span className="fieldLabel">Country Code:</span>
        <span className="fieldValue">{currentMovieDetail?.network?.country?.code}</span>
      </span>
      
      <span className="field">
        <span className="fieldLabel">Country Timezone:</span>
        <span className="fieldValue">{currentMovieDetail?.network?.country?.timezone}</span>
      </span>
    </span>
  )}
</div>

            
        </div>
    )
}

export default Movie