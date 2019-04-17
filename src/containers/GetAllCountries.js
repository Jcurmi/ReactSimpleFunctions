import React, { Component } from "react";
import axios from "axios";
import Countries from "../components/CountryList";

const API_URL = `https://restcountries.eu/rest/v2/all/`;

class GetAllCountries extends Component {
  signal = axios.CancelToken.source();
  state = {
    isLoading: false,
    error: false,
    items: []
  };

  componentDidMount() {}

  componentWillUnmount() {
    this.signal.cancel("Api is being canceled");
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      this.setState({ isLoading: true });
      const response = await axios.get(`${API_URL}`, {
        cancelToken: this.signal.token
      });

      this.setState({ items: response.data, isLoading: true });
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
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Get All</button>
        <Countries items={this.state.items} />
      </form>
    );
  }
}

function checkStatus(resp) {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  const error = new Error(`HTTP Error ${resp.statusText}`);
  error.status = resp.statusText;
  error.resp = resp;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

export default GetAllCountries;
