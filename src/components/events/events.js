import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./events.scss";
import photo1 from "./img/events-photo1.jpg";
import photo2 from "./img/events-photo2.jpg";
import photo3 from "./img/events-photo3.jpg";
import HeaderSlider from "../HeaderSlider/HeaderSlider";
import { EntryList } from "../entry/EntryList";

const Events = props => {
  const { eventsNew, eventsOld } = props;
  return (
    <div id="events">
      <HeaderSlider
        photo1={photo1}
        photo2={photo2}
        photo3={photo3}
        headerTitle="Spotkania, które tworzą relacje"
      />
      <div id="events-content">
        <h1 className="pb-2 mb-0 mt-4 mx-2 mt-md-0 mb-md-4 mx-md-5 pb-md-3 display-4 font-weight-bold text-center text-dark border-bottom border-dark">
          Nadchodzące festiwale i wydarzenie
        </h1>
        <div
          id="events-content-new-entries"
          className="jumbotron m-0  p-0 bg-transparent"
        >
          <EntryList entriesType={eventsNew} entriesPath="entry-events-new" />
        </div>
        <h1 className="pb-2 mb-0 mx-2 mt-4 mx-2 mb-md-4 mt-md-5 mx-md-5 pb-md-3 display-4 font-weight-bold text-center text-dark border-bottom border-dark">
          Relacje z minionych wydarzeń
        </h1>
        <div
          id="events-content-old-entries"
          className="jumbotron m-0 p-0 bg-transparent"
        >
          <EntryList entriesType={eventsOld} entriesPath="entry-events-old" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    eventsNew: state.firestore.ordered.eventsNew,
    eventsOld: state.firestore.ordered.eventsOld
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "eventsNew", orderBy: ["createAt", "desc"] },
    { collection: "eventsOld", orderBy: ["createAt", "desc"] }
  ])
)(Events);
