import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Perfil extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('./imagens/folhas3.jpg')}
        style={styles.background}>
        <View style={styles.contener}>
          <View style={styles.conteudo}>
            <ScrollView>
              <Card>
                <AssetExample />
              </Card>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '105%',
    paddingLeft: 5,
  },
  contener: {
    margin: 50,
    marginTop: 115,
    marginBottom: 135,
    justifyContent: 'center',
  },
  conteudo: {
    //backgroundColor: 'red',
    //marginButton: 90,
  },
});
