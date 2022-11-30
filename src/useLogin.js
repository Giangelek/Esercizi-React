import { useState } from "react";

const useLogin = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const onForm = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };


  return { data, onForm };
};

export default useLogin;