import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  AsyncStorage,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Doacao extends Component {
      constructor(props) {
    super(props);
    this.state = {

    };
  }

   
  render() {
    return (
      <ImageBackground
        source={require('./imagens/folhas3.jpg')}
        style={{ width: '100%', height: '105%',  paddingLeft: 6 }}>
        <View style={styles.viewstyle}>  
        <Text style={styles.paragraph}>DOAÇÃO</Text>
        <Text> </Text>   
        <Text> </Text> 
        <Text> </Text> 
        <Text> </Text> 
        <TouchableOpacity
                style={styles.bottonInicio}
                onPress={() => {
                  this.props.navigation.navigate('BuscarProduto');
                }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  BUSCAR PRODUTO
                </Text>
              </TouchableOpacity>
              <Text> </Text>
              <TouchableOpacity
                style={styles.bottonInicio}
                onPress={() => {
                  this.props.navigation.navigate('CadastroProduto');
                }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  CADASTRAR PRODUTO
                </Text>
              </TouchableOpacity>
              <Text> </Text>
        </View>
      </ImageBackground>
     
    );
    
  }
}


//CONFIGURAÇÕES DE ESTILO (APARENCIA) ↓
const styles = StyleSheet.create({
  paragraph: {
    margin: 2,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Times New Roman',

  },

  viewstyle: {
     flex: 1.00,
     alignItems: 'center',
     justifyContent: 'center',
     paddingTop: 12,
     marginTop: 12,
     borderWidth: 0.7,
     borderRadius: 15,
     borderColor: 'gray',
     width: '100%',
     //backgroundColor: 'blue',
  },

  bottonInicio: {
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: '#003300',
    width: '50%',
    height: '8%',
    borderRadius: 6,
  },
});
