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
            <div id="newest-entries">
                <div id="head-shadow" className="jumbotron jumbotron-fluid m-0 p-0">
                    <div className="row justify-content-center m-0">
                        <h1 className="m-4 my-sm-5 display-4 font-italic font-weight-bold text-center text-dark">Co się w kuflu pieni</h1>
                    </div>
                </div>
                <div className="jumbotron p-0 m-0 bg-transparent">
                    <div className="row m-auto py-4 py-md-5 justify-content-center">
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