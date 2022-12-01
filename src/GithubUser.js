import { useParams } from "react-router-dom";
import { useGithubUser } from "./useGithubUser";

export function GithubUser() {
  const { username } = useParams();
  const { data, loading, error } = useGithubUser(username);

  return (
    <div className="HookForm">
      <h2>DRC -- Database ricerca criminali</h2>
      {error && <h1>Non è stato possibile trovare l'utente...</h1>}
      {loading && <h1>Ricerca utente...</h1>}
      {data && <h1>Il nome del ricercato è {data.name}</h1>}
      <p className="pUser">Il servizio vi è stato offerto dalla società OCP</p>
      <img
        src="https://seeklogo.com/images/O/ocp-logo-19A26FF17B-seeklogo.com.png"
        alt=""
        width="70"
        height="70"
        background-color="white"
      />
    </div>
  );
}

export default GithubUser;
