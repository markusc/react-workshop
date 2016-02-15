import React from 'react';
import Header from './shared/Header.js'
import Menu from './shared/Menu.js'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section className="main" aria-role="main">
          <h1>School of Witchcraft & Wizardry</h1>
          <img src="../img/wizard.png" className="wizard"/>
          <Menu />
        </section>
      </div>
    )
  }
};

export default Main;
