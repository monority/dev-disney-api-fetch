import React, { Component } from "react";

export default class MemberDetail extends Component {
  state = {
    movies: {},
  };

  async getMovies(id) {
    const data = await fetch("https://elorri.fr/api/disney-plus/movies").then(
        (response) => response.json());
    this.setState({
      movies: data,
    });
  }
  componentDidMount() {
    this.getMovies(this.props.match.params);
  }

  render() {
    return (
      <div>
        <h1>Film n°{this.props.match.params.id}</h1>
        <img src={this.props.match.params.cover} alt="" />
        <p>{this.props.match.params.description}</p>
      </div>
    );
  }
}
