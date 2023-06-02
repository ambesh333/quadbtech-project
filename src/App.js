import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import BookingForm from './pages/booking/booking'

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="shows/:id" element={<Movie />}></Route>
                <Route path="/booking" element={<BookingForm />} />
                 <Route path="movies/MovieList" element={<MovieList />}></Route>
                {/* <Route path="/*" element={<h1>Error Page</h1>}></Route>  */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
