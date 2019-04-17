import React from "react";

const Filter = props => {
  console.log(props.filtereditems);
  const options = props.filtereditems.map(r => <li key={r}>{r.name}</li>);
  return <ul>{options}</ul>;
};

export default Filter;

// Could not load the array ID since all the values where different, I could have added a class model and mapped with the class
