import React, { useState, useEffect } from 'react';
import './booking.css';

const BookingForm = () => {
  const [movieName, setMovieName] = useState('');
  const [movieGenre, setMovieGenre] = useState('');
  const [userName, setUserName] = useState('');
  const [numTickets, setNumTickets] = useState(0);

  useEffect(() => {
    // Retrieve movie details from local storage
    const storedMovieName = localStorage.getItem('movieName');
    const storedMovieGenre = localStorage.getItem('movieGenre');
    setMovieName(storedMovieName || '');
    setMovieGenre(storedMovieGenre || '');
  }, []);

  const handleFormSubmit = (e) => {
  
    e.preventDefault();
    
  // Store user name and number of tickets in local storage
  localStorage.setItem('userName', userName);
  localStorage.setItem('numTickets', numTickets.toString());

  // Reset the form
  setUserName('');
  setNumTickets(0);
  };

  return (
    <div className="booking__container">
      <h1 className="booking__title">Book Tickets</h1>
      <form className="booking__form" onSubmit={handleFormSubmit}>
        <label htmlFor="movieName">Movie Name:</label>
        <input
          type="text"
          id="movieName"
          value={movieName}
          disabled
          className="booking__input"
        />
        <label htmlFor="movieGenre">Genre:</label>
        <input
          type="text"
          id="movieGenre"
          value={movieGenre}
          disabled
          className="booking__input"
        />
        <label htmlFor="userName">Name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="booking__input"
        />
        <label htmlFor="numTickets">Number of Tickets:</label>
        <input
          type="number"
          id="numTickets"
          value={numTickets}
          onChange={(e) => setNumTickets(Number(e.target.value))}
          className="booking__input"
        />
        <button type="submit" className="booking__submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;


