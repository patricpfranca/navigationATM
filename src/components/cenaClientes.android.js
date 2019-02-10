import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';

import BarraNavegacao from './barraNavegacao.android';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#ccc' />
        <BarraNavegacao voltar navigator={this.props.navigator} />

        <View style={styles.cabecalho}>
          <Image source={detalheClientes} />
          <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>
        <View style={styles.cliente}>
          <Image source={cliente1} />
          <Text style={styles.txtCliente}>Lorem ipsum</Text>
        </View>
        <View style={styles.cliente}>
          <Image source={cliente2} />
          <Text style={styles.txtCliente}>Lorem ipsum</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color: '#b9c941',
    marginLeft: 10,
    marginTop: 25
  },
  cliente: {
    padding: 20,
    marginTop: 10
  },
  txtCliente: {
    fontSize: 18,
    marginLeft: 20
  }
});
