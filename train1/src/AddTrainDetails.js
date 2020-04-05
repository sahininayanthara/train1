import React, { Component } from 'react';
import { Router, Link, NavLink } from 'react-router-dom';

class AddTrainDetails extends Component {
    constructor() {
        super();

        this.state = {
            trname: '',
            trfrom: '',
            trto: '',
            trdate: '',
            trdep: '',
            trarri: '',

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
            <div className="add_details">
              
            <div className="FormTitle">
                    <div className="sign">Add Train Details</div>      
            </div>  
            
          
            <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField_Label" htmlFor="trname">Train Name</label>
                <input type="text" id="trname" className="FormField_Input" 
                 name="trname" value={this.state.trname} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField_Label" htmlFor="trfrom">From</label>
                <input type="text" id="trfrom" className="FormField_Input" 
                 name="trfrom" value={this.state.trfrom} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField_Label" htmlFor="trto">To</label>
                <input type="text" id="trto" className="FormField_Input" 
                 name="trto" value={this.state.trto} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField_Label" htmlFor="trdate">Date of journey</label>
                <input type="text" id="trdate" className="FormField_Input" 
                 name="trdate" value={this.state.trdate} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField_Label" htmlFor="trdep">Departure</label>
                <input type="text" id="trdep" className="FormField_Input" 
                 name="trdep" value={this.state.trdep} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField_Label" htmlFor="trarri">Arrival</label>
                <input type="text" id="trarri" className="FormField_Input" 
                 name="trarri" value={this.state.trarri} onChange={this.handleChange} />
              </div>




              <div className="FormField">
                  <Link to="/save"><button className="FormField_Button mr-20">Save</button>
                  </Link>
              </div>
            </form>
          </div>
          </div>
          
        );
    }
}
export default AddTrainDetails;