import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import photo1 from "./img/photo1.jpg";
import photo2 from "./img/photo2.jpg";
import photo3 from "./img/photo3.jpg";
import "./testing.scss";
import HeaderSlider from "../HeaderSlider/HeaderSlider";
import { EntryList } from "../entry/EntryList";

const Testing = props => {
  const { testing } = props;
  return (
    <div id="testing">
      <HeaderSlider
        photo1={photo1}
        photo2={photo2}
        photo3={photo3}
        headerTitle="Smak, do którego wracasz"
      />
      <div id="testing-content">
        <h1 className="pb-2 mb-0 mx-2 mt-4 mt-md-0 mb-md-4 mx-md-5 pb-md-3 display-4 font-weight-bold text-center text-dark border-bottom border-dark">
          Piwo
        </h1>
        <div
          id="testing-content-entries"
          className="jumbotron m-0 p-0 bg-transparent"
        >
          <EntryList entriesType={testing} entriesPath="entry-testing" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    testing: state.firestore.ordered.testing
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "testing", orderBy: ["createAt", "desc"] }])
)(Testing);
