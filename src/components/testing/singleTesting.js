import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pl';


const SingleBrewing = ({ entry, address }) => {
    return (
        <div className="col-xl-5 px-3 mx-4 mx-sm-4 mx-md-5">
            <Link to={address + entry.id} className="text-decoration-none text-dark" >
                <div className="row align-items-center pb-4 mb-4 pb-md-5 mb-md-5 border-bottom border-dark">
                    <div className="col-md-6">
                        <img src={entry.image} className="card-img-top img-fluid" alt="single-entry-img" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body p-0">
                            <h4 className="card-title mt-3 mt-md-0">{entry.title}</h4>
                            <h6 className="m-0">Autor: {entry.nick}</h6>
                            <p><small className="text-dark"> Data publikacji: {moment(entry.createAt.toDate()).locale('pl').format('LLL')}</small></p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SingleBrewing;