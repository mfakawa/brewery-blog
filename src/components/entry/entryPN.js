import React, { Component } from 'react';
import 'moment/locale/pl';
import Entry from './entry';


class EntryPN extends Component {

    render() {
        const { otherEntry, id } = this.props;
        return (
            <div className="jumbotron p-0 m-0 bg-transparent">
                {otherEntry && otherEntry.map((other, index, array) => {
                    if (array.length > 1) {

                        if (id === other.id) {

                            let previous = array[index - 1];
                            let next = array[index + 1];

                            if (index !== 0 && index + 1 < array.length) {
                                return (
                                    <div key={index}>
                                        <h1 className="section-title pb-2 mb-0 mx-2 mt-4 mx-2 mb-md-4 mt-md-5 mx-md-5 pb-md-3 display-4 font-weight-bold text-center text-dark border-bottom border-dark">Zobacz także</h1>
                                        <div className="row m-auto py-4 py-md-5 justify-content-center">
                                            <Entry entry={previous} address="" />
                                            <Entry entry={next} address="" />
                                        </div>
                                    </div>
                                )
                            } else if (index === 0) {
                                return (
                                    <div key={index}>
                                        <h1 className="section-title pb-2 mb-0 mx-2 mt-4 mx-2 mb-md-4 mt-md-5 mx-md-5 pb-md-3 display-4 font-weight-bold text-center text-dark border-bottom border-dark">Zobacz także</h1>
                                        <div className="row m-auto py-4 py-md-5 justify-content-center">
                                            <Entry entry={next} address="" />
                                        </div>
                                    </div>
                                )
                            } else if (index + 1 === array.length) {
                                return (
                                    <div key={index}>
                                        <h1 className="section-title pb-2 mb-0 mx-2 mt-4 mx-2 mb-md-4 mt-md-5 mx-md-5 pb-md-3 display-4 font-weight-bold text-center text-dark border-bottom border-dark">Zobacz także</h1>
                                        <div className="row m-auto py-4 py-md-5 justify-content-center">
                                            <Entry entry={previous} address="" />
                                        </div>
                                    </div>
                                )
                            }
                        }
                    }
                    else {
                        return (null)
                    }
                })}
            </div>
        )
    }
}

export default EntryPN;