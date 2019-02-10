import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableHighlight } from 'react-native';

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
        <View style={styles.logo}>
          <Image source={logo} />
        </View>
        <View style={styles.menu}>
          <View style={styles.menuGrupo}>
            <TouchableHighlight 
              onPress={() => {
                this.props.navigator.push({ id: 'b' });
              }}
            >
              <Image style={styles.imgMenu} source={menuCliente} />
            </TouchableHighlight>
            <Image style={styles.imgMenu} source={menuContato} />
          </View>
          <View style={styles.menuGrupo}>
            <Image style={styles.imgMenu} source={menuEmpresa} />
            <Image style={styles.imgMenu} source={menuServicos} />
          </View>          
        </View>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
});
