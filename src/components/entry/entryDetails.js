import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./EntryDetails.scss";
import EntryPN from "./entryPN";
import moment from "moment";
import "moment/locale/pl";
import Entry from "./Entry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EntryDetails = props => {
  console.log(props);
  const { id, entry, otherEntry, brewing, testing, eventsOld } = props;
  if (entry) {
    return (
      <div id="entry-details">
        <div id="entry-details-top"></div>
        <div className="jumbotron mt-2 mb-3 mb-md-4 mt-lg-0 p-3 p-md-5 bg-light shadow-sm">
          <h1 className="container">{entry.title}</h1>
        </div>
        <div className="jumbotron jumbotron-fluid bg-transparent m-0 py-0">
          <div className="container pb-3">
            <p id="entry-details-content-date" className="mb-2 text-muted">
              <FontAwesomeIcon icon="user" /> {entry.nick}
              <span>
                <FontAwesomeIcon icon="clock" />{" "}
                {moment(entry.createAt.toDate())
                  .locale("pl")
                  .format("LLL")}
              </span>
            </p>

            <p className="mb-3 mb-md-4 pb-3 text-muted border-bottom border-secondary">
              {entry.option.includes("brewing") && (
                <Link to="/brewing" className="text-decoration-none">
                  <small className="list bg-warning py-1 px-2 font-weight-bold text-white">
                    Warzenie
                  </small>
                </Link>
              )}{" "}
              {entry.option.includes("events") && (
                <Link to="/events" className="text-decoration-none">
                  <small className="list bg-success py-1 px-2 font-weight-bold text-white">
                    Wydarzenia
                  </small>
                </Link>
              )}{" "}
              {entry.option.includes("testing") && (
                <Link to="/testing" className="text-decoration-none">
                  {" "}
                  <small className="list bg-info py-1 px-2 font-weight-bold text-white">
                    Degustacje
                  </small>
                </Link>
              )}
            </p>

            <div className="entry-details-image border-bottom pb-2 my-2 pb-md-3 my-md-3">
              <img
                src={entry.photo1}
                alt=""
                className="entry-details-image-content mb-2"
              />
              {entry.checkboxDescription1 && (
                <div className="entry-details-image-content">
                  <p className="font-italic m-0">
                    <small>{entry.description1}</small>
                  </p>
                </div>
              )}
            </div>

            <p
              id="entry-details-text"
              className="mb-3 pb-2 mb-md-4 pb-md-3 border-bottom"
            >
              {entry.text1}
            </p>

            {entry.checkboxPhoto2 && (
              <div className="entry-details-image border-bottom pb-2 my-2 pb-md-3 my-md-3">
                <img
                  src={entry.photo2}
                  alt=""
                  className="entry-details-image-content mb-2"
                />
                {entry.checkboxDescription2 && (
                  <div className="entry-details-image-content">
                    <p className="font-italic m-0">
                      <small>{entry.description2}</small>
                    </p>
                  </div>
                )}
              </div>
            )}

            {entry.checkboxText2 && (
              <p
                id="entry-details-text"
                className="mb-3 pb-2 mb-md-4 pb-md-3 border-bottom"
              >
                {entry.text2}
              </p>
            )}

            {entry.checkboxPhoto3 && (
              <div className="entry-details-image border-bottom pb-2 my-2 pb-md-3 my-md-3">
                <img
                  src={entry.photo3}
                  alt=""
                  className="entry-details-image-content mb-2"
                />
                {entry.checkboxDescription3 && (
                  <div className="entry-details-image-content">
                    <p className="font-italic m-0">
                      <small>{entry.description3}</small>
                    </p>
                  </div>
                )}
              </div>
            )}

            {entry.checkboxText3 && (
              <p
                id="entry-details-text"
                className="mb-3 pb-2 mb-md-4 pb-md-3 border-bottom"
              >
                {entry.text3}
              </p>
            )}
          </div>
        </div>
        <EntryPN otherEntry={otherEntry} id={id} />
        <h1 className="section-title pb-2 mb-0 mx-2  mb-md-4 mx-md-5 pb-md-3 display-4 font-weight-bold text-center border-bottom border-dark">
          Zobacz także
        </h1>
        <div className="row m-auto py-3 py-sm-4 justify-content-center">
          {brewing && !window.location.pathname.includes("brewing") && (
            <div
              className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5"
              key={brewing[0].id}
            >
              <Entry entry={brewing[0]} address="/entry-brewing/" />
            </div>
          )}
          {testing && !window.location.pathname.includes("testing") && (
            <div
              className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5"
              key={testing[0].id}
            >
              <Entry entry={testing[0]} address="/entry-testing/" />
            </div>
          )}
          {eventsOld && !window.location.pathname.includes("events") && (
            <div
              className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5"
              key={eventsOld[0].id}
            >
              <Entry entry={eventsOld[0]} address="/entry-events-old/" />
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="entry-details-error"
        className="jumbotron jumbotron-fluid bg-transparent"
      >
        <div className="container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;

  let brewing = state.firestore.ordered.brewing;
  let testing = state.firestore.ordered.testing;
  let eventsOld = state.firestore.ordered.eventsOld;

  if (ownProps.match.path.includes("entry-events-old")) {
    var events = state.firestore.data.eventsOld;
    var otherEntry = state.firestore.ordered.eventsOld;
  } else if (ownProps.match.path.includes("entry-events-new")) {
    events = state.firestore.data.eventsNew;
    otherEntry = state.firestore.ordered.eventsNew;
  } else if (ownProps.match.path.includes("entry-brewing")) {
    events = state.firestore.data.brewing;
    otherEntry = state.firestore.ordered.brewing;
  } else if (ownProps.match.url.includes("entry-testing")) {
    events = state.firestore.data.testing;
    otherEntry = state.firestore.ordered.testing;
  }

  const entry = events ? events[id] : null;
  return {
    id: id,
    entry: entry,
    otherEntry: otherEntry,
    brewing: brewing,
    testing: testing,
    eventsOld: eventsOld
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "brewing", orderBy: ["createAt", "desc"] },
    { collection: "eventsNew", orderBy: ["createAt", "desc"] },
    { collection: "eventsOld", orderBy: ["createAt", "desc"] },
    { collection: "testing", orderBy: ["createAt", "desc"] }
  ])
)(EntryDetails);
