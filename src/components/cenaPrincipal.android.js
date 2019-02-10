import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Image } from 'react-native';

import BarraNavegacao from './barraNavegacao.android';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuContato = require('../imgs/menu_contato.png');
const menuServicos = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#ccc' />
        <BarraNavegacao />
        <Image source={logo} />
        <Image source={menuCliente} />
        <Image source={menuContato} />
        <Image source={menuEmpresa} />
        <Image source={menuServicos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
