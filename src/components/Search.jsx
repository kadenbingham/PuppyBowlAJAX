import { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [queryName, setQueryName] = useState("");
  const [queryTeam, setQueryTeam] = useState("");
  const [queryBreed, setQueryBreed] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSearch}>
        <p>
          Name: {queryName}
          <input
            type="text"
            value={queryName}
            onChange={(e) => setQueryName(e.target.value)}
          ></input>
          Team: {queryTeam}
          <input
            type="text"
            value={queryTeam}
            onChange={(e) => setQueryTeam(e.target.value)}
          ></input>
          Breed:{" "}
          <input
            type="text"
            value={queryBreed}
            onChange={(e) => setQueryBreed(e.target.value)}
          ></input>
          <button className="searchButton" type="submit">
            Search
          </button>
        </p>
      </form>
    </div>
  );
}

export default Search;
