import React from "react";

const Genre = ({ genres, handleGenre, selectedGenre }) => {
  return (
    <div style={{ backgroundColor: "#ccc", borderRadius: "2px" }}>
      <h3 className="m-3">Genres</h3>
      <ul className="list-group">
        {genres.map((genre) => (
          <li
            key={genre.id}
            className={
              genre === selectedGenre
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => handleGenre(genre)}
            style={{ cursor: "pointer" }}
          >
            {genre.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;
