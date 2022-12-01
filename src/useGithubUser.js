import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  function onMutate(){
    mutate()
  }

  return { data, error, loading: !data && !error, onMutate };
}
