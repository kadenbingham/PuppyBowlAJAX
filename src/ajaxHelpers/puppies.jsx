import React, { useState, useEffect } from "react";

function Puppies() {
  const [viewType, setViewType] = useState("players");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-AM/${viewType}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(data);
  return (
    <div>
      <button className="viewPlayers" onClick={setViewType("players")}>
        Players
      </button>
      <button className="viewTeams" onClick={setViewType("teams")}>
        Teams
      </button>
      <h1>Players List</h1>
      <ul>{data}</ul>
    </div>
  );
}

export default Puppies;
