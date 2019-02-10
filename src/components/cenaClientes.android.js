import React, { Component } from 'react';
import { View, StatusBar, Image, Text } from 'react-native';

import BarraNavegacao from './barraNavegacao.android';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#ccc' />
        <BarraNavegacao />

        <Image source={detalheClientes} />
        <Text>Nossos Clientes</Text>
        <Image source={cliente1} />
        <Text>Lorem ipsum</Text>
        <Image source={cliente2} />
        <Text>Lorem ipsum</Text>
      </View>
    );
  }
}
