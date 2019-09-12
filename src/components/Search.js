import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

    getKey(e){
        e.preventDefault();
        const keyTyped = this.refs.inputword.value;
        console.log(keyTyped)

        axios.post('node server endpoint', {
            city: keyTyped,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    render() {
        return (
            <form>
                <fieldset>
                    <legend>Search Nearby Places</legend>

                    <div className="col-md-10">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Place:</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search here" ref="inputword" />
                        </div>
                    </div>

                    <div className="col-md-2">
                        <button className="btn btn-success" onClick={this.getKey.bind(this)}>Search</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default Search;


