import React, { Component } from "react";

export default class MemberDetail extends Component {
  state = {
    movies: {},
  };

  async getMovies(id) {
    const data = await fetch(
      `https://elorri.fr/api/disney-plus/movies/${id}`
    ).then((response) => response.json());

    this.setState({
      movies: data,
    });
  }
  componentDidMount() {
    this.getMovies(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>Affichage du détail du membre n°{this.props.match.params.id}</h1>
      </div>
    );
  }
}
