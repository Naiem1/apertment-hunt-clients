import React, { useEffect, useState } from 'react';
import House from '../House/House';


const AllHouses = () => {
    const [houses,setHouses]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allRentalHouses')
        .then(res=>res.json())
        .then(data=>setHouses(data))
    },[])
    return (
        <div className="allHouses">
            <h4 className="colorMain text-center pt-5">House Rent</h4>
            <h1 className="colorMain text-center font-weight-bold pt-3 pb-5">Discover the latest Rent <br/>available today</h1>
            <div className="house-info">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                            {
                                houses.map(house=><House house={house} key={house.id}></House>)
                            }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllHouses;