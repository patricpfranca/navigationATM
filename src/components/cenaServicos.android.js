import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';

import BarraNavegacao from './barraNavegacao.android';

const detalheServicos = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
  render() {
    return (
      <View style={{ borderWidth: 1, flex: 1, backgroundColor: '#fff' }}>
        <StatusBar backgroundColor='#ccc' />
        <BarraNavegacao voltar navigator={this.props.navigator} />

        <View style={styles.cabecalho}>
          <Image source={detalheServicos} />
          <Text style={styles.txtTitulo}>Nossos Serviços</Text>
        </View>
        <View style={styles.servicos}>
          <Text style={styles.txtServicos}>Consultoria</Text>
          <Text style={styles.txtServicos}>Processos</Text>
          <Text style={styles.txtServicos}>Acompanhamento de projetos</Text>
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
    color: '#19d1c8',
    marginLeft: 10,
    marginTop: 25
  },
  servicos: {
    marginTop: 20,
    padding: 20
  },
  txtServicos: {
    fontSize: 18
  }
});
