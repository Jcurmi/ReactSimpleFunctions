import React from "react";

const Suggestions = props => {
  console.log(props.results);
  const options = props.results.map(r => <li key={r.numericCode}>{r.name}</li>);
  return <ul>{options}</ul>;
};

export default Suggestions;
