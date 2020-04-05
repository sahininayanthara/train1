import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';

const MyMobileNavbar = styled.nav`
@media screen and (min-width: 769px){
    display: none;
}
width: 50vw;
background: ${ props => props.theme.primary };

margin-bottom: 15px;
box-shadow: -10px 10px 5px ${ props => props.theme.accent };
align-self: flex-end;

transition: transform 1s;
transform: translateX( ${ props => props.displayMobileNavbar ? ("0%") : ("calc(100% + 15px)") } );

.nav-links{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    height: 60vh;
    list-style: none;
}
.link{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    width: 30vh;
    height: 10vh;

    color: white;
    font-size: 2.5vh;
    text-decoration: none;
    border-radius: 10px;
    

    &:focus{
        background: rgba(0, 0, 0, 0.1);
        outline: none;
    }
    &::after{
    content: '';
    height: 2px;
    width: 0;
    background: white;
    transition: width 0.5s;
}
&:hover::after{
    transform: width;
    width: 90%;
}
}


`
const MobileNavbar = props => {
    return(
        <MyMobileNavbar displayMobileNavbar = { props.displayMobileNavbar}>
        <Navlinks isMobileLink = { true }/>
        </MyMobileNavbar>
    );
};
export default MobileNavbar;