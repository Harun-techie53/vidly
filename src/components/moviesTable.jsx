import React from "react";
import { Link } from "react-router-dom";
import Like from "../common/like";
import "./moviesTable.css";
const MoviesTable = ({ currentMovies, handleLiked, onDeleteHandler }) => {
  return (
    <table className="table table-light">
      <thead>
        <tr>
          <div className="row">
            <th scope="col" className="col-4 ml-3">
              Title
            </th>
            <div className="upDown col-3">
              <i className="fa fa-caret-up" aria-hidden="true" tabindex="-1" />
              <i class="fa fa-caret-down" aria-hidden="true" tabindex="-1" />
            </div>
          </div>
          <th scope="col">Year of Released</th>
          <th scope="col">Director</th>
          <th scope="col">Genre</th>
          <th scope="col">Liked</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {currentMovies.map((movie) => (
          <tr key={movie.id}>
            <td>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </td>
            <td>{movie.yearReleased}</td>
            <td>{movie.director}</td>
            <td>{movie.genre}</td>
            <td>
              <Like
                liked={movie.liked}
                handleLiked={() => handleLiked(movie)}
              />
            </td>
            <td>
              <button
                onClick={onDeleteHandler.bind(this, movie.id)}
                style={{ cursor: "pointer" }}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
