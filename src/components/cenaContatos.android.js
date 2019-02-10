import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';

import BarraNavegacao from './barraNavegacao.android';

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#ccc' />
        <BarraNavegacao voltar navigator={this.props.navigator} />

        <View style={styles.cabecalho}>
          <Image source={detalheContatos} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>
        <View style={styles.contatos}>
          <Text style={styles.txtContato}>TEL: (11) 1234-1234</Text>
          <Text style={styles.txtContato}>CEL: (11) 1234-1234</Text>
          <Text style={styles.txtContato}>EMAIL: contato@atmconsultoria.com.br</Text>
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
    color: '#61bd8c',
    marginLeft: 10,
    marginTop: 25
  },
  contatos: {
    marginTop: 20,
    padding: 20
  },
  txtContato: {
    fontSize: 18
  }
});
