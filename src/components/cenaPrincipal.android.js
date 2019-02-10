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
              underlayColor={'#b9c941'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'clientes' });
              }}
            >
              <Image style={styles.imgMenu} source={menuCliente} />
            </TouchableHighlight>
            <TouchableHighlight 
              underlayColor={'#61bd8c'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'contatos' });
              }}
            >
              <Image style={styles.imgMenu} source={menuContato} />
            </TouchableHighlight>
          </View>
          <View style={styles.menuGrupo}>
            <TouchableHighlight 
              underlayColor={'#ec7148'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'empresa' });
              }}
            >  
              <Image style={styles.imgMenu} source={menuEmpresa} />
            </TouchableHighlight>
            <TouchableHighlight 
              underlayColor={'#19d1c8'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'servicos' });
              }}
            >
              <Image style={styles.imgMenu} source={menuServicos} />
            </TouchableHighlight>
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
