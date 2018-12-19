import React, { Component, Fragment } from 'react';

import { Header } from './components'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="row">
          <div className="col-2-of-4">
            <p>i'm in a row</p>
          </div>
          <div className="col-2-of-4">
            <p>i'm in a row</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
