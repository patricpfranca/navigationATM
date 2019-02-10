import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import CenaPrincipal from './src/components/cenaPrincipal.android';
import CenaClientes from './src/components/cenaClientes.android';

export default class app5 extends Component {
  render() {
    return (
      <CenaClientes />      
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
