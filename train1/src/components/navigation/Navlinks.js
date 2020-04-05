import React from 'react';
import {Link} from 'react-router-dom';


const Navlinks = props =>{
    let tempTabIndex
    if(props.isMobileLink){
        tempTabIndex = "-1"
    }
    return(
        <ul className="nav-links">
            <li>
                <Link to="/trainDetails" className="link" tabIndex = { tempTabIndex }>Train Details</Link>
            </li>
            <li>
                <Link to="/customerCare" className="link" tabIndex = { tempTabIndex }>Customer Care</Link>
            </li>
            <li>
                <Link to="/trainLocation" className="link" tabIndex = { tempTabIndex }>Train Location</Link>
            </li>
            <button>Logout </button>
            </ul>
    );
};
export default Navlinks;