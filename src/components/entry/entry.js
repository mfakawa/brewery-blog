import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pl';
import './entry.scss';


const Entry = ({ entry, address }) => {
    return (
        <div className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5">
            <Link to={address + entry.id} className="text-decoration-none text-dark">
                <div className="row mb-3 pb-2 pb-md-3 mb-md-3 pb-lg-4 mb-lg-4 border-bottom border-dark">
                    <div id="all-style" className="row align-items-center m-0 p-2 p-md-3">
                        <div id="img-style" className="col-md-6 p-0">
                            <img src={entry.photo1} className="card-img-top img-fluid" alt="" />
                        </div>
                        <div id="text-style" className="col-md-6">
                            <div className="card-body p-0">
                                <h4 className="card-title mb-2 mb-md-3 mt-3 mt-md-0">{entry.title}</h4>
                                <h6 className="m-0">Autor: {entry.nick}</h6>
                                <p className="m-0"><small className="text-dark"> Data publikacji: {moment(entry.createAt.toDate()).locale('pl').format('LLL')}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Entry;



