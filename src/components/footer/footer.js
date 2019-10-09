import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="jumbotron jumbotron-fluid p-4 text-white bg-dark my-0">
            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-8">
                        <p className="lead small m-0">Wszelkie prawa zastrzeżone &copy; 2019</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="lead small m-0"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;