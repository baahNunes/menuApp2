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

export default class CadastrarBD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produto: this.props.navigation.state.params.produto,
      quantidade: 0,
      cor: '',
      estado: '',
      enderecou_ser: '',
      s: '',
      n: '',
      quantidade_total: 0
    };
  }

  componentDidMount(){
    this._totalProdutos();
  }

  _totalProdutos(){
    AsyncStorage.getItem('quant_prod').then(dados => {
          var produtos = JSON.parse(dados);
          this.setState({quantidade_total: produtos.quantidade_total})
        });
  }

  _enderecoS() {
    if (this.state.enderecou_ser != 'Sim') {
      this.setState({ s: 'X' });
      this.setState({ n: '' });
      this.setState({ enderecou_ser: 'Sim' });
    }
  }

  _enderecoN() {
    if (this.state.enderecou_ser != 'Nao') {
      this.setState({ s: '' });
      this.setState({ n: 'X' });
      this.setState({ enderecou_ser: 'Nao' });
    }
  }

  _continuar() {
    AsyncStorage.getItem('quant_prod').then(dados => {
      var produtos = JSON.parse(dados);
      this.setState({quantidade_total: produtos.quantidade_total})

      if (this.state.enderecou_ser == 'Nao') {
          this.props.navigation.navigate('CadastroProdEndereco', {
            produto: this.state.produto,
            quantidade: this.state.quantidade,
            cor: this.state.cor,
            estado: this.state.estado,
            quantidade_total: produtos.quantidade_total
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
                <View>
                  <Text style={styles.paragraph}>DOAÇÃO</Text>
                </View>
                <View>
                  <Text>Produto: {this.state.produto}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text>Quantidade: </Text>
                  <TextInput
                    style={{
                      //backgroundColor: 'red',
                      width: 200,
                      height: 20,
                    }}
                    onChangeText={text => this.setState({ quantidade: text })}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text>Cor: </Text>
                  <TextInput
                    style={{
                      //backgroundColor: 'red',
                      width: 200,
                      height: 20,
                    }}
                    onChangeText={text => this.setState({ cor: text })}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text>Estado: </Text>
                  <Picker
                    selectedValue={this.state.estado}
                    style={{ width: 250, height: 20 }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ estado: itemValue })
                    }>
                    <Picker.Item label="FUNCIONANDO" value="FUNCIONANDO" />
                    <Picker.Item
                      label="NÃO FUNCIONANDO"
                      value="NÃO FUNCIONANDO"
                    />
                  </Picker>
                </View>
                <View
                  style={{
                    marginTop: 10,
                  }}>
                  <Text>Considerar endereço de usuário?</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 0.4,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderWidth: 0.7,
                        borderRadius: 15,
                        borderColor: 'gray',
                        alignItems: 'center',
                        marginLeft: 5,
                        marginRight: 5,
                      }}>
                      <Text>{this.state.s}</Text>
                    </View>
                    <TouchableOpacity
                      style={{}}
                      onPress={() => {
                        this._enderecoS();
                      }}>
                      <Text>Sim</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flex: 0.4,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderWidth: 0.7,
                        borderRadius: 15,
                        borderColor: 'gray',
                        alignItems: 'center',
                        marginLeft: 5,
                        marginRight: 5,
                      }}>
                      <Text>{this.state.n}</Text>
                    </View>
                    <TouchableOpacity
                      style={{}}
                      onPress={() => {
                        this._enderecoN();
                      }}>
                      <Text>Não</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 12,
                    borderWidth: 0.7,
                    borderRadius: 15,
                    borderColor: 'gray',
                    width: '100%',
                    height: 58,
                    backgroundColor: '#003300',}}>
                  <TouchableOpacity onPress={() => {this._continuar()}}>
                    <Text style={{color: 'white'}}>CONFIRMAR</Text>
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
    marginTop: 40,
    marginBottom: 40,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    alignItems: 'center',
    //backgroundColor:'blue',
  },
});
