import React from 'react';
import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    
    return (
        <div className='col-4 col-lg-2 col-md-3 sidebar'>
            <div className='mt-5'>
                <ul className="list-unstyled">
                    <li>
                        <NavLink to="/dashboard/bookinglist">
                            <a className='decoration-none' href='#'>
                             <FontAwesomeIcon className='icon' icon={faClipboardList} /> Booking list
                            </a>     
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addhouserent">
                            <a href='#'>
                              <FontAwesomeIcon className='icon' icon={faPlus} /> Add Rent
                            </a>
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/dashboard/myrent">
                            <a href='#'>
                              <FontAwesomeIcon className='icon' icon={faHome} /> My Rent
                            </a>
                        </NavLink>
                    </li>
                </ul>
                
                
                
            </div>
        </div>
    );
};

export default Sidebar;