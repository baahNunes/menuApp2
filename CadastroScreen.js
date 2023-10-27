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

export default class CadastroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      senha: '',
      nome_completo: '',
      email: '',
      data_nascimento:'',
      sexo:'',
      endereco: '',
      numero: '',
      bairro:'',
      cidade:'',
      estado: '',
      h: '',
      m: '',
      date: ''
    };
  }

  _cadastro(usuario, senha, email) {
    try {
      AsyncStorage.setItem(
        'dados_usuario',
        JSON.stringify({
          usuario: usuario,
          senha: senha,
          email: email,
        })
      );
      AsyncStorage.setItem(
        't_usuarios',
        JSON.stringify({
          usuario: usuario,
          senha: senha,
          email: email,
          data_nascimento: this.state.data_nascimento,
          sexo: this.state.sexo,
          endereco: this.state.endereco, 
          numero: this.state.numero,
          bairro: this.state.bairro,
          cidade: this.state.cidade,
          estado: this.state.estado,
        })
      );
      alert('CADASTRADO COM SUCESSO');
      this.props.navigation.navigate('Login');
      console.log(
        'usuario: ' + usuario + ' senha: ' + senha + ' email: ' + email
      );

      AsyncStorage.setItem(
        'quant_prod',
        JSON.stringify({
          quantidade_total: 0
        })
      );
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
      alert(error.message);
    }
  }
  
  _estiloHomem(){
    if(this.state.sexo != 'Masculino'){
      this.setState({m: ''});
      this.setState({h: 'X'});
      this.setState({sexo: 'Masculino'});
    }
  }

  _estiloMulher(){
    if(this.state.sexo != 'Mulher'){
      this.setState({h: ''});
      this.setState({m: 'X'});
      this.setState({sexo: 'Feminino'});
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
            paddingTop: 25,
            paddingBottom: 50,
          }}>
          <View
            style={{
              alignItems: 'center',
              padding: 5,
              backgroundColor: 'white',
              flex: 1,
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
              <ScrollView>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems:'center',
                    //backgroundColor: 'blue',
                    width: '100%',
                    height: 210
                  }}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      //backgroundColor: 'red',
                      height:'100%'
                    }}>
                    <Image
                      source={require('./imagens/logo-eco.png')}
                      style={{ width: '90%', height: '87%', resizeMode:'contain' }}
                    />
                  </View>
                </View>
                <View>
                  <View>
                    <TextInput
                      placeholder="Usuário"
                      placeholderTextColor="#003300"
                      textAlign="center"
                      style={{
                        height: 30,
                        width: '100%',
                        borderWidth: 0.7,
                        borderRadius: 15,
                        borderColor: 'gray',
                        marginTop: 10
                      }}
                      onChangeText={text => this.setState({ usuario: text })}
                    />
                  </View>
                  <View>
                    <TextInput
                      placeholder="Senha"
                      secureTextEntry={true}
                      placeholderTextColor="#003300"
                      textAlign="center"
                      style={{
                        height: 30,
                        width: '100%',
                        borderWidth: 0.7,
                        borderRadius: 15,
                        borderColor: 'gray',
                        marginTop: 10
                      }}
                      onChangeText={text => this.setState({ senha: text })}
                    />
                  </View>
                  <View>
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
                        marginTop: 10
                      }}
                      onChangeText={text => this.setState({ nome_completo: text })}
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
                        marginTop: 10
                      }}
                      onChangeText={text => this.setState({ email: text })}
                    />
                  </View>
                  <View>
                    <DatePicker
                      style={{
                        marginTop: 10,
                        alignItems: 'center',
                      }}
                      date={this.state.data_nascimento}
                      mode="date"
                      placeholder="Nascimento"
                      format="DD/MM/YYYY"
                      minDate="01-01-1899"
                      maxDate="01-01-2019"
                      confirmBtnText="Confirmar"
                      cancelBtnText="Cancelar"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0,
                        },
                        dateInput: {
                          marginLeft: 36,
                          borderWidth: 0.7,
                          borderRadius: 15,
                          borderColor: 'gray',
                        },
                      }}
                      onDateChange={date => {
                        this.setState({ data_nascimento: date });
                      }}
                    />
                  </View>
                  <View style={{
                        width: '100%',
                        borderWidth: 0.7,
                        borderRadius: 15,
                        borderColor: 'gray',
                        marginTop: 10,
                        alignItems: 'center',
                      }}>
                    <Text>Sexo:</Text>
                    <View style={{flex: 1, flexDirection: 'row', alignItems:'center'}}>
                      <View id='styleMacho' style={{ flex: 0.4, flexDirection: 'row', alignItems: 'center',}}>
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
                          style={{
                            
                          }}
                          onPress={() => {this._estiloHomem()}}>
                          <Text>Homem</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{flex: 0.4, flexDirection: 'row', alignItems: 'center',}}>
                        <View style={{
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
                        style={{
                            
                          }}
                          onPress={() => {this._estiloMulher()}}>
                          <Text>Mulher</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
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
                        marginTop: 10
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
                        marginTop: 10
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
                        marginTop: 10
                      }}
                      onChangeText={text => this.setState({ bairro: text })}
                    />
                  </View>
                  <View  style={{flexDirection: 'row'}}>
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
                        marginTop: 10
                      }}
                      onChangeText={text => this.setState({ cidade: text })}
                    />
                    <Picker
                    selectedValue={this.state.estado}
                    style={{height: 30, width: 85, justifyContent:'center'}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({estado: itemValue})
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
                    marginTop: 12,
                    borderWidth: 0.7,
                    borderRadius: 15,
                    borderColor: 'gray',
                    width: '100%',
                    height: 58,
                    backgroundColor: '#003300',
                    
                  }}>
                  <TouchableOpacity style={styles.bottonInicio} onPress={() => {this._cadastro(this.state.usuario, this.state.senha, this.state.email)}}>
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
const styles = StyleSheet.create({
  
});
