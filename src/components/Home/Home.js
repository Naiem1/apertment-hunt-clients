import React from 'react';
import AllHouses from '../AllHouses/AllHouses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <section className="banner img-fluid">
                <div className="container search-field">
                    <h1 className="text-white text-center text-uppercase">Find your house rent</h1>
                    <div className="search-box d-flex justify-content-between">
                        <input className="search-box-text" type="text" placeholder="Search..."/>
                        <input className="btn-main text-white" type="submit" value="Find now"/>
                    </div>
                </div>
            </section>
            <AllHouses></AllHouses>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;