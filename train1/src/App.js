import React, { Component } from 'react';
import './App.css';
import Admin from './Admin';
import Button from './Button';
import pic from "./pic.jpg";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Navbar from './components/navigation/Navbar';
import Navbar1 from './components/navigation/Navbar1';
import CustomerCare from './CustomerCare';
import AddTrainDetails from './AddTrainDetails';



class App extends Component {
  render() {
  return (
    
    <Router>
<Route path="/" exact component={Home}></Route>
<Route path="/sign-up" component={SignUpForm}></Route>
<Route path="/sign-in" component={SignInForm}></Route>
<Route path="/admin" component={Admin}></Route>
<Route path="/nav" component={Navbar}></Route>
<Route path="/navadmin" component={Navbar1}></Route>
<Route path="/customerCare" component={CustomerCare}></Route>
<Route path="/addTrainDetails" component={AddTrainDetails}></Route>
   </Router>
    
  );
}
}


const Home = () =>(
  <div>
    <img src={pic} alt="mypic" />
    <Button/>
  </div>
);


export default App;
