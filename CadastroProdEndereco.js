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
  Picker,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DatePicker from 'react-native-datepicker';

export default class CadastroProdEndereco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produto: this.props.navigation.state.params.produto,
      quantidade: this.props.navigation.state.params.quantidade,
      cor: this.props.navigation.state.params.cor,
      estadoProd: this.props.navigation.state.params.estado,
      sexo: '',
      endereco: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      nome_completo: '',
      email: '',
      data_nascimento: '',
      h: '',
      m: '',
      produto_buscado: '',
      quantidade_total: this.props.navigation.state.params.quantidade_total,
    };
  }

  _cadastroProduto(
    produto,
    quantidade,
    cor,
    estadoProd,
    endereco,
    numero,
    bairro,
    cidade,
    estado,
    nomeCompl,
    email,
    dataNasc
  ) {
    AsyncStorage.getItem('quant_prod').then(dados => {
      var produtos = JSON.parse(dados);
      console.log(produtos.quantidade_total);
      console.log(this.state.quantidade_total);
    });

    console.log('quantidade total ' + this.state.quantidade_total);
    console.log(produto);
    console.log(quantidade);
    console.log(cor);
    console.log(estadoProd);
    console.log(endereco);
    console.log(numero);
    console.log(bairro);
    console.log(cidade);
    console.log(estado);
    console.log(nomeCompl);
    console.log(email);
    console.log(dataNasc);
    try {
      if (this.state.quantidade_total < 2 && this.state.quantidade_total != 1) {
        console.log('menor que 2 e diferente de 1');
        console.log(this.state.quantidade_total);
        AsyncStorage.setItem(
          '1',
          JSON.stringify({
            produto: produto,
            quantidade: quantidade,
            cor: cor,
            estadoProd: estadoProd,
            endereco: endereco,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            nome_completo: nomeCompl,
            email: email,
            data_nascimento: dataNasc,
          })
        );
        AsyncStorage.setItem(
          'quant_prod',
          JSON.stringify({
            quantidade_total: 1,
          })
        );
        this.setState({ quantidade_total: 1 });
        console.log('cadastrou 1');
      }
    } catch (error) {
      console.log('erro');
    }
    if (this.state.quantidade_total == 1 && this.state.quantidade_total < 2) {
      console.log('igual a 1');
      AsyncStorage.setItem(
        '2',
        JSON.stringify({
          produto: produto,
          quantidade: quantidade,
          cor: cor,
          estadoProd: estadoProd,
          endereco: endereco,
          numero: numero,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          nome_completo: nomeCompl,
          email: email,
          data_nascimento: dataNasc,
        })
      );
      AsyncStorage.setItem(
        'quant_prod',
        JSON.stringify({
          quantidade_total: 2,
        })
      );
      this.setState({ quantidade_total: 2 });
    }
    if (this.state.quantidade_total == 2 && this.state.quantidade_total < 3) {
      console.log('igual a 2 e menor que 3');
      AsyncStorage.setItem(
        '3',
        JSON.stringify({
          produto: produto,
          quantidade: quantidade,
          cor: cor,
          estadoProd: estadoProd,
          endereco: endereco,
          numero: numero,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          nome_completo: nomeCompl,
          email: email,
          data_nascimento: dataNasc,
        })
      );
      AsyncStorage.setItem(
        'quant_prod',
        JSON.stringify({
          quantidade_total: 3,
        })
      );
      this.setState({ quantidade_total: 3 });
    }
    if (this.state.quantidade_total == 3 && this.state.quantidade_total < 4) {
      console.log('igual a 3 e menor que 4');
      AsyncStorage.setItem(
        '4',
        JSON.stringify({
          produto: produto,
          quantidade: quantidade,
          cor: cor,
          estadoProd: estadoProd,
          endereco: endereco,
          numero: numero,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          nome_completo: nomeCompl,
          email: email,
          data_nascimento: dataNasc,
        })
      );
      AsyncStorage.setItem(
        'quant_prod',
        JSON.stringify({
          quantidade_total: 4,
        })
      );
      this.setState({ quantidade_total: 4 });
    }
    if (this.state.quantidade_total == 4 && this.state.quantidade_total < 5) {
      console.log('igual a 4 e menor que 5');
      AsyncStorage.setItem(
        '5',
        JSON.stringify({
          produto: produto,
          quantidade: quantidade,
          cor: cor,
          estadoProd: estadoProd,
          endereco: endereco,
          numero: numero,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          nome_completo: nomeCompl,
          email: email,
          data_nascimento: dataNasc,
        })
      );
      AsyncStorage.setItem(
        'quant_prod',
        JSON.stringify({
          quantidade_total: 5,
        })
      );
      this.setState({ quantidade_total: 5 });
    }
    alert('CADASTRADO COM SUCESSO');
    console.log('Quantidade de Produtos: ' + this.state.quantidade_total);
    this.props.navigation.navigate('Menu');
  }

  _testeCadastro() {
    var testeBusca;
    AsyncStorage.getItem('1').then(dados => {
      console.log(dados);
      testeBusca = JSON.parse(dados);
      this.setState({ produto_buscado: testeBusca.produto });
      console.log('produto buscado: ' + testeBusca.produto);
    });
  }
  _estiloHomem() {
    if (this.state.sexo != 'Masculino') {
      this.setState({ m: '' });
      this.setState({ h: 'X' });
      this.setState({ sexo: 'Masculino' });
    }
  }

  _estiloMulher() {
    if (this.state.sexo != 'Mulher') {
      this.setState({ h: '' });
      this.setState({ m: 'X' });
      this.setState({ sexo: 'Feminino' });
    }
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
              <ScrollView style={{ justifyContent: 'center' }}>
                <View>
                  <View style={{ marginTop: 15, alignItems: 'center' }}>
                    <Text style={{}}>
                      {this.state.quantidade} {this.state.produto}{' '}
                      {this.state.cor}
                    </Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <TextInput
                      placeholder="Nome Completo"
                      placeholderTextColor="#003300"
                      textAlign="center"
                      style={{
                        height: 30,
                        width: '100%',
                        borderWidth: 0.7,
                        borderRadius: 15,
                        borderColor: 'gray',
                        marginTop: 10,
                      }}
                      onChangeText={text =>
                        this.setState({ nome_completo: text })
                      }
                    />
                  </View>
                  <View>
                    <TextInput
                      placeholder="E-mail"
                      placeholderTextColor="#003300"
                      textAlign="center"
                      style={{
                        height: 30,
                        width: '100%',
                        borderWidth: 0.7,
                        borderRadius: 15,
                        borderColor: 'gray',
                        marginTop: 10,
                      }}
                      onChangeText={text => this.setState({ email: text })}
                    />
                  </View>
                  <View
                    style={{
                      width: '100%',
                      borderWidth: 0.7,
                      borderRadius: 15,
                      borderColor: 'gray',
                      marginTop: 10,
                      alignItems: 'center',
                    }}>
                    <Text>Sexo:</Text>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View
                        id="styleMacho"
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
                          <Text>{this.state.h}</Text>
                        </View>
                        <TouchableOpacity
                          style={{}}
                          onPress={() => {
                            this._estiloHomem();
                          }}>
                          <Text>Homem</Text>
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
                          <Text>{this.state.m}</Text>
                        </View>
                        <TouchableOpacity
                          style={{}}
                          onPress={() => {
                            this._estiloMulher();
                          }}>
                          <Text>Mulher</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <TextInput
                      placeholder="Endereço"
                      placeholderTextColor="#003300"
                      textAlign="center"
                      style={{
                        height: 30,
                        width: '80%',
                        borderWidth: 0.7,
                        borderRadius: 15,
                        borderColor: 'gray',
                        marginTop: 10,
                      }}
                      onChangeText={text => this.setState({ endereco: text })}
                    />
                    <TextInput
                      placeholder="Nº"
                      placeholderTextColor="#003300"
                      textAlign="center"
                      style={{
                        height: 30,
                        width: '20%',
                        borderWidth: 0.7,
                        borderRadius: 15,
                        borderColor: 'gray',
                        marginTop: 10,
                      }}
                      onChangeText={text => this.setState({ numero: text })}
                    />
                  </View>
                  <View>
                    <TextInput
                      placeholder="Bairro"
                      placeholderTextColor="#003300"
                      textAlign="center"
                      style={{
                        height: 30,
                        width: '100%',
                        borderWidth: 0.7,
                        borderRadius: 15,
                        borderColor: 'gray',
                        marginTop: 10,
                      }}
                      onChangeText={text => this.setState({ bairro: text })}
                    />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <TextInput
                      placeholder="Cidade"
                      placeholderTextColor="#003300"
                      textAlign="center"
                      style={{
                        height: 30,
                        width: '80%',
                        borderWidth: 0.7,
                        borderRadius: 15,
                        borderColor: 'gray',
                        marginTop: 10,
                      }}
                      onChangeText={text => this.setState({ cidade: text })}
                    />
                    <Picker
                      selectedValue={this.state.estado}
                      style={{
                        height: 30,
                        width: 85,
                        justifyContent: 'center',
                      }}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ estado: itemValue })
                      }>
                      <Picker.Item label="AC" value="AC" />
                      <Picker.Item label="AL" value="AL" />
                      <Picker.Item label="AP" value="AP" />
                      <Picker.Item label="AM" value="AM" />
                      <Picker.Item label="BA" value="BA" />
                      <Picker.Item label="CE" value="CE" />
                      <Picker.Item label="DF" value="DF" />
                      <Picker.Item label="ES" value="ES" />
                      <Picker.Item label="GO" value="GO" />
                      <Picker.Item label="MA" value="MA" />
                      <Picker.Item label="MT" value="MT" />
                      <Picker.Item label="MS" value="MS" />
                      <Picker.Item label="MG" value="MG" />
                      <Picker.Item label="PA" value="PA" />
                      <Picker.Item label="PB" value="PB" />
                      <Picker.Item label="PR" value="PR" />
                      <Picker.Item label="PE" value="PE" />
                      <Picker.Item label="PI" value="PI" />
                      <Picker.Item label="RJ" value="RJ" />
                      <Picker.Item label="RN" value="RN" />
                      <Picker.Item label="RS" value="RS" />
                      <Picker.Item label="RO" value="RO" />
                      <Picker.Item label="RR" value="RR" />
                      <Picker.Item label="SC" value="SC" />
                      <Picker.Item label="SP" value="SP" />
                      <Picker.Item label="SE" value="SE" />
                      <Picker.Item label="TO" value="TO" />
                    </Picker>
                  </View>
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
                        this._cadastroProduto(
                          this.state.produto,
                          this.state.quantidade,
                          this.state.cor,
                          this.state.estadoProd,
                          this.state.endereco,
                          this.state.numero,
                          this.state.bairro,
                          this.state.cidade,
                          this.state.estado,
                          this.state.nome_completo,
                          this.state.email,
                          this.state.data_nascimento
                        );
                      }}>
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        CADASTRAR
                      </Text>
                    </TouchableOpacity>
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
const styles = StyleSheet.create({});
