import React, { Component } from "react";
import axios from "axios";

import Suggestions from "../components/Suggestion";

const API_URL = "https://restcountries.eu/rest/v2/name/";

class Search extends Component {
  signal = axios.CancelToken.source();
  state = {
    isLoading: false,
    error: false,
    query: "",
    results: []
  };

  componentDidMount() {}

  componentWillUnmount() {
    this.signal.cancel("Api is being canceled");
  }

  getInfo = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await axios.get(`${API_URL}${this.state.query}`, {
        cancelToken: this.signal.token
      });
      this.setState({ results: response.data, isLoading: true });
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Error", err.message);
      } else {
        this.setState({ isLoading: false });
      }
    }
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length >= 2) {
          // this.showDropdown()
          if (this.state.query.length % 1 === 0) {
            this.getInfo();
            console.log(`${API_URL}${this.state.query}`);
          }
        } else if (!this.state.query) {
          // this.hideDropdown()
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;
