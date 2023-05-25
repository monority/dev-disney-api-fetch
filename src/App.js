import Movie from "./components/Movie";
import "./sass/main.scss";
import { Component } from "react";
import { Button } from "./components/Button";
import Carrousel from "./components/carrousel";

export default class App extends Component {
  state = {
    movies: [],
    suggestmovies: [],
    showItem: 6,
    showSuggest: 3,
    companiesdata: {},
  };
  showDesc(){

  }

  async getMovies() {
    const data = await fetch("https://elorri.fr/api/disney-plus/movies").then(
      (response) => response.json()
    );
    this.setState({
      movies: data,
    });
  }
  async getSuggestMovies() {
    const data = await fetch("https://elorri.fr/api/disney-plus/suggest").then(
      (response) => response.json()
    );
    this.setState({
      suggestmovies: data,
    });
  }

  componentDidMount() {
    this.getMovies();
    this.getSuggestMovies();
  }

  render() {
    const listMovies = this.state.movies
      .slice(0, this.state.showItem)
      .map((item, index) => {
        return (
          <Movie
            key={item.id}
            id={item.id}
            img={item.poster}
            description={this.description}
            action={() => this.showDesc(this.description)}
          />
        );
      });

    const listSuggest = this.state.suggestmovies
      .slice(0, this.state.showSuggest)
      .map((item, index) => {
        return <Movie key={item.id} id={item.id} img={item.cover}/>;
      });

    return (
      <div>
        <nav>
          <div className="container">
            <img src={require("../src/img/logo.png")} alt="" />
          </div>
        </nav>
        <section id="carrousel">
          <div className="container"></div>
        </section>
        <section id="company">
          <div className="container">
            <div className="wrappers">
              <Button className="btn">
                <figure>
                  <img
                    src={require("../src/img/companies/logo-disney.png")}
                    alt=""
                  />
                </figure>
              </Button>
              <Button className="btn">
                <figure>
                  <img
                    src={require("../src/img/companies/logo-marvel.png")}
                    alt=""
                  />{" "}
                </figure>
              </Button>
              <Button className="btn">
                <figure>
                  <img
                    src={require("../src/img/companies/logo-pixar.png")}
                    alt=""
                  />{" "}
                </figure>
              </Button>
              <Button className="btn">
                <figure>
                  <img
                    src={require("../src/img/companies/logo-starwars.png")}
                    alt=""
                  />{" "}
                </figure>
              </Button>
            </div>
          </div>
        </section>

        <section id="new">
          <div className="container">
            <h1>Nouveautés</h1>
            <div className="wrappers">{listMovies}</div>
          </div>
        </section>
        <section id="suggest">
          <div className="container">
            <h1>Suggestions</h1>
            <div className="wrappers">{listSuggest}</div>
          </div>
        </section>
      </div>
    );
  }
}
