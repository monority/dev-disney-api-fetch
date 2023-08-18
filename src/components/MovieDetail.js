import React, { Component } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom/cjs/react-router-dom";
export default class MovieDetail extends Component {
  state = {
    movies: {},
  };

  async getMovies(id) {
    const data = await fetch(
      `https://elorri.fr/api/disney-plus/movie/${id}`
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
      <>
        <div className="movie-detail">
          <Nav></Nav>
          <div className="container block">
            <div className="wrap-video">
              <iframe width="420" height="315" title="video bande annonce" src={this.state.movies.video}></iframe>
            </div>
            <div className="wrap-content"><p>{this.state.movies.description}</p>
              <h5>
                {this.state.movies.company}
              </h5>


            </div>
          </div>
        </div>
      </>
    );
  }
}
