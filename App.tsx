import React from 'react';
import Home from './src/home/home-page'
import DatabaseInit from './src/database/database-init';

export default class App extends React.Component {

  constructor(props: string) {
    super(props);
    new DatabaseInit
  }

  render() {
    return (
      <Home />
    );
  }
}