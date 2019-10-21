import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Entry from '../entry/entry';
import Slider from 'react-slick';
import photo1 from './img/photo1.jpg';
import photo2 from './img/photo2.jpg';
import photo3 from './img/photo3.jpg';
import sztacheta from './img/sztacheta.jpg';
import './brewingBeer.scss';


class BrewingBeer extends Component {

    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    render() {

        const sliderSettings = {
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 1500,
            slideToShow: 1,
            slideToScroll: 1,
            pauseOnHover: false,
            fade: true,
            arrows: false
        }

        const { brewing } = this.props;
        return (
            <div id="brewing-beer">
                <div id="brewing-beer-head" className="jumbotron m-0 p-0">
                    <Slider className="slider" {...sliderSettings} >
                        <img src={photo1} alt="events-photo1" />
                        <img src={photo2} alt="events-photo2" />
                        <img src={photo3} alt="events-photo3" />
                    </Slider>
                    <div className="head-title">
                        <div className="row mx-auto align-items-center">
                            <h1 className="display-3 font-weight-bold font-italic text-center text-white">Praca, która owocuje smakiem</h1>
                        </div>
                    </div>
                </div>
                <div id="brewing-beer-content">
                    <h1 className="pb-2 mb-0 mt-4 mx-2 mt-md-0 mb-md-4 mx-md-5 pb-md-3 display-4 font-weight-bold text-center text-dark border-bottom border-dark">Warzenie ze Sztachetą</h1>
                    <div className="row m-3 m-ms-3 m-lg-5 p-3 border-bottom border-dark align-items-center justify-content-center">
                        <div className="col-lg-7 p-0 pr-lg-3">
                            <p className="text-justify lead">W tym miejscu będę chciał podzielić  się z Wami rzeczami związanymi z warzeniem piwa w domu. Niedługo minie rok od mojej pierwszej warki. Chcę również zawczasu nadmienić, że cały czas uczę się nowych rzeczy, więc nie zawsze wszystko wychodzi zgodnie z założonym planem, aczkolwiek muszę przyznać, że do tej pory większość „wpadek” wyszła na plus. Zaznaczę też, że w chwili  obecnej głównie skupiam się na warzeniu  piwa z ekstraktów, ale z własnym chmieleniem (po prostu warzenie z  zacieraniem pochłania bardzo dużo czasu, którego nie rzadko mi brakuje).
                            W dziale tym chciałbym również poruszyć tematykę związaną ze stylami piwa oraz poruszyć kwestię związane ze sprzętem.</p>
                        </div>
                        <div className="col-lg-4 p-0 pl-lg-3">
                            <img src={sztacheta} alt="Sztacheta" />
                        </div>
                    </div>
                    <div id="brewing-beer-content-entries" className="jumbotron m-0 p-0 bg-transparent">
                        <div className="row m-auto py-4 py-md-5 justify-content-center">
                            {brewing &&
                                brewing.map((entry) => {
                                    return (
                                        <div className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5" key={entry.id}>
                                            <Entry entry={entry} address='/entry-brewing/' />
                                        </div>
                                    )
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
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'brewing', orderBy: ['createAt', 'desc'] }
    ])
)(BrewingBeer);