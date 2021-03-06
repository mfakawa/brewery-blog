import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div id="contact">
      <div id="contact-top">
        <div className="tab-head-image-background-cover row m-0 align-items-center">
          <div className="col">
            <h1 className="display-3 m-0 font-weight-bold font-italic text-center text-white">
              Bądźmy w kontakcie
            </h1>
          </div>
        </div>
      </div>
      <div
        id="contact-content"
        className="jumbotron jumbotron-fluid bg-transparent mt-5 mt-md-0 mx-3 py-3 mx-sm-4 p-0 p-sm-4 mx-md-5 p-md-5 border-top border-bottom border-dark"
      >
        <p className="lead mb-4 mb-md-5 text-center">
          Chciałbyś rozpocząć z nami współpracę? Dowiedzieć się więcej na temat
          domowej produkcji piwa lub pochwaliś się swoimi wyrobami? A może
          skontaktować się w zupełnie innej sprawie? Napisz do nas!
        </p>
        <h2 className="mx-auto text-center">
          <a
            className=" text-dark"
            href="https://accounts.google.com"
            rel="noopener noreferrer"
          >
            piecdziesiattwarzykrafta@gmial.com
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
