import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom'

export const Movie = ({ img, action, id }) => {
  return (
    <div className="wrapper">
      <Link to={`/movies/${id}`}>
        <figure onClick={action}>
          <img src={img} alt="" />
        </figure>
      </Link>
    </div>
  );
};

export default Movie;
