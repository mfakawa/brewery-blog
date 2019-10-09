import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';
import './navbar.scss';


class Navbar extends Component {

    state = {
        className: 'bg-transparent',
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
                className: 'bg-dark'
            });
        }
        else {
            this.setState({
                className: 'bg-transparent'
            });
        }
    }

    render() {
        const { image } = this.props.profile;
        const { isEmpty } = this.props.auth;
        return (
            <div className="jumbotron m-0 p-0 bg-transparent sticky-top">
                <div className={this.state.className}>
                    <nav id="navbar" className="navbar navbar-expand-md navbar-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown" >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">Home</span><span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/about-us' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">O nas</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/brewing' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">Warzenie</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/events' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">Wydarzenia</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/testing' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">Degustacje</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/login' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">Logowanie</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/contact' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse.show">Kontakt</span></NavLink>
                                </li>
                                {this.props.auth.uid &&
                                    <>
                                        <li className="nav-item">
                                            <NavLink to='/create' className="nav-link">Nowy wpis</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/signup' className="nav-link">Dodaj użytkownika</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/' onClick={this.props.signOut} className="nav-link">Wyloguj się</NavLink>
                                        </li>
                                    </>}
                            </ul>
                        </div>
                        {!isEmpty &&
                            <img id="navbar" className="rounded-circle float-right" src={image} alt='opis' />
                        }
                    </nav>
                </div >
            </div >
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