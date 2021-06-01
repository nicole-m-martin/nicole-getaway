import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HomePage extends Component {
  render() {
    return (
      <>
        <h1>Welcome to Alchemy Getaways!</h1>
        <div className="btn-box">
          <h2>
            <Link to="/signup" className="links">
              <button>New User</button>
            </Link>
          </h2>
          <h2>
            <Link to="/login" className="links">
              <button>Returning User</button>
            </Link>
          </h2>
        </div>
      </>
    );
  }
}

export default HomePage;
