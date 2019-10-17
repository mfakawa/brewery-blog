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
                                    <div className="row m-0 justify-content-center" key={index}>
                                        <div className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5">
                                            <div className="row justify-content-center m-0">
                                                <div className="col p-0">
                                                    <h2 className="pn-title pb-2 px-2 mb-0 mx-sm-3 mx-lg-0 mt-sm-2 pb-md-3 display-4 font-weight-bold text-left text-dark border-bottom border-dark">poprzedni artykół</h2>
                                                </div>
                                            </div>
                                            <div className="row m-auto py-3 py-md-4 justify-content-center">
                                                <Entry entry={previous} address="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5">
                                            <div className="row justify-content-center m-0">
                                                <div className="col p-0">
                                                    <h2 className="pn-title pb-2 px-2 mb-0 mx-sm-3 mx-lg-0 mt-sm-2 pb-md-3 display-4 font-weight-bold text-left text-dark border-bottom border-dark">następny artykół</h2>
                                                </div>
                                            </div>
                                            <div className="row m-auto py-3 py-md-4 justify-content-center">
                                                <Entry entry={next} address="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else if (index === 0) {
                                return (
                                    <div key={index}>
                                        <div className="row justify-content-center m-0">
                                            <div className="col-xl-5">
                                                <h2 className="pn-title pb-2 px-2 mb-0 mx-sm-3 mx-lg-0 mt-sm-2 pb-md-3 display-4 font-weight-bold text-left text-dark border-bottom border-dark">następny artykół</h2>
                                            </div>
                                        </div>
                                        <div className="row m-auto py-3 py-md-4 justify-content-center">
                                            <div className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5">
                                                <Entry entry={next} address="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else if (index + 1 === array.length) {
                                return (
                                    <div key={index}>
                                        <div className="row justify-content-center m-0">
                                            <div className="col-xl-5">
                                                <h2 className="pn-title pb-2 px-2 mb-0 mx-sm-3 mx-lg-0 mt-sm-2 pb-md-3 display-4 font-weight-bold text-left text-dark border-bottom border-dark">poprzedni artykół</h2>
                                            </div>
                                        </div>
                                        <div className="row m-auto py-3 py-md-4 justify-content-center">
                                            <div className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5">
                                                <Entry entry={previous} address="" />
                                            </div>
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