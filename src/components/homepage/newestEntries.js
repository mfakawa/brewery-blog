import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import './newestEntries.scss';
import Entry from '../entry/entry';


class NewestEntries extends Component {

    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    render() {
        const { brewing, testing } = this.props;
        return (
            <div id="newest-entries">
                <div id="newest-entries-background" className="jumbotron jumbotron-fluid bg-white m-0 p-0">
                    <div id="newest-entries-background-cover">
                        <div className="row h-100 m-0">
                            <div className="col my-auto">
                                <h1 className="display-2 font-weight-bold font-italic text-white text-center">Pięćdziesiąt twarzy krafta</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="newest-entries-content">
                    <h1 className="pb-2 mb-0 mt-4 mx-2 mt-md-0 mb-md-4 mx-md-5 pb-md-3 display-4 font-weight-bold text-center text-dark border-bottom border-dark">Nowości</h1>
                    <div className="jumbotron p-0 m-0 bg-transparent">
                        <div className="row m-auto py-3 py-sm-4 justify-content-center">
                            {brewing && brewing.map((entry, index) => {
                                for (index; index < 2; index++) {
                                    return (
                                        <div className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5" key={entry.id}>
                                            <Entry entry={entry} address='/entry-brewing/' />
                                        </div>
                                    )
                                }
                            })}
                            {testing && testing.map((entry, index) => {
                                for (index; index < 2; index++) {
                                    return (
                                        <div className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5" key={entry.id}>
                                            <Entry entry={entry} address='/entry-testing/' />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
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