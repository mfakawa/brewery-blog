import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Entry from '../entry/entry';
import Slider from 'react-slick';
import photo1 from './img/photo1.jpg';
import photo2 from './img/photo2.jpg';
import photo3 from './img/photo3.jpg';
import './testing.scss';


class Testing extends Component {

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

        const { testing } = this.props;
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
                    <div className="head-title">
                        <div className="row mx-auto align-items-center">
                            <h1 className="display-3 font-weight-bold font-italic text-center text-white">Smak, do którego wracasz</h1>
                        </div>
                    </div>
                </div>
                <h1 className="section-title pb-2 mb-0 mx-2 mt-4 mt-md-0 mb-md-4 mx-md-5 pb-md-3 display-4 font-weight-bold text-center text-dark border-bottom border-dark">Piwo</h1>
                {/* <div id="head-shadow" className="jumbotron jumbotron-fluid m-0 p-0">
                    <div className="row justify-content-center m-0">
                        <h1 className="m-3 mt-sm-4 display-4 font-italic font-weight-bold text-center text-dark">Piwo</h1>
                    </div>
                    <div className="row justify-content-center m-0">
                        <p className="lead font-italic text-secondary text-center mb-4">Dobrze znane i mniej znane</p>
                    </div>
                </div> */}
                <div id="testing-bottom" className="jumbotron m-0 p-0 bg-transparent">
                    <div className="row m-auto py-4 py-md-5 justify-content-center">
                        {testing &&
                            testing.map((entry) => {
                                return (
                                    <Entry entry={entry} key={entry.id} address='/entry-testing/' />
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
        testing: state.firestore.ordered.testing,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'testing', orderBy: ['createAt', 'desc'] }
    ])
)(Testing);