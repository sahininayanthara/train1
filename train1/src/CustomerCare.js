import React, { Component } from 'react';
import { Router, Link, NavLink } from 'react-router-dom';

class CustomerCare extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            address: '',
            email: '',
            complaint: ''
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
                    <div className="sign">Customer Care</div>      
            </div>  
            
          
            <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField_Label" htmlFor="name">Name</label>
                <input type="text" id="name" className="FormField_Input" placeholder="Enter your name"
                 name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField_Label" htmlFor="address">Address</label>
                <input type="text" id="address" className="FormField_Input" placeholder="Enter your 
                address" name="address" value={this.state.address} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField_Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField_Input" placeholder="Enter your email"
                 name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField_Label" htmlFor="complaint">Complaint</label>
                <input type="text" id="complaint" className="FormField_Input" placeholder="Enter your 
                complaint"
                 name="complaint" value={this.state.complaint} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <Link to="/save"><button className="FormField_Button mr-20">Save</button>
                  </Link>
              </div>
            </form>
          </div>
          </div>
          </div>
        );
    }
}
export default CustomerCare;