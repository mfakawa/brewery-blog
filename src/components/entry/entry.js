import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pl';


const Entry = ({ entry, address }) => {
    return (
        <div className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5">
            <Link to={address + entry.id} className="text-decoration-none text-dark">
                <div className="row pb-3 mb-3 pb-md-5 mb-md-5 border-bottom border-dark">
                    <div id="all-style" className="row align-items-center m-0 p-3">
                        <div id="img-style" className="col-md-6 p-0">
                            <img src={entry.photo1} className="card-img-top img-fluid" alt="" />
                        </div>
                        <div id="text-style" className="col-md-6">
                            <div className="card-body p-0">
                                <h4 className="card-title mt-3 mt-md-0">{entry.title}</h4>
                                <h6 className="m-0">Autor: {entry.nick}</h6>
                                <p><small className="text-dark"> Data publikacji: {moment(entry.createAt.toDate()).locale('pl').format('LLL')}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Entry;



