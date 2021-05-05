import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div className="m-3">
      <h1>Movie Form - {match.params.id}</h1>
      <button
        type="button"
        classname="btn btn-primary btn-info"
        onClick={() => history.push("/")}
      >
        Back
      </button>
    </div>
  );
};

export default MovieForm;
