import React, { Component } from "react";
import companies from "./companies";
import logo from "../assets/img/logo.png";
import { Link } from 'react-router-dom/cjs/react-router-dom'
export default class CompanyName extends Component {
  state = {
    companies,
  };

  async getCompanies(name) {
    const data = await fetch(
      `https://elorri.fr/api/disney-plus/company/${name}`
    ).then((response) => response.json());

    this.setState({
      companies: data,
    });
  }

  componentDidMount() {
    this.getCompanies(this.props.match.params.name);
  }

  render() {
    const listCompanies = this.state.companies.map((item) => {
      return <div className="wrapper" key={item.id}>
              <Link to={`/movies/${item.id}`}>
        <img src={item.poster} alt="poster"/>
        </Link>
        </div>;
    });
    return (
      <div className="container">
        <Link to={`/`}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        </Link>
        
        <p className="pTitle">Les films de {this.props.match.params.name}</p>
        <div className="company">
        
      {listCompanies}
      </div>
      </div>
    );
  }
}
