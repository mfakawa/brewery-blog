import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import './homepage.scss';
import Entry from '../entry/entry';


class NewestEntries extends Component {

    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    render() {
        const { brewing, testing } = this.props;
        return (
            <>
                <div id="homepage-top" className="jumbotron jumbotron-fluid bg-white m-0 p-0">
                    <div id="homepage-top-cover">
                        <div className="row h-100 m-0">
                            <div className="col my-auto">
                                <h1 className="display-2 font-weight-bold font-italic text-white text-center">Pięćdziesiąt twarzy krafta</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="newest-entries">
                    <h1 className="section-title pb-2 mb-0 mt-4 mx-2 mt-md-0 mb-md-4 mx-md-5 pb-md-3 display-4 font-weight-bold text-center text-dark border-bottom border-dark">Nowości</h1>
                    <div className="jumbotron p-0 m-0 bg-transparent">
                        <div className="row m-auto py-3 py-sm-4 justify-content-center">
                            {brewing && brewing.map((entry, index) => {
                                for (index; index < 2; index++) {
                                    return (
                                        <Entry entry={entry} key={entry.id} address='/entry-brewing/' />
                                    )
                                }
                            })}
                            {testing && testing.map((entry, index) => {
                                for (index; index < 2; index++) {
                                    return (
                                        <Entry entry={entry} key={entry.id} address='/entry-testing/' />
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        brewing: state.firestore.ordered.brewing,
        testing: state.firestore.ordered.testing,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'brewing', orderBy: ['createAt', 'desc'] },
        { collection: 'testing', orderBy: ['createAt', 'desc'] }
    ])
)(NewestEntries);