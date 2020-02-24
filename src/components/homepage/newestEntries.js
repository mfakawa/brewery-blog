import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./newestEntries.scss";
import Entry from "../entry/Entry";

const NewestEntries = props => {
  const { brewing, testing } = props;
  return (
    <div id="newest-entries">
      <div
        id="newest-entries-top"
        className="jumbotron jumbotron-fluid bg-white m-0 p-0"
      >
        <div className="tab-head-image-background-cover row m-0 align-items-center">
          <div className="col">
            <h1
              id="newest-entries-top-title"
              className="display-2 m-0 font-weight-bold font-italic text-white text-center"
            >
              Pięćdziesiąt twarzy krafta
            </h1>
          </div>
        </div>
      </div>
      <div id="newest-entries-content">
        <h1 className="pb-2 pb-md-3 mb-0 mb-md-4 mt-3 mt-sm-4 mt-md-0 mx-2 mx-md-5 display-4 font-weight-bold text-center text-dark border-bottom border-dark">
          Nowości
        </h1>
        <div className="jumbotron p-0 m-0 bg-transparent">
          <div className="row m-auto py-3 py-sm-4 justify-content-center">
            {brewing &&
              brewing.slice(0, 2).map(entry => {
                return (
                  <div
                    className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5"
                    key={entry.id}
                  >
                    <Entry entry={entry} address="/entry-brewing/" />
                  </div>
                );
              })}
            {testing &&
              testing.slice(0, 2).map(entry => {
                return (
                  <div
                    className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5"
                    key={entry.id}
                  >
                    <Entry entry={entry} address="/entry-testing/" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    brewing: state.firestore.ordered.brewing,
    testing: state.firestore.ordered.testing
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "brewing", orderBy: ["createAt", "desc"] },
    { collection: "testing", orderBy: ["createAt", "desc"] }
  ])
)(NewestEntries);
