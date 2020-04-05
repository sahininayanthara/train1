import React, { Component } from 'react';
import DesktopNavbar1 from './DesktopNavbar1';
import MobileNavbar1 from './MobileNavbar1';
import styled from 'styled-components';

const MyNavbar = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;

    overflow-x: hidden;
`
class Navbar1 extends Component{
    state = {
        displayMobileNavbar: true
    }

    componentDidMount = () =>{
        window.addEventListener('resize', this.checkAndAutoHideMobileNavbar)
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.checkAndAutoHideMobileNavbar)
    }
    toggleMobileNavbar = () => {
        this.setState ( prevState => {
            return{
                displayMobileNavbar: !prevState.displayMobileNavbar
            }
        })
    }

    checkAndAutoHideMobileNavbar = () =>{
        const screenWidth = window.innerWidth
        if(this.state.displayMobileNavbar && screenWidth > 768){
            this.setState(
                {
                    displayMobileNavbar: false
                }
            )
        }
    }
    render() {
        return (
            <MyNavbar>
                <DesktopNavbar1
                    displayMobileNavbar = { this.state.displayMobileNavbar }
                    toggleMobileNavbar = { this.toggleMobileNavbar} />
                <MobileNavbar1 displayMobileNavbar = { this.state.displayMobileNavbar } />
            </MyNavbar>
    )
    }
}
export default Navbar1;