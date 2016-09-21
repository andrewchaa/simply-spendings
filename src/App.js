import React, { Component } from 'react';
import 'admin-lte/bootstrap/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Simply Spendings</h3>
        </div>

        <div className="row">
          <div className="col-xs-4">
            <input type="text" className="form-control" placeholder="spending" />
          </div>
          <div className="col-xs-2">
            <input type="text" className="form-control" placeholder="amount" />
          </div>
          <div className="col-xs-2">
            <button className="btn btn-default">Add</button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
