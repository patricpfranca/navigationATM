import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';

import BarraNavegacao from './barraNavegacao.android';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
      <View style={{ borderWidth: 1, flex: 1, backgroundColor: '#fff' }}>
        <StatusBar backgroundColor='#ccc' />
        <BarraNavegacao voltar navigator={this.props.navigator} />

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>
        <View style={styles.empresa}>
          <Text style={styles.txtEmpresa}>ATM Consultoria está no mercado a mais de 20 anos</Text>
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
    color: '#ec7148',
    marginLeft: 10,
    marginTop: 25
  },
  empresa: {
    marginTop: 20,
    padding: 20
  },
  txtEmpresa: {
    fontSize: 18
  }
});
