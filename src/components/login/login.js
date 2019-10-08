import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    handleChange = (data) => {
        this.setState({
            [data.target.id]: data.target.value
        })
    }

    render() {
        const { authError, auth } = this.props;
        return (
            <>
                {auth.uid ? <Redirect to='/create' /> :
                    <div>
                        <div id="grey-top">
                        </div>
                        <div className="container ">
                            <div className="jumbotron jumbotron-fluid p-5 mt-0 mb-5">
                                <h1 className="display-4 text-center mb-5">Logowanie</h1>
                                <form onSubmit={this.handleSubmit}>
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
                                    <div className="form-group row">
                                        <div className="col text-center">
                                            <button type="submit" className="btn btn-primary mt-4">Zaloguj się</button>
                                        </div>
                                    </div>
                                    <div className="row center">
                                        <div className="col">
                                            {authError ? <p className="text-center mb-0 mt-4 text-danger">{authError}</p> : null}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (date) => dispatch(signIn(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);