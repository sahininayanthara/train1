import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Admin extends Component {
    constructor() {
        super();

        this.state = {
            aemail: '',
            apassword: ''
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
  
                <div className="FormTitle">
                    <div className="sign">Admin Login</div>
                     
                </div>  
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
            <label className="FormField_Label" htmlFor="aemail">E-Mail</label>
                <input type="email" id="aemail" className="FormField_Input" 
                placeholder="Enter your E-Mail" name="aemail" value={this.state.aemail} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField_Label" htmlFor="apassword">Password</label>
                <input type="password" id="apassword" className="FormField_Input" 
                placeholder="Enter your Password" name="apassword" value={this.state.apassword} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  
                  <Link to="/navadmin"><button className="FormField_Button mr-20">Sign In</button>
                  </Link>
              </div>
            </form>
          </div>
          </div>
          </div>
        );
    }
}
export default Admin;