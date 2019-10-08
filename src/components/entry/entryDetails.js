import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import './entryDetails.scss';
import EntryPN from './entryPN';
import moment from 'moment';
import 'moment/locale/pl';


class EntryDetails extends Component {

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    render() {
        const { id, entry, otherEntry } = this.props;
        if (entry) {
            return (
                <div id="entry-details">
                    <div className="jumbotron pb-5 pt-0 bg-transparent shadow-sm display-4">
                        <div id="entry-details-title" className="container">{entry.title}</div>
                    </div>
                    <div className="jumbotron jumbotron-fluid bg-transparent m-0 py-0">
                        <div className="container ">
                            <p id="entry-details-content-date" className="mb-4 pb-3 text-muted border-bottom border-secondary">Autor: {entry.nick} <span>data publikacji: {moment(entry.createAt.toDate()).locale('pl').format('LLL')}</span></p>
                            <p id="entry-details-content-body" className="mb-4 text-justify">{entry.text1}</p>
                            <img src={entry.image} alt="zdjęcie piwa" className="mb-4" />
                            <p id="entry-details-content-body" className="text-justify mb-4 mb-md-5 pb-4 border-bottom border-dark">{entry.text2}</p>
                        </div>
                        <div id="head-shadow" className="jumbotron jumbotron-fluid m-0 p-0">
                            <div className="row justify-content-center m-0">
                                <h1 className="m-3 my-sm-4 display-4 font-italic font-weight-bold text-center text-dark">Zobacz także</h1>
                            </div>
                        </div>
                    </div>
                    <div className="jumbotron p-0 m-0 bg-transparent">
                        {otherEntry && otherEntry.map((other, index, array) => {
                            if (id === other.id) {

                                let previous = array[index - 1];
                                let next = array[index + 1];

                                if (index !== 0 && index + 1 < array.length) {
                                    return (
                                        <div className="row m-auto py-4 py-md-5 justify-content-center" key={other.id}>
                                            <EntryPN status={previous} />
                                            <EntryPN status={next} />
                                        </div>
                                    )
                                } else if (index === 0) {
                                    return (
                                        <div className="row m-auto py-4 py-md-5 justify-content-center">
                                            <EntryPN status={next} />
                                        </div>
                                    )
                                } else if (index + 1 === array.length) {
                                    return (
                                        <div className="row m-auto py-4 py-md-5 justify-content-center">
                                            <EntryPN status={previous} />
                                        </div>
                                    )
                                }
                            }
                            else {
                                return (
                                    null
                                )
                            }
                        }
                        )}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="jumbotron bg-white">
                        <p>Loading...</p>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {

    const id = ownProps.match.params.id;

    if (ownProps.match.path.includes("entry-events-old")) {
        var events = state.firestore.data.eventsOld;
        var otherEntry = state.firestore.ordered.eventsOld;
    } else if (ownProps.match.path.includes("entry-events-new")) {
        events = state.firestore.data.eventsNew;
        otherEntry = state.firestore.ordered.eventsNew
    } else if (ownProps.match.path.includes("entry-brewing")) {
        events = state.firestore.data.brewing;
        otherEntry = state.firestore.ordered.brewing;
    } else if (ownProps.match.path.includes("entry-testing")) {
        events = state.firestore.data.testing;
        otherEntry = state.firestore.ordered.testing;
    }

    const entry = events ? events[id] : null
    return {
        id: id,
        entry: entry,
        otherEntry: otherEntry,
    }
}

export default compose(
    connect(mapStateToProps),
    // firestoreConnect([
    //     { collection: 'eventsOld' }
    // ])
)(EntryDetails);