import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import photo1 from "./img/photo1.jpg";
import photo2 from "./img/photo2.jpg";
import photo3 from "./img/photo3.jpg";
import sztacheta from "./img/sztacheta.jpg";
import "./brewingBeer.scss";
import HeaderSlider from "../HeaderSlider/HeaderSlider";
import { EntryList } from "../entry/EntryList";

const BrewingBeer = props => {
  const { brewing } = props;
  return (
    <div id="brewing-beer">
      <HeaderSlider
        photo1={photo1}
        photo2={photo2}
        photo3={photo3}
        headerTitle="Praca, która owocuje smakiem"
      />
      <div id="brewing-beer-content">
        <h1 className="pb-2 mb-0 mt-4 mx-2 mt-md-0 mb-md-4 mx-md-5 pb-md-3 display-4 font-weight-bold text-center text-dark border-bottom border-dark">
          Warzenie ze Sztachetą
        </h1>
        <div className="row m-3 m-ms-3 m-lg-5 p-3 border-bottom border-dark align-items-center justify-content-center">
          <div className="col-lg-7 p-0 pr-lg-3">
            <p className="text-justify lead">
              W tym miejscu będę chciał podzielić się z Wami rzeczami związanymi
              z warzeniem piwa w domu. Niedługo minie rok od mojej pierwszej
              warki. Chcę również zawczasu nadmienić, że cały czas uczę się
              nowych rzeczy, więc nie zawsze wszystko wychodzi zgodnie z
              założonym planem, aczkolwiek muszę przyznać, że do tej pory
              większość „wpadek” wyszła na plus. Zaznaczę też, że w chwili
              obecnej głównie skupiam się na warzeniu piwa z ekstraktów, ale z
              własnym chmieleniem (po prostu warzenie z zacieraniem pochłania
              bardzo dużo czasu, którego nie rzadko mi brakuje). W dziale tym
              chciałbym również poruszyć tematykę związaną ze stylami piwa oraz
              poruszyć kwestię związane ze sprzętem.
            </p>
          </div>
          <div className="col-lg-4 p-0 pl-lg-3">
            <img src={sztacheta} alt="Sztacheta" />
          </div>
        </div>
        <div
          id="brewing-beer-content-entries"
          className="jumbotron m-0 p-0 bg-transparent"
        >
          <EntryList entriesType={brewing} entriesPath="entry-brewing" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    brewing: state.firestore.ordered.brewing
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "brewing", orderBy: ["createAt", "desc"] }])
)(BrewingBeer);
