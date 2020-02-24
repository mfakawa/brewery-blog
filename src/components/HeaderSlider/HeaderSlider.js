import React from "react";
import Slider from "react-slick";
import "./HeaderSlider.scss";

const HeaderSlider = props => {
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
  };
  const { photo1, photo2, photo3, headerTitle } = props;

  return (
    <div className="header-slider jumbotron m-0 p-0">
      <Slider className="slider" {...sliderSettings}>
        <img src={photo1} alt="events-photo1" />
        <img src={photo2} alt="events-photo2" />
        <img src={photo3} alt="events-photo3" />
      </Slider>
      <div className="tab-head-slider-title">
        <div className="row mx-auto align-items-center">
          <div className="col">
            <h1 className="display-3 font-weight-bold font-italic text-center text-white">
              {headerTitle}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
