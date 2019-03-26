import React, { Component } from 'react'
import FullNavbars from './FullNavbars'
import Content from './Content'

class App extends Component {
  render() {
    return (
      <section>
        <FullNavbars />
        <Content />
      </section>
    )
  }
}

export default App;
