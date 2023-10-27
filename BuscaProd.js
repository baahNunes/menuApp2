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
  Picker,
  ScrollView,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class BuscaProd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produto: '',
      quantidade_total: ''
    };
  }

  _buscaProd(produto){
    var quant_prod;
    var cont;
    var produtos
    AsyncStorage.getItem('quant_prod').then(dados => {
          produtos = JSON.parse(dados);
          this.setState({quantidade_total: produtos.quantidade_total})
          console.log("BuscaProd quantidade total " +produtos.quantidade_total)
          this.props.navigation.navigate('Produtos', {produto: produto, cont: produtos.quantidade_total})
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
            paddingTop: 25,
            paddingBottom: 50,
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              padding: 5,
              backgroundColor: 'white',
              flex: 0.7,
              alignSelf: 'center',
              width: '65%',
            }}>
            <View
              style={{
                border: 10,
                padding: 2,
                //backgroundColor: 'blue',
                alignSelf: 'center',
                flex: 1,
                //justifyContent: 'center',
                borderWidth: 1,
                borderColor: 'gray',
                width: '100%',
              }}>
              <ScrollView>
                <View style={styles.paragraph}>
                  <Text style={styles.paragraph}>SELECIONAR PRODUTO</Text>
                </View>
                <Picker
                  selectedValue={this.state.produto}
                  style={{ height: 30, width: 208 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ produto: itemValue })
                  }>
                  <Picker.Item
                    label="BENS DURÁVEIS"
                    value="Bens_Duraveis"
                    itemStyle={{ fontSize: 50 }}
                  />
                  <Picker.Item label="SOFÁ" value="SOFA" />
                  <Picker.Item label="GELADEIRA" value="GELADEIRA" />
                  <Picker.Item label="CAMA" value="CAMA" />
                  <Picker.Item label="MESA" value="MESA" />
                  <Picker.Item label="CADEIRA" value="CADEIRA" />
                  <Picker.Item label="ARMARIO" value="ARMARIO" />
                </Picker>

                <Picker
                    selectedValue={this.state.produto}
                  style={{height: 30, width: 208}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({produto: itemValue})
                    }>
                    <Picker.Item label="RECICLÁVEIS" value="Reciclaveis" itemStyle={{fontSize:50}}/>
                    <Picker.Item label="GARRAFA" value="GARRAFA" />
                    <Picker.Item label="ALUMINIO" value="ALUMINIO" />
                    <Picker.Item label="FERRO" value="FERRO" />
                    <Picker.Item label="PLASTICO" value="PLASTICO" />
                    
                  </Picker>

                
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 40,
                    borderWidth: 0.7,
                    borderRadius: 15,
                    borderColor: 'gray',
                    width: '100%',
                    height: 58,
                    backgroundColor: '#003300',
                  }}>
                  <TouchableOpacity
                    style={styles.bottonInicio}
                    onPress={() => {
                      this._buscaProd(
                        this.state.produto
                      );
                    }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                      BUSCAR {this.state.produto}
                    </Text>
                  </TouchableOpacity>
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
    marginTop: 12,
    marginBottom: 40,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    alignItems: 'center',
    //backgroundColor:'blue',
  },

  bottonInicio: {
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: '#003300',
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});
