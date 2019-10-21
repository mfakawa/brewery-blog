import React, { Component } from 'react';
import { createEntry } from '../../store/actions/projectAction';
import { connect } from 'react-redux';
import './createEntry.scss';
import { Redirect } from 'react-router-dom';


class CreateEntry extends Component {
    state = {
        title: '',
        text1: '',
        text2: '',
        description1: '',
        description2: '',
        photo1: [],
        photo2: [],
        option: ''
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    handleOption = (data) => {
        this.setState({
            option: data.target.value
        })
    }

    handleChange = (data) => {
        this.setState({
            [data.target.id]: data.target.value
        })
    }

    handleImage = (data) => {

        var imageFilesId = data.target.id;
        const file = data.target.files[0];

        if (data.target.files[0].type.includes("image")) {

            var render = new FileReader();

            render.onloadend = () => {
                if (this.state[imageFilesId] === false) {
                    this.setState({
                        [imageFilesId]: this.state[imageFilesId].concat(render.result)
                    })
                }
                else {
                    this.setState({
                        [imageFilesId]: ""
                    })
                    this.setState({
                        [imageFilesId]: this.state[imageFilesId].concat(render.result)
                    })
                }
            }
            render.readAsDataURL(file);
        } else {
            this.setState({
                [imageFilesId]: ""
            })
            data.target.value = "";
        }
    }

    handleSubmit = (data) => {
        data.preventDefault();
        this.props.createEntry(this.state);
        this.props.history.push('/');
    }

    render() {
        const { photo1, photo2 } = this.state;
        const { auth } = this.props;

        return (
            <>
                {auth.uid ? (
                    <div id="create-entry">
                        <div id="create-entry-top">
                        </div>
                        <div className="container">
                            <div className="jumbotron jumbotron-fluid px-5 mt-0 mb-5">
                                <h1 className="text-center mb-5 ">Nowy wpis</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <fieldset className="form-group">
                                        <div className="row">
                                            <legend className="col-form-label col-sm-3 col-md-2 pt-0">Kategoria</legend>
                                            <div className="col-sm-9 col-md-10">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="option" id="option1" value="brewing" onChange={this.handleOption} />
                                                    <label className="form-check-label" htmlFor="option1">Warzenie</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="option" id="option2" value="eventsNew" onChange={this.handleOption} />
                                                    <label className="form-check-label" htmlFor="option2">Wydarzenia - zapowiedz</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="option" id="option3" value="eventsOld" onChange={this.handleOption} />
                                                    <label className="form-chect-label" htmlFor="option3">Wydarzenia - relacja</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="option" id="option4" value="testing" onChange={this.handleOption} />
                                                    <label className="form-chect-label" htmlFor="option4">Degustacje</label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="form-group row">
                                        <label htmlFor="title" className="col-sm-3 col-md-2 col-form-label">Tytuł</label>
                                        <input type="text" className="form-control col-sm-9 col-md-10" id="title" placeholder="wpisz tytuł..." onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="text1" className="col-sm-3 col-md-2 col-form-label">Treść 1</label>
                                        <textarea type="text" className="form-control col-sm-9 col-md-10" id="text1" placeholder="wpisz treść..." onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="text2" className="col-sm-3 col-md-2 col-form-label">Treść 2</label>
                                        <textarea type="text" className="form-control col-sm-9 col-md-10" id="text2" placeholder="wpisz treść..." onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <div className="row mb-2">
                                            <label htmlFor="photo1" className="col-md-2">Zdjęcie 1</label>
                                            <input type="file" className="form-control-file  col-md-10" id="photo1" onChange={this.handleImage} />
                                        </div>
                                        <div className="row">
                                            <label htmlFor="photo2" className="col-md-2">Zdjęcie 2 (slider)</label>
                                            <input type="file" className="form-control-file col-md-10" id="photo2" onChange={this.handleImage} />
                                        </div>
                                    </div>
                                    <img className="m-2" src={photo1} alt="" />
                                    <img className="m-2" src={photo2} alt="" />
                                    <div className="form-group row">
                                        <label htmlFor="description1" className="col-sm-3 col-lg-2 col-form-label">Opis zdjęcia 1</label>
                                        <input type="text" className="form-control col-sm-9 col-lg-10" id="description1" placeholder="wpisz treść..." onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="description2" className="col-sm-3 col-lg-2 col-form-label">Opis zdjęcia 2</label>
                                        <input type="text" className="form-control col-sm-9 col-lg-10" id="description2" placeholder="wpisz treść..." onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group row">
                                        <div className="col text-center">
                                            <button type="submit" className="btn btn-primary mt-4">Zapisz</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : (
                        <Redirect to='/login' />
                    )
                }
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEntry: (entry) => dispatch(createEntry(entry))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEntry);