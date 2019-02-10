import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import BarraNavegacao from './src/components/barraNavegacao.android';

export default class app5 extends Component {
  render() {
    return (
      <BarraNavegacao />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
