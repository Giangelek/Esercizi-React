import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(username != null ? `https://api.github.com/users/${username}` : null, fetcher)

  function onMutate(){
    mutate()
  }

  return { data, error, loading: !data && !error, onMutate };
}
