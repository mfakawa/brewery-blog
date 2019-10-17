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
                    <div className="head-title">
                        <div className="row mx-auto align-items-center">
                            <h1 className="display-3 m-0 font-weight-bold font-italic text-center text-white">Spotkania, które tworzą relacje</h1>
                        </div>
                    </div>
                </div>
                <h1 className="section-title pb-2 mb-0 mt-4 mx-2 mt-md-0 mb-md-4 mx-md-5 pb-md-3 display-4 font-weight-bold text-center text-dark border-bottom border-dark">Nadchodzące festiwale i wydarzenie</h1>
                <div id="events-top" className="jumbotron m-0  p-0 bg-transparent">
                    <div className="row m-auto py-4 py-md-5 justify-content-center">
                        {eventsNew && eventsNew.map((entry) => {
                            return (
                                <div className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5" key={entry.id}>
                                    <Entry entry={entry} address='/entry-events-new/' />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <h1 className="section-title pb-2 mb-0 mx-2 mt-4 mx-2 mb-md-4 mt-md-5 mx-md-5 pb-md-3 display-4 font-weight-bold text-center text-dark border-bottom border-dark">Relacje z minionych wydarzeń</h1>
                <div id="events-bottom" className="jumbotron m-0 p-0 bg-transparent">
                    <div className="row m-auto py-4 py-md-5 justify-content-center">
                        {eventsOld && eventsOld.map((entry) => {
                            return (
                                <div className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5" key={entry.id}>
                                    <Entry entry={entry} address='/entry-events-old/' />
                                </div>
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