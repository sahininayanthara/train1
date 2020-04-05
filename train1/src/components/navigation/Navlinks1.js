import React from 'react';
import {Link} from 'react-router-dom';


const Navlinks1 = props =>{
    let tempTabIndex
    if(props.isMobileLink){
        tempTabIndex = "-1"
    }
    return(
        <ul className="nav-links">
            <li>
                <Link to="/addTrainDetails" className="link" tabIndex = { tempTabIndex }>Add Train Details</Link>
            </li>
            <li>
                <Link to="/trainDetails" className="link" tabIndex = { tempTabIndex }>View Train Details</Link>
            </li>
            <li>
                <Link to="/viewUsers" className="link" tabIndex = { tempTabIndex }>View Users</Link>
            </li>
            <li>
                <Link to="/View Complaints" className="link" tabIndex = { tempTabIndex }>View Complaints</Link>
            </li>
            <li>
                <Link to="/trainLocation" className="link" tabIndex = { tempTabIndex }>Train Location</Link>
            </li>
            <button>Logout </button>
            </ul>
    );
};
export default Navlinks1;