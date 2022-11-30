import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [userData, setData] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);

        setData(json);
      });
  }, [username]);

  return (
    <div className="user">{userData && <h1> Name:{userData.name}</h1>}</div>
  );
}
