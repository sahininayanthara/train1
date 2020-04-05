import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';
import MobileNavIcon from '../../images/mobile-nav-icon.png';
import logo from '../../images/logo.jpg';


const MyDesktopNavbar = styled.nav`
display: flex;
flex-flow: row-nowrap;
justify-content: space-evenly;
align-items:center;

background: ${ props => props.theme.primary };
color: white;

height: 15vh;
box-shadow: 0 10px 5px ${ props => props.theme.accent };

.logo img{
    width:90px;
    height:70px;
}
.nav-links{
    display: flex;
    flex-flow: row-nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 85vw;
    list-style: none;

    @media screen and (max-width: 768px){
    display: none;
}
}

.link{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    height: 15vh;

    color: white;
    padding: 0 1rem;
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
    display: block;
    transition: width 0.5s;
}

&:hover::after{
    transform: width;
    width: 125%;
}
}

`

const MyMobileNavButton = styled.button`
background: transparent;
height: 6vh;
width: 6vh;
border: none;
display: none;

transition: transform 1s ease-in-out;
transform: rotate(${ props => props.displayMobileNavbar ? ("540deg") : ("0deg") });

&:focus {
    outline: none;
}



img{
    height:4vh;
    width: 4vh;
}

@media screen and (max-width: 768px){
    display: block;
}
    

`
const DesktopNavbar = props =>{
    return(
        <MyDesktopNavbar>
            <div className="logo">
                    <a href="#"><img src={logo} className="logo" alt=""/></a>
            </div>
                <Navlinks />
            
                 <MyMobileNavButton
                    displayMobileNavbar = { props.displayMobileNavbar }
                    onClick = { props.toggleMobileNavbar }>
                     
                    <img src={MobileNavIcon} alt="mobile"/>
                </MyMobileNavButton>
        </MyDesktopNavbar>
        
    );}
    export default DesktopNavbar;