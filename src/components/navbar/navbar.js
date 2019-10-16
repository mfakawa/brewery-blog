import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';
import './navbar.scss';


class Navbar extends Component {

    state = {
        NavbarBackground: 'bg-transparent',
        navbarExpand: 'navbar-expand-md',
        navbarState: 'navbar-loguot'
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > 0) {
            this.setState({
                NavbarBackground: 'bg-dark'
            });
        }
        else {
            this.setState({
                NavbarBackground: 'bg-transparent'
            });
        }
    }

    render() {
        const { image } = this.props.profile;
        const { isEmpty } = this.props.auth;
        const { navbarExpand } = this.state;
        return (
            <div className="jumbotron m-0 p-0 bg-transparent sticky-top">
                <div className={this.state.NavbarBackground}>
                    <nav id={this.state.navbarState} className={`${navbarExpand} navbar navbar-dark justify-content-end`} >
                        <p id={this.state.NavbarTitle} className="text-white text-uppercase mb-0 align-items-start">Pięćdziesiąt <br></br> twarzy krafta</p>
                        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <div className="navbar-toggler-icon "></div>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item text-right">
                                    <NavLink to='/' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">Home</span><span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item text-right">
                                    <NavLink to='/about-us' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">O nas</span></NavLink>
                                </li>
                                <li className="nav-item text-right">
                                    <NavLink to='/brewing' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">Warzenie</span></NavLink>
                                </li>
                                <li className="nav-item text-right">
                                    <NavLink to='/events' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">Wydarzenia</span></NavLink>
                                </li>
                                <li className="nav-item text-right">
                                    <NavLink to='/testing' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">Degustacje</span></NavLink>
                                </li>
                                {!this.props.auth.uid &&
                                    <>
                                        <li className="nav-item text-right">
                                            <NavLink to='/login' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">Logowanie</span></NavLink>
                                        </li>
                                    </>
                                }
                                <li className="nav-item text-right">
                                    <NavLink to='/contact' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">Kontakt</span></NavLink>
                                </li>
                                {this.props.auth.uid &&
                                    <>
                                        <li className="nav-item dropdown text-right">
                                            <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dodaj</span>
                                            <div className=" dropdown-menu text-right bg-dark" aria-labelledby="navbarDropdownMenuLink">
                                                <NavLink to='/create' className="dropdown-item text-white bg-transparent"><span className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">Nowy wpis</span></NavLink>
                                                <NavLink to='/signup' className="dropdown-item text-white bg-transparent"><span className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">Nowy użytkownik</span></NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item text-right">
                                            <NavLink to='/' onClick={this.props.signOut} className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">Wyloguj</span></NavLink>
                                        </li>
                                    </>}
                            </ul>
                            {!isEmpty &&
                                <img id="navbar" className="rounded-circle float-right" src={image} alt="" />
                            }
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);