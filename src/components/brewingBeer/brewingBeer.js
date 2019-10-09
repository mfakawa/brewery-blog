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
            <div>
                <div className="test jumbotron m-0 p-0">
                    <div>
                        <Slider className="slider" {...sliderSettings} >
                            <img src={photo1} alt="events-photo1" />
                            <img src={photo2} alt="events-photo2" />
                            <img src={photo3} alt="events-photo3" />
                        </Slider>
                    </div>
                    <div className="title">
                        <div className="row mx-auto align-items-center">
                            <h1 className="display-3 font-weight-bold font-italic text-center text-white">Praca, która owocuje smakiem</h1>
                        </div>
                    </div>
                </div>


                <div id="head-shadow" className="jumbotron jumbotron-fluid m-0 p-0">
                    <div className="row justify-content-center m-0">
                        <h1 className="m-3 mt-sm-4 display-4 font-italic font-weight-bold text-center text-dark">Warzenie ze Sztachetą</h1>
                    </div>
                    <div className="row justify-content-center m-0">
                        <p className="lead font-italic text-secondary text-center mb-4">Jak zacząć warzyć piwo w domowych warunkach</p>
                    </div>
                </div>
                <div className="row m-3 m-ms-3 m-lg-5 p-3 border-bottom border-dark align-items-center justify-content-center">
                    <div className="col-lg-7 p-0 pr-lg-3">
                        <p id="brewing-beer-content" className="text-justify lead">W tym miejscu będę chciał podzielić  się z Wami rzeczami związanymi z warzeniem piwa w domu. Niedługo minie rok od mojej pierwszej warki. Chcę również zawczasu nadmienić, że cały czas uczę się nowych rzeczy, więc nie zawsze wszystko wychodzi zgodnie z założonym planem, aczkolwiek muszę przyznać, że do tej pory większość „wpadek” wyszła na plus. Zaznaczę też, że w chwili  obecnej głównie skupiam się na warzeniu  piwa z ekstraktów, ale z własnym chmieleniem (po prostu warzenie z  zacieraniem pochłania bardzo dużo czasu, którego nie rzadko mi brakuje).
                        W dziale tym chciałbym również poruszyć tematykę związaną ze stylami piwa oraz poruszyć kwestię związane ze sprzętem.
                        </p>
                    </div>
                    <div className="col-lg-4 p-0 pl-lg-3">
                        <img src={sztacheta} alt="Sztacheta" />
                    </div>
                </div>

                <div id="brewing-bottom" className="jumbotron m-0 p-0 bg-transparent">
                    <div className="row m-auto py-4 py-md-5 justify-content-center">
                        {brewing &&
                            brewing.map((entry) => {
                                return (
                                    <Entry entry={entry} key={entry.id} address='/entry-brewing/' />
                                )
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
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'brewing', orderBy: ['createAt', 'desc'] }
    ])
)(BrewingBeer);