import React from "react";

const Countries = props => {
  console.log(props.items);
  const options = props.items.map(r => <li key={r.numericCode}>{r.name}</li>);
  return <ul>{options}</ul>;
};

export default Countries;
