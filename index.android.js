import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/cenaPrincipal.android';
import CenaClientes from './src/components/cenaClientes.android';
import CenaContatos from './src/components/cenaContatos.android';
import CenaEmpresa from './src/components/cenaEmpresa.android';
import CenaServicos from './src/components/cenaServicos.android';

export default class app5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'principal':
              return (<CenaPrincipal navigator={navigator} />);
            case 'clientes':
              return (<CenaClientes navigator={navigator} />);
            case 'contatos':
              return (<CenaContatos navigator={navigator} />);
            case 'empresa':
              return (<CenaEmpresa navigator={navigator} />);
            case 'servicos':
              return (<CenaServicos navigator={navigator} />);
            default:
              return false;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
