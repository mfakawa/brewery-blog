import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { SignUp } from '../../store/actions/authAction';


class Signup extends Component {
    state = {
        firstName: '',
        lastName: '',
        nick: '',
        email: '',
        password: '',
        image: []
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
        if (this.props.authError === 'success') {
            this.props.history.push('/')
        }
    }

    handleChange = (data) => {
        this.setState({
            [data.target.id]: data.target.value
        })
    }

    handleImage = (data) => {

        const imageFiles = data.target.files;
        const file = imageFiles[0];

        const render = new FileReader();

        render.onloadend = () => {
            this.setState({
                image: this.state.image.concat(render.result)
            })
        }
        render.readAsDataURL(file);
    }

    render() {
        const { authError, auth } = this.props;
        const { image } = this.state;
        if (!auth.uid) return <Redirect to='/login' />

        return (
            <div>
                <div id="grey-top">
                </div>
                <div className="container">
                    <div className="jumbotron jumbotron-fluid p-5 mt-0 mb-5">
                        <h1 className="display-4 text-center mb-5 ">Rejestracja</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="firstName">Imię</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="text" id="firstName" placeholder="imię..." onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="lastName">Nazwisko</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="text" id="lastName" placeholder="nazwisko..." onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="nick">Nick</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="text" id="nick" placeholder="nick..." onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="email">Email</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="email" id="email" placeholder="email..." onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="password">Hasło</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="password" id="password" placeholder="hasło..." onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="file">Zdjęcie profilowe</label>
                                <input type="file" className="form-control-file" id="file" onChange={this.handleImage} />
                            </div>
                            <img src={image} alt="user awatar" />
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