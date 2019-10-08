import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import './homepage.scss';
import YouTube from 'react-youtube';




class EventsShort extends Component {

    render() {
        const { eventsOld } = this.props;
        const opts = {
            height: 'auto',
            width: 'auto',
        }

        let sliderSettings = {
            autoplay: true,
            infinite: true,
            speed: 1500,
            slideToShow: 1,
            slideToScroll: 1,
            pauseOnHover: false,
            arrows: false
        };

        return (
            < div id="events-short" >
                <div id="head-shadow" className="jumbotron jumbotron-fluid m-0 p-0">
                    <div className="row justify-content-center m-0">
                        <h1 className="m-4 my-sm-5 display-4 font-italic font-weight-bold text-center text-dark">Festiwale, wydarzenia, spotkania</h1>
                    </div>
                </div>
                <div id="events-short-slider" className="row m-0 py-4 py-lg-5 justify-content-center">
                    <div className="col-12 col-xl-10 m-0 p-0">
                        <Slider {...sliderSettings}>
                            {eventsOld && eventsOld.map((entry, index) => {
                                for (index; index < 3; index++) {
                                    return (
                                        <div key={entry.id}>
                                            <Link to={'/entry-events-old/' + entry.id} className="text-decoration-none text-dark">
                                                <div >
                                                    <div className="row m-0 p-0">
                                                        <div className=" col p-0 m-0">
                                                            <img src={entry.image} alt="opis" key={entry.id} />
                                                            <h2 className=" p-2 px-3">{entry.title}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            })}
                        </Slider>
                    </div>

                </div>
                <div id="events-short-youtube" className="row m-0 pb-4 p-2 p-lg-5 text-center justify-content-center">
                    <div className="col-lg-2 pt-3 py-lg-5  text-lg-right">
                        <h2 className="mb-2 pb-3 border-bottom border-white">Sztacheta warzy</h2>
                        <p className="lead">Cześć! Chcesz poznać tajniki warzenia piwa? Jak najlepiej dobrać składniki oraz prześledzić relacje z degustacji najciekaszych piw? To dobrze trafiłeś! Zapraszam Cię na mój vlog</p>
                    </div>
                    <div id="youtube-size" className="col-lg-6 py-lg-5 pb-3 text-lg-start">
                        <YouTube
                            videoId='w8q_bi7ldiY'
                            opts={opts}
                        />
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        eventsOld: state.firestore.ordered.eventsOld
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'eventsOld', orderBy: ['createAt', 'desc'] },
    ])
)(EventsShort);