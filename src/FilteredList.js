import React, { useMemo } from "react";

const List = (list) => {
  return <ul>{list.map((item) => ListItem(item))}</ul>;
};

const ListItem = (item) => {
    return <li>{item.name} </li>;
  };

const FilteredList = ({ users }) => {
  const filteredUsers = useMemo(
    () => users.filter((user) => user.age > 18),
    [users]
  );

  return <div className="divList">
    <h1>Accesso al database degli Avengers --- Benvenuto Capitan America</h1>
    <h3>Visualizzo lista Villain di competenza dell'iniziativa Avengers</h3>
    {List(filteredUsers)}
    </div>;
};

export default FilteredList;