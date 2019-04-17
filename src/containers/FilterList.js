import React, { Component } from "react";
import axios from "axios";
import Filter from "../components/FilterCountries";

const API_URL = `https://restcountries.eu/rest/v2/all`;

class GetCountryByFilter extends Component {
  signal = axios.CancelToken.source();
  state = {
    isLoading: false,
    error: false,
    filterkey: "",
    filtereditems: []
  };

  componentDidMount() {}

  componentWillUnmount() {
    this.signal.cancel("Api is being canceled");
  }

  handleChange = event => {
    this.setState({ filterkey: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      this.setState({ isLoading: true });
      const response = await axios.get(
        `${API_URL}?fields=${this.state.filterkey}`,
        {
          cancelToken: this.signal.token
        }
      );
      this.setState({ filtereditems: response.data, isLoading: true });
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Error", err.message);
      } else {
        this.setState({ isLoading: false });
      }
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Filter By:
            <input type="text" name="filterkey" onChange={this.handleChange} />
          </label>
          <button type="submit">Filter</button>
          <Filter filtereditems={this.state.filtereditems} />
        </form>
      </div>
    );
  }
}

export default GetCountryByFilter;
