import React, { Component, Fragment } from 'react';

import { Header, About, Booking } from './components'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <About />
          <Booking />
        </main>
      </Fragment>
    );
  }
}

export default App;
