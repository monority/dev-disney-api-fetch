import React, { Component } from "react";
import { Modal } from "./Modal"

export default class MemberDetail extends Component {
  state = {
    movies: {},
    companies: {},

  };

  async getMovies(id) {
    const data = await fetch(`https://elorri.fr/api/disney-plus/movie/${id}`).then(
      (response) => response.json());
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

        <iframe width="420" height="315"
          src={this.state.movies.video}>
        </iframe>
        <p>{this.state.movies.description}</p>
        <p>{this.state.movies.company}</p>
      </div>
    );
  }
}
