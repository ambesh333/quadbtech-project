import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import svg from "./movie.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src={svg}/></Link>
                <Link to="/" style={{textDecoration: "none"}}><span>Home</span></Link>
                <Link to="movies/MovieList" style={{textDecoration: "none"}}><span>Popular</span></Link>
              
            </div>
        </div>
    )
}

export default Header