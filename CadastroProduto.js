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
  ScrollView
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class CadastroProduto extends Component {
      constructor(props) {
    super(props);
    this.state = {
      estado:'',
      estado1:''
    };
  }

  trocaTela(valor){
    console.log("ACESSOU")
    console.log(valor)
    if(valor != "Bens_Duraveis"){
      this.props.navigation.navigate('CadastrarBD', {produto: valor})
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
            justifyContent:'center'
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
                <Text style={styles.paragraph}>CADASTRO</Text>
                </View>
                <Picker
                  selectedValue={this.state.estado}
                  style={{height: 30, width: 208}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({estado: itemValue},  this.trocaTela(itemValue))
                  }>
                    <Picker.Item label="BENS DURÁVEIS" value="Bens_Duraveis" itemStyle={{fontSize:50}} />
                    <Picker.Item label="SOFÁ" value="SOFA" />
                    <Picker.Item label="GELADEIRA" value="GELADEIRA" />
                    <Picker.Item label="CAMA" value="CAMA" />
                    <Picker.Item label="MESA" value="MESA" />
                    <Picker.Item label="CADEIRA" value="CADEIRA" /> 
                    <Picker.Item label="ARMARIO" value="ARMARIO" />
                    
                    
                  </Picker>

                  <Picker
                    selectedValue={this.state.estado1}
                  style={{height: 30, width: 208}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({estado1: itemValue})
                    }>
                    <Picker.Item label="RECICLÁVEIS" value="Reciclaveis" itemStyle={{fontSize:50}}/>
                    <Picker.Item label="GARRAFA" value="GARRAFA" />
                    <Picker.Item label="ALUMINIO" value="ALUMINIO" />
                    <Picker.Item label="FERRO" value="FERRO" />
                    <Picker.Item label="PLASTICO" value="PLASTICO" />
                    
                  </Picker>
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
    alignItems:'center',
    //backgroundColor:'blue',
    

  },

  



  
});
