import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pl';
import './entry.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Entry = ({ entry, address }) => {
    return (
        <Link to={address + entry.id} className="text-decoration-none text-dark">
            <div className="row mb-3 pb-2 pb-md-3 mb-md-3 pb-lg-4 mb-lg-4 border-bottom border-dark">
                <div id="all-style" className="row align-items-center m-0 p-2 p-md-3">
                    <div id="img-style" className="col-md-6 p-0">
                        <img src={entry.photo1} className="card-img-top img-fluid" alt="" />
                    </div>
                    <div id="text-style" className="col-md-6">
                        <div className="card-body p-0">
                            <h4 className="card-title mb-2 mb-md-3 mt-3 mt-md-0">{entry.title}</h4>
                            <h6 className="m-0"><FontAwesomeIcon icon={['far', 'user']} /> {entry.nick}</h6>
                            <p className="mb-1"> <small className="text-dark"><FontAwesomeIcon icon={['far', 'clock']} /> {moment(entry.createAt.toDate()).locale('pl').format('LLL')}</small></p>
                            {entry.option.includes("brewing") &&
                                <small className="short-brewing bg-warning py-1 px-2 font-weight-bold text-white">Warzenie</small>
                            } {entry.option.includes("events") &&
                                <small className="short-brewing bg-success py-1 px-2 font-weight-bold text-white">Wydarzenia</small>
                            } {entry.option.includes("testing") &&
                                <small className="short-brewing bg-info py-1 px-2 font-weight-bold text-white">Degustacje</small>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Entry;



