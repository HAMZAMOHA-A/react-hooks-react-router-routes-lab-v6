import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </div>
  );
}

export default Movie;

