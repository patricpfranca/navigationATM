import React, { Component } from 'react';
import { AppRegistry, StatusBar, View } from 'react-native';

import BarraNavegacao from './src/components/barraNavegacao.android';

export default class app5 extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor = '#ccc' />
        <BarraNavegacao />
      </View>
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
