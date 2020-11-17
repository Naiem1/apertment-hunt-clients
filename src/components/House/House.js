import React from 'react';
import location from '../../siteImages/logos/map-marker-alt-solid 1.png';
import bed from '../../siteImages/logos/bed 1.png';
import bath from '../../siteImages/logos/bath 1.png';
import { useHistory, useLocation } from 'react-router-dom';

const House = (props) => {
    const house = props.house;

    const history = useHistory();


    const setProduct = () => {
        history.push('/dashboard/bookinglist')
    }

    return (
        <div className="col-md-4 mb-5">
            <div class="card-deck">
                <div class="card">
                    <img src={house.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title font-weight-bold pb-3">{house.title}</h4>
                        <p><img src={location} alt="..."/> &nbsp;&nbsp;<strong>{house.location}</strong></p>
                        <div className="row d-flex justify-content-around">
                            <p><img src={bed} alt=".."/> &nbsp;&nbsp;<strong>{house.beds}</strong></p>
                            <p><img src={bath} alt=".."/> &nbsp;&nbsp;<strong>{house.baths}</strong></p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="row d-flex justify-content-between house-details">
                            <h2 className="font-weight-bold">{house.price}</h2>
                            <button onClick={setProduct} className="btn text-white">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default House;