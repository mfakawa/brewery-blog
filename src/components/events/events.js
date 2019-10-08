import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Entry from '../entry/entry';
import Slider from 'react-slick';
import './events.scss';
import photo1 from './img/events-photo1.jpg';
import photo2 from './img/events-photo2.jpg';
import photo3 from './img/events-photo3.jpg';


class Events extends Component {

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



        const { eventsNew, eventsOld } = this.props;
        return (
            <div>
                <div className="test jumbotron m-0 p-0">
                    <div className="slider">
                        <Slider className="slider-1" {...sliderSettings} >
                            <img src={photo1} alt="events-photo1" />
                            <img src={photo2} alt="events-photo2" />
                            <img src={photo3} alt="events-photo3" />
                        </Slider>
                    </div>
                    <div className="title">
                        <div className="row mx-auto align-items-center">
                            <h1 className="display-3 m-0 font-weight-bold font-italic text-center text-white">Spotkania, które tworzą relacje</h1>
                        </div>
                    </div>
                </div>
                <div id="head-shadow" className="jumbotron jumbotron-fluid m-0 p-0">
                    <div className="row justify-content-center m-0">
                        <h1 className="m-3 mt-sm-4 display-4 font-italic font-weight-bold text-center text-dark">Nadchodzące festiwale i wydarzenie</h1>
                    </div>
                    <div className="row justify-content-center m-0">
                        <p className="lead font-italic text-secondary text-center mb-4">Najważniejsze imprezy piwne z całej Polski</p>
                    </div>
                </div>
                <div id="events-top" className="jumbotron m-0  p-0 bg-transparent">
                    <div className="row m-auto py-4 py-md-5 justify-content-center">
                        {eventsNew && eventsNew.map((entry) => {
                            return (
                                <Entry entry={entry} key={entry.id} address='/entry-events-new/' />
                            )
                        })}
                    </div>
                </div>
                <div id="head-shadow" className="jumbotron jumbotron-fluid m-0 p-0">
                    <div className="row justify-content-center m-0">
                        <h1 className="m-3 mt-sm-4 display-4 font-italic font-weight-bold text-center text-dark">Działo się...</h1>
                    </div>
                    <div className="row justify-content-center m-0">
                        <p className="lead font-italic text-secondary text-center mb-4">Recenzje minionych festiwali i wydarzeń</p>
                    </div>
                </div>
                <div id="events-bottom" className="jumbotron m-0 p-0 bg-transparent">
                    <div className="row m-auto py-4 py-md-5 justify-content-center">
                        {eventsOld && eventsOld.map((entry) => {
                            return (
                                <Entry entry={entry} key={entry.id} address='/entry-events-old/' />
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
        eventsNew: state.firestore.ordered.eventsNew,
        eventsOld: state.firestore.ordered.eventsOld,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'eventsNew', orderBy: ['createAt', 'desc'] },
        { collection: 'eventsOld', orderBy: ['createAt', 'desc'] }
    ])
)(Events);