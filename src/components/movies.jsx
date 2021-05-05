import React, { Component } from "react";
import getMovies from "../services/fakeMovies";
import getGenres from "../services/fakeGenres";
import Genre from "./genres";
import Pagination from "../common/pagination";
import Navbar from "./Navbar";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    allMovies: getMovies(),
    allGenres: getGenres(),
    pageSize: 5,
    currentPage: 1,
    selectedGenre: null,
    searchItem: "",
  };

  onDeleteHandler = (id) => {
    const movies = this.state.allMovies.filter((movie) => movie.id !== id);
    this.setState({
      allMovies: movies,
    });
  };

  handleLiked = (movie) => {
    const movies = [...this.state.allMovies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({
      allMovies: movies,
    });
  };
  handleGenre = (genre) => {
    this.setState({
      selectedGenre: genre,
      currentPage: 1,
    });
  };

  editSearchItem = (e) => {
    this.setState({
      searchItem: e.target.value,
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };
  render() {
    const {
      allMovies,
      currentPage,
      pageSize,
      selectedGenre,
      searchItem,
    } = this.state;
    const indexOfLastPage = currentPage * pageSize;
    const indexOfFirstPage = indexOfLastPage - pageSize;
    const movies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    const filteredMovies = selectedGenre
      ? movies.filter((movie) => movie.genre === selectedGenre.title)
      : movies;
    const currentMovies = filteredMovies.slice(
      indexOfFirstPage,
      indexOfLastPage
    );

    return (
      <>
        <Navbar
          handleInputSearch={this.handleInputSearch}
          editSearchItem={this.editSearchItem}
          searchItem={this.state.searchItem}
        />
        <div className="lousy">
          <div className="genre">
            <Genre
              genres={this.state.allGenres}
              handleGenre={this.handleGenre}
              selectedGenre={selectedGenre}
            />
          </div>
          <div className="container">
            {filteredMovies.length === 0 ? (
              <p className="lead">There are no movies in the table.</p>
            ) : (
              <p className="lead">
                There are {filteredMovies.length} movies in the table.
              </p>
            )}
            <MoviesTable
              currentMovies={currentMovies}
              handleLiked={this.handleLiked}
              onDeleteHandler={this.onDeleteHandler}
            />
            <Pagination
              moviesCount={filteredMovies.length}
              pageSize={pageSize}
              currentPage={currentPage}
              movies={movies}
              handlePageChange={this.handlePageChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
