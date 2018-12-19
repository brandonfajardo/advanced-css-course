import React, { Component, Fragment } from 'react';

import { Header, About } from './components'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <About />
        </main>
      </Fragment>
    );
  }
}

export default App;
