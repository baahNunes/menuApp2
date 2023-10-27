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
  ScrollView,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Produtos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produto: this.props.navigation.state.params.produto,
      quantidade_total: this.props.navigation.state.params.cont,
      produtos: '',
      produto_buscado1: '',
      produto_buscado2: '',
      produto_buscado3: '',
      produto_buscado4: '',
      produto_buscado5: '',
    };
  }

  componentDidMount() {
    this._PRODUTO(this.state.produto, this.state.quantidade_total);
  }

  _PRODUTO(produto, quantidade_total) {
    console.log(quantidade_total);
    var testeBusca1;
    var testeBusca2;
    var testeBusca3;
    var testeBusca4;
    var testeBusca5;

    AsyncStorage.getItem('quant_prod').then(dados => {
      var produtos = JSON.parse(dados);
      console.log(produtos.quantidade_total);
      console.log(this.state.quantidade_total);
      if (produtos.quantidade_total >= 1) {
        AsyncStorage.getItem('1').then(dados => {
          console.log(dados);
          testeBusca1 = JSON.parse(dados);
          this.setState({ produto_buscado1: testeBusca1 });
          console.log('produto buscado1: ' + testeBusca1.produto);
        });
      }
      if (produtos.quantidade_total >= 2) {
        AsyncStorage.getItem('2').then(dados => {
          console.log(dados);
          testeBusca2 = JSON.parse(dados);
          this.setState({ produto_buscado2: testeBusca2 });
          console.log('produto buscado2: ' + testeBusca2.produto);
        });
      }
      if (produtos.quantidade_total >= 3) {
        AsyncStorage.getItem('3').then(dados => {
          console.log(dados);
          testeBusca3 = JSON.parse(dados);
          this.setState({ produto_buscado3: testeBusca3 });
          console.log('produto buscado3: ' + testeBusca3.produto);
        });
      }
      if (produtos.quantidade_total >= 4) {
        AsyncStorage.getItem('4').then(dados => {
          console.log(dados);
          testeBusca4 = JSON.parse(dados);
          this.setState({ produto_buscado4: testeBusca4 });
          console.log('produto buscado4: ' + testeBusca4.produto);
        });
      }
      if (produtos.quantidade_total >= 5) {
        AsyncStorage.getItem('5').then(dados => {
          console.log(dados);
          testeBusca5 = JSON.parse(dados);
          this.setState({ produto_buscado5: testeBusca5 });
          console.log('produto buscado5: ' + testeBusca5.produto);
        });
      }
    });
  }

  render() {
    return (
      <ImageBackground
        source={require('./imagens/folhas3.jpg')}
        style={{ width: '100%', height: '105%', paddingLeft: 6 }}>
        <View
          style={{
            flex: 1,
            //backgroundColor: 'red',
            paddingTop: 50,
            paddingBottom: 27,
          }}>
          <View
            style={{
              alignItems: 'center',
              padding: 5,
              backgroundColor: 'white',
              flex: 0.8,
              alignSelf: 'center',
              width: '65%',
            }}>
            <View
              style={{
                border: 10,
                padding: 10,
                //backgroundColor: 'blue',
                alignSelf: 'center',
                flex: 1,
                //justifyContent: 'center',
                borderWidth: 1,
                borderColor: 'gray',
                width: '100%',
              }}>
              <ScrollView style={{}}>
                <View>
                  <Text style={styles.paragraph}>PRODUTOS ENCONTRADOS</Text>
                </View>
                <View style={{ flex: 0.3, flexDirection: 'row' }}>
                  <View
                    style={{
                      flex: 0.33,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>PRODUTO</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.33,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>QUANT.</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.34,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>CIDADE</Text>
                  </View>
                </View>
                <View style={{ flex: 0.7, flexDirection: 'row', marginTop:20}}>
                  <View
                    style={{
                      flex: 0.33,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado1.produto}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.33,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado1.quantidade}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.34,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado1.cidade}</Text>
                  </View>
                </View>
                <View style={{ flex: 0.7, flexDirection: 'row' }}>
                  <View
                    style={{
                      flex: 0.33,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado2.produto}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.33,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado2.quantidade}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.34,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado2.cidade}</Text>
                  </View>
                </View>
                <View style={{ flex: 0.7, flexDirection: 'row' }}>
                  <View
                    style={{
                      flex: 0.33,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado3.produto}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.33,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado3.quantidade}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.34,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado3.cidade}</Text>
                  </View>
                </View>
                <View style={{ flex: 0.7, flexDirection: 'row' }}>
                  <View
                    style={{
                      flex: 0.33,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado4.produto}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.33,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado4.quantidade}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.34,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado4.cidade}</Text>
                  </View>
                </View>
                <View style={{ flex: 0.7, flexDirection: 'row' }}>
                  <View
                    style={{
                      flex: 0.33,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado5.produto}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.33,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado5.quantidade}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.34,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{this.state.produto_buscado5.cidade}</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
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
});
