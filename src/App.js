import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  render() {
    return (

      <div className='container'>
        <div className="row">
          <div className="col-md-8">
            <form>
              <fieldset>
                <legend>Search Nearby Places</legend>

                <div className="col-md-10">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Place:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search here" />
                  </div>
                </div>

                <div className="col-md-2">
                  <button className="btn btn-success">Search</button>
                </div>
              </fieldset>
            </form>
            <ul>
              <li>colombo</li>
              <li>Kandy</li>
            </ul>

          </div>

          <div className="col-md-4">
            <h2>Save Places</h2>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
