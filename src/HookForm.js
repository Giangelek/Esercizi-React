import useLogin from "./useLogin";


export const HookForm = () => {
  const { data, onForm } = useLogin();

  return (
    <form className="HookForm">
        <h1>L'accesso al computer Centrale richiede l'autorizzazione:</h1>
        <h3>Inserire le proprie credenziali:</h3>
      <label>Grado e Cognome</label><input style={{width:200}} onChange={onForm} value={data.username} name="username" />
      <label>Codice di accesso</label><input style={{width:200}} onChange={onForm} value={data.password} type="password" name="password" />
      {data.username && <h3> Benvenuto {data.username} ! </h3>}
      {data.password && <h3> Il suo codice di accesso "{data.password}" è stato accettato!</h3>}
    </form>
  );
};