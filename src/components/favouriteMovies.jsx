import React, { useState } from "react";
import getMovies from "../services/fakeMovies";
import { Link } from "react-router-dom";

const FavouriteMovies = () => {
  const allMovies = [...getMovies()];
  const movies = allMovies.filter((movie) => movie.liked === true);
  return (
    <>
      <h2 className="text">Favourite Movies</h2>
      <table className="table table-light">
        <thead>
          <tr>
            <div className="row">
              <th scope="col" className="col-4 ml-3">
                Title
              </th>
              <div className="upDown col-3">
                <i
                  className="fa fa-caret-up"
                  aria-hidden="true"
                  tabindex="-1"
                />
                <i class="fa fa-caret-down" aria-hidden="true" tabindex="-1" />
              </div>
            </div>
            <th scope="col">Year of Released</th>
            <th scope="col">Director</th>
            <th scope="col">Genre</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </td>
              <td>{movie.yearReleased}</td>
              <td>{movie.director}</td>
              <td>{movie.genre}</td>
              {/* <td>
              <Like
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
            </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FavouriteMovies;
