import React, { Component } from 'react';
import Search from './components/Search';
import ResultList from './components/ResultList';
import SideList from './components/SideList';
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      results: {}
    }
  }
updateState(newPlaces){

  this.setState({
    results:newPlaces
  })

}

  render() {
    return (

      <div className='container'>
        <div className="row">
          <div className="col-md-8">
            <Search callUpdate={this.updateState.bind(this)} />
            <br></br><ResultList resultPlaces={this.state.results} />
          </div>

          <div className="col-md-4">
            <SideList />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
