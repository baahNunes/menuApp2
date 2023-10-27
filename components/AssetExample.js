import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.titulo}>Bens Duraveis</Text>
          <Text style={styles.paragraph}>
            Bens duráveis ou duradouros são bens tangíveis que só deterioram-se
            ou perdem a utilidade com o uso persistente ou o largo período de
            tempo. Portanto, esta categoria de bens abrange tanto os bens de
            consumo duradouros, como um automóvel ou máquina de lavar roupa, e
            os bens de capital.
          </Text>
          <Image
            style={styles.logo}
            source={require('../assets/bensDuraveis.jpeg')}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.titulo}>Impactos Sociais</Text>
          <Text style={styles.paragraph}>
            Os impactos negativos no meio ambiente estão diretamente
            relacionados com o aumento crescente das áreas urbanas, o aumento de
            veículos automotivos, o uso irresponsável dos recursos, o consumo
            exagerado de bens materiais e a produção constante de lixo.
            Percebemos, portanto, que não apenas as grandes empresas afetam o
            meio, nós, com pequenas atitudes, provocamos impactos ambientais
            diariamente.
          </Text>
          <Image
            style={styles.logo}
            source={require('../assets/impactoSocial.jpeg')}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.titulo}>Reciclagem</Text>
          <Text style={styles.paragraph}>
            Reciclagem é o processo em que há a transformação do resíduo sólido
            que não seria aproveitado, com mudanças em seus estados físico,
            físico-químico ou biológico, de modo a atribuir características ao
            resíduo para que este se torne novamente matéria-prima ou produto,
            segundo a Política Nacional de Resíduos Sólidos (PNRS).
          </Text>
          <Image
            style={styles.logo}
            source={require('../assets/reciclagem.jpg')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 25,
    //marginButton: 100,
  },
  paragraph: {
    margin: 24,
    marginTop: 20,
    fontSize: 14,
    fontWeight: '',
    textAlign: 'center',
    //  marginButton: 90,
  },
  titulo: {
    margin: 24,
    marginTop: 0,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});
