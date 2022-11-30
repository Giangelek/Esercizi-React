import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, loading, error } = useGithubUser(username);

  return (
    <div className="HookForm">
      {error && <h1>Non è stato possibile trovare l'utente...</h1>}
      {loading && <h1>Ricerca utente...</h1>}
      {data && <h1>Il nome dell'utente è {data.name}</h1>}
    </div>
  );
}

export default GithubUser;
