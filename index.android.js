import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/cenaPrincipal.android';
import CenaClientes from './src/components/cenaClientes.android';
import CenaContatos from './src/components/cenaContatos.android';
import CenaEmpresa from './src/components/cenaEmpresa.android';

export default class app5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {
          if (route.id === 'principal') {
            return (<CenaPrincipal navigator={navigator} />);
          }

          if (route.id === 'clientes') {
            return (<CenaClientes navigator={navigator} />);
          }

          if (route.id === 'contatos') {
            return (<CenaContatos navigator={navigator} />);
          }

          if (route.id === 'empresa') {
            return (<CenaEmpresa navigator={navigator} />);
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
