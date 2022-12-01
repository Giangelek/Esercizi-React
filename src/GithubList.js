import { useState } from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";

import { GithubUser } from "./GithubUser";

export function GithubList() {
  const [data, setData] = useState({
    inputField: "",
    usernames: [],
  });

  function handleInputSave(event) {
    event.preventDefault();
    setData((data) => {
      return {
        inputField: event.target.value,
        usernames: [...data.usernames],
      };
    });
  }

  const handleInputAdd = (event) => {
    event.preventDefault();
    setData((data) => {
      return {
        inputField: "",
        usernames: [...data.usernames, data.inputField],
      };
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div>
      
        <input value={data.inputField} onChange={handleInputSave}></input>
        <button
          disabled={data.inputField === "" ? true : false}
          onClick={handleInputAdd}
        >
          Search
        </button>
      </div>
      
      <ul>
        {data.usernames.map((username, index) => (
          <li key={index}>
            <Link to={`/users/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route index element={<p>Inserisci il nome del ricercato e selezionalo dalla lista</p>}/>
      </Routes>
      <Outlet />
    </div>
  );
}
