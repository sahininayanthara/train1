import React from 'react';
import './App.css';
import { Link, Router, Route } from 'react-router-dom';

function Button() {
  return (
    <div className="button-links">
    <ul className="button-link">
      <Link to="/admin">
        <li className="but">ADMIN/ OFFICER LOGIN</li>
      </Link>
      <Link to="/sign-up">
        <li className="but">USER LOGIN/ REGISTRATION</li>
      </Link>
    </ul>
    </div>
  );
}

export default Button;