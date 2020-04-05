import React, { Component } from 'react';
import { Router, Link, NavLink } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            nuemail: '',
            nupassword: '',
            nuname: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
            <div className="App">
            <div className="App_Aside"></div>
            <div className="App_Form">
              <div className="PageSwitcher">
                  <NavLink to="/sign-in" activeClassName="PageSwitcher_Item_Active" className="PageSwitcher_Item">Sign In</NavLink>
                  <NavLink to="/sign-up"  activeClassName="PageSwitcher_Item_Active" className="PageSwitcher_Item">Sign Up</NavLink>
                </div>
  
                <div className="FormTitle">
                    <NavLink to="/sign-in" activeClassName="FormTitle_Link_Active" className="FormTitle_Link">User Sign In</NavLink>
                     or <NavLink to="/sign-up" activeClassName="FormTitle_Link_Active" className="FormTitle_Link">User Sign Up</NavLink>
                </div>   
            
          
            <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField_Label" htmlFor="nuname">Full Name</label>
                <input type="text" id="nuname" className="FormField_Input" 
                placeholder="Enter your full name" name="nuname" value={this.state.nuname} 
                onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField_Label" htmlFor="nupassword">Password</label>
                <input type="password" id="nupassword" className="FormField_Input" 
                placeholder="Enter your password" name="nupassword" value={this.state.nupassword} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField_Label" htmlFor="nuemail">E-Mail Address</label>
                <input type="email" id="nuemail" className="FormField_Input" 
                placeholder="Enter your email" name="nuemail" value={this.state.nuemail} onChange={this.handleChange} />
              </div>

              <div className="FormField">
              <Link to="/sign-in"><button className="FormField_Button mr-20">Sign Up</button>
                  </Link>
                   
                  <Link to="/sign-in" className="FormField_Link">I'm already member</Link>
              </div>
            </form>
          </div>
          </div>
          </div>
        );
    }
}
export default SignUpForm;