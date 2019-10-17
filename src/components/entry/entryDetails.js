import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import './entryDetails.scss';
import EntryPN from './entryPN';
import moment from 'moment';
import 'moment/locale/pl';


class EntryDetails extends Component {

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    componentDidUpdate = () => {
        window.scrollTo(0, 0);
    }

    render() {
        const { id, entry, otherEntry } = this.props;
        if (entry) {
            return (
                <div id="entry-details">
                    <div className="grey-top">
                    </div>
                    <div className="jumbotron mt-3 mt-lg-0 p-3 p-md-5 bg-light shadow-sm">
                        <h1 className="container">{entry.title}</h1>
                    </div>
                    <div className="jumbotron jumbotron-fluid bg-transparent m-0 py-0">
                        <div className="container">
                            <p id="entry-details-content-date" className="mb-4 pb-3 text-muted border-bottom border-secondary">Autor: {entry.nick} <span>data publikacji: {moment(entry.createAt.toDate()).locale('pl').format('LLL')}</span></p>
                            <div className="img-center">
                                <img src={entry.photo1} alt="" className="mb-2" />
                            </div>
                            <p className="font-italic border-bottom pb-2"><small>{entry.description1}</small></p>
                            <p id="entry-details-content-body" className="mb-4 text-justify">{entry.text1}</p>
                            <div className="img-center">
                                <img src={entry.photo2} alt="" className="mb-2" />
                            </div>
                            <p className="font-italic border-bottom pb-2"><small>{entry.description2}</small></p>
                            <p id="entry-details-content-body" className="text-justify mb-4 mb-md-5 pb-4 border-bottom">{entry.text2}</p>
                        </div>
                    </div>
                    <EntryPN otherEntry={otherEntry} id={id} />
                </div>
            );
        } else {
            return (
                <div id="entry-details-error" className="jumbotron jumbotron-fluid bg-transparent">
                    <div className="container">
                        <p>Loading...</p>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {

    let id = ownProps.match.params.id;

    if (ownProps.match.path.includes("entry-events-old")) {
        var events = state.firestore.data.eventsOld;
        var otherEntry = state.firestore.ordered.eventsOld;
    } else if (ownProps.match.path.includes("entry-events-new")) {
        events = state.firestore.data.eventsNew;
        otherEntry = state.firestore.ordered.eventsNew
    } else if (ownProps.match.path.includes("entry-brewing")) {
        events = state.firestore.data.brewing;
        otherEntry = state.firestore.ordered.brewing;
    } else if (ownProps.match.url.includes("entry-testing")) {
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
    firestoreConnect([
        { collection: 'brewing', orderBy: ['createAt', 'desc'] },
        { collection: 'eventsNew', orderBy: ['createAt', 'desc'] },
        { collection: 'eventsOld', orderBy: ['createAt', 'desc'] },
        { collection: 'testing', orderBy: ['createAt', 'desc'] }
    ])
)(EntryDetails);