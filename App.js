import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CadastroScreen from './CadastroScreen.js';
import LoginScreen from './LoginScreen.js';
import Menu from './Menu.js';
import Doacao from './Doacao.js';
import BuscarProduto from './BuscaProd.js';
import Perfil from './Perfil.js';
import CadastroProduto from './CadastroProduto.js';
import CadastrarBD from './CadastrarBD.js';
import CadastroProdEndereco from './CadastroProdEndereco.js'
import Produtos from './Produtos.js';

//TELA DE INICIO ↓
export class App extends Component {
        constructor(props) {
          super(props);
          this.state = {
            usuario: '',
            senha: '',
            email: '',
          };
        }

  componentDidMount(){
    this._login();
  }

     _login() {
    try {
      if (this.state.usuario === '' && this.state.senha === '') {
        AsyncStorage.getItem('dados_usuario').then(dados => {
          var userDados = JSON.parse(dados);
          if (userDados.usuario != '' && userDados.senha != '') {
            this.props.navigation.navigate('Menu')
          } else {
            console.log('sem dados para login automático');
          }
        });
         AsyncStorage.getItem('t_usuarios').then(dados => {
          var userDados1 = JSON.parse(dados);
          if (userDados1.usuario == this.userDados.usuario && userDados1.senha == this.userDados.senha) {
            alert('usuario conectado');
            console.log('nome: ' + userDados1.usuario);
            console.log('senha: ' + userDados1.senha);
            this.props.navigation.navigate('Menu')
          } else {
            console.log('SEM DADOS1');
          }
        });
      }else{
        console.log('usuario = ' + this.state.usuario);
        console.log('senha = ' + this.state.senha);
      }

    } catch(error) {
      // Error retrieving data
    console.log(error.message);
    alert(error.message);
    }
  }



  render() {
    return (
      <ImageBackground
        source={require('./imagens/folhas3.jpg')}
        style={{ width: '100%', height: '105%',   paddingLeft: 6 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 0.2,
              width: '100%',
              height: '100%',
              //backgroundColor:'black'
            }}
          />
          <View
            style={{
              flex: 0.25,
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              //backgroundColor: 'blue'
            }}>
            <View
              style={{
                //backgroundColor: 'red',
                flex: 0.55,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('./imagens/logo-eco.png')}
                style={{ width: '80%', height: '80%',  resizeMode:'contain'}}
              />
            </View>
          </View>
          <View
            style={{
              flex: 0.55,
              justifyContent: 'center',
              flexDirection: 'row',
              paddingTop: 15,
              //alignItems: `center`,
              //backgroundColor:'yellow'
            }}>
            <View style={{ /*backgroundColor:'blue', */ flex: 0.55 }}>
              
              <TouchableOpacity
                style={styles.bottonInicio}
                onPress={() => {
                  this.props.navigation.navigate('Login');
                }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  Login
                </Text>
              </TouchableOpacity>
              <Text> </Text>
              <TouchableOpacity
                style={styles.bottonInicio}
                onPress={() => {
                  this.props.navigation.navigate('Cadastro');
                }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  Cadastro
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

//CONFIGURANDO NAVEGAÇÃO ENTRE TELAS ↓
export default createStackNavigator(
  {
    Home: App,
    Login: LoginScreen,
    Cadastro: CadastroScreen,
    Menu: Menu,
    Doacao: Doacao,
    BuscarProduto: BuscarProduto,
    Perfil: Perfil,
    CadastroProduto: CadastroProduto,
    CadastrarBD: CadastrarBD,
    CadastroProdEndereco: CadastroProdEndereco,
    Produtos: Produtos
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  }
);

//CONFIGURAÇÕES DE ESTILO (APARENCIA) ↓
const styles = StyleSheet.create({
  bottonInicio: {
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: `#003300`,
    width: '100%',
    height: `15%`,
    borderRadius: 6,
  },
});