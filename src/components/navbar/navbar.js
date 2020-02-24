import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";
import "./navbar.scss";
import { SingleLink } from "./SingleLink";

class Navbar extends Component {
  state = {
    navbarBackground: "bg-transparent",
    navbarExpand: "navbar-expand-md",
    navbarState: "navbar-loguot",
    links: {
      home: { title: "Home", path: "" },
      aboutUs: { title: "O nas", path: "about-us" },
      brewing: { title: "Warzenie", path: "brewing" },
      testing: { title: "Degustacje", path: "testing" },
      login: { title: "Logowanie", path: "login" },
      contact: { title: "Kontakt", path: "contact" }
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      this.setState({
        navbarBackground: "bg-dark"
      });
    } else {
      this.setState({
        navbarBackground: "bg-transparent"
      });
    }
  };

  render() {
    const { image } = this.props.profile;
    const { isEmpty } = this.props.auth;
    const { navbarExpand, navbarBackground, navbarState, links } = this.state;
    return (
      <div className="jumbotron m-0 p-0 bg-transparent sticky-top">
        <div className={navbarBackground}>
          <nav
            id={navbarState}
            className={`${navbarExpand} navbar navbar-dark justify-content-end`}
          >
            <NavLink to="/">
              <p className="text-white text-uppercase mb-0 align-items-start">
                Pięćdziesiąt <br></br> twarzy krafta
              </p>
            </NavLink>
            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="navbar-toggler-icon "></div>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <SingleLink linkParameters={links.home} />
                <SingleLink linkParameters={links.aboutUs} />
                <SingleLink linkParameters={links.brewing} />
                <SingleLink linkParameters={links.testing} />
                <SingleLink linkParameters={links.login} />
                <SingleLink linkParameters={links.contact} />
                {this.props.auth.uid && (
                  <>
                    <li className="nav-item dropdown text-right">
                      <span
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dodaj
                      </span>
                      <div
                        className=" dropdown-menu text-right bg-dark"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <NavLink
                          to="/create"
                          className="dropdown-item text-white bg-transparent"
                        >
                          <span
                            className="nav-link"
                            data-toggle="collapse"
                            data-target=".navbar-collapse.show"
                          >
                            Nowy wpis
                          </span>
                        </NavLink>
                        <NavLink
                          to="/signup"
                          className="dropdown-item text-white bg-transparent"
                        >
                          <span
                            className="nav-link"
                            data-toggle="collapse"
                            data-target=".navbar-collapse.show"
                          >
                            Nowy użytkownik
                          </span>
                        </NavLink>
                      </div>
                    </li>
                    <li className="nav-item text-right">
                      <NavLink
                        to="/"
                        onClick={this.props.signOut}
                        className="nav-link"
                      >
                        <span
                          data-toggle="collapse"
                          data-target=".navbar-collapse.show"
                        >
                          Wyloguj
                        </span>
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
              {!isEmpty && (
                <img
                  id="navbar"
                  className="rounded-circle float-right"
                  src={image}
                  alt=""
                />
              )}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
