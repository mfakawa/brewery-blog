import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { SignUp } from '../../store/actions/authAction';
import './signup.scss';

class Signup extends Component {
    state = {
        firstName: '',
        lastName: '',
        nick: '',
        email: '',
        password: '',
        image: []
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    handleSubmit = (data) => {
        data.preventDefault();
        this.props.signUp(this.state);
        this.props.history.push('/')
    }

    handleChange = (data) => {
        this.setState({
            [data.target.id]: data.target.value
        })
    }

    handleImage = (data) => {

        const imageFiles = data.target.files;
        const file = imageFiles[0];

        if (data.target.files[0].type.includes("image")) {
            var render = new FileReader();

            render.onloadend = () => {

                if (this.state.image === false) {
                    this.setState({
                        image: this.state.image.concat(render.result)
                    })
                }
                else {
                    this.setState({
                        image: ""
                    })
                    this.setState({
                        image: this.state.image.concat(render.result)
                    })
                }
            }
            render.readAsDataURL(file);
        } else {
            this.setState({
                image: []
            })
            data.target.value = "";
        }
    }

    render() {
        const { authError, auth } = this.props;
        const { image } = this.state;
        if (!auth.uid) return <Redirect to='/login' />

        return (
            <div id="sign-up">
                <div id="sign-up-top">
                </div>
                <div className="container">
                    <div className="jumbotron jumbotron-fluid p-5 mt-0 mb-5 my-sm-5 ">
                        <h1 className="text-center mb-5 ">Rejestracja</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label className="col-sm-3 col-md-2 col-form-label" htmlFor="firstName">Imię:</label>
                                <input className="col-sm-9 col-md-10 form-control" type="text" id="firstName" placeholder="imię..." onChange={this.handleChange} />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-md-2 col-form-label" htmlFor="lastName">Nazwisko:</label>
                                <input className="col-sm-9 col-md-10 form-control" type="text" id="lastName" placeholder="nazwisko..." onChange={this.handleChange} />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-md-2 col-form-label" htmlFor="nick">Nick:</label>
                                <input className="col-sm-9 col-md-10 form-control" type="text" id="nick" placeholder="nick..." onChange={this.handleChange} />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-md-2 col-form-label" htmlFor="email">Email:</label>
                                <input className="col-sm-9 col-md-10 form-control" type="email" id="email" placeholder="email..." onChange={this.handleChange} />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-md-2 col-form-label" htmlFor="password">Hasło:</label>
                                <input className="col-sm-9 col-md-10 form-control" type="password" id="password" placeholder="hasło..." onChange={this.handleChange} />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="file" className="col-sm-3 col-md-2">Zdjęcie profilowe:</label>
                                <input type="file" className="col-sm-9 col-md-10 form-control-file" id="file" onChange={this.handleImage} />
                            </div>
                            <img className="rounded-circle" src={image} alt="" />
                            <div className="form-group row">
                                <div className="col text-center">
                                    <button type="submit" className="btn btn-primary mt-4">Zarejestruj się</button>
                                </div>
                            </div>
                            <div className="row center">
                                <div className="col">
                                    {(authError && authError !== 'success') ? <p className="text-center mb-0 mt-4 text-danger">{authError}</p> : null}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(SignUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);