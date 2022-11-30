import { useState } from "react";
import { GithubUser } from "./GithubUser";

export default function GithubList() {
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
    <div>
      <input value={data.inputField} onChange={handleInputSave}></input>
      <button
        disabled={data.inputField === "" ? true : false}
        onClick={handleInputAdd}
      >
        Search
      </button>
      <ul>
        {data.usernames.map((username, index) => (
          <li key={index} style={{ fontSize: 10 }}>
            <GithubUser username={username} />
          </li>
        ))}
      </ul>
    </div>
  );
}