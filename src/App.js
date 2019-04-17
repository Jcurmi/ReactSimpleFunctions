import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Search from "./containers/Search";
import GetAllCountries from "./containers/GetAllCountries";
import FilterList from "./containers/FilterList";

const App = () => (
  <Div>
    <FilterList />
    <Search />
    <GetAllCountries />
  </Div>
);

const Div = styled.div`
  padding: 2rem;
`;
export default App;
