import { useState } from 'react';
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { useFonts } from 'expo-font';

function TelaLoginComponent({ navigation }) {
  const [Email, setIsEmail] = useState('');
  const [Senha, setIsSenha] = useState('');

  //const [loaded] = useFonts({
  //  SecularOne: require('./assets/fonte/SecularOne-Regular.ttf'),
  //});
  //if (!loaded) {
    //return null;
    
    return (
      <View style={estilos.login}>
      <View style={estilos.logo}>
        <Text style={estilos.logo}>ProcuraLitico</Text>
      </View>

      <View style={estilos.login}>
        <View style={estilos.input}>
          <Text style={estilos.texto}>Email</Text>

          <TextInput
            style={estilos.textInput}
            placeholder=""
            onChangeText={(texto) => setIsEmail(texto)}
            defaultValue={Email}
          />

          <Text style={estilos.texto}>Senha</Text>
          <TextInput
            style={estilos.textInput}
            placeholder=""
            onChangeText={(texto) => setIsSenha(texto)}
            defaultValue={Senha}
          />
          <View style={estilos.criarEsqueci}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Text>esqueci senha</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('criar conta')}>
              <Text> criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={estilos.butaoBorda}
          onPress={() => navigation.navigate('')}>
          <Text style={estilos.butao}>Iniciar Sessão</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
    


const estilos = StyleSheet.create({
  login: {
    backgroundColor: 'white',
    flex: 1,
    height: '100vh',
    justifyContent: 'center',
  },

  textInput: {
    borderWidth: 0.1,
    height: 49,
    width: 292,
    backgroundColor: '#D3D3D3',
    borderRadius: 9,
    padding: 9,
  
  },

  input: {
    margin: '0 auto',
  },
  logo: {
    color: '#228B22',
    fontFamily: 'SecularOne',
    fontSize: 40,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  criarEsqueci: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  butao: {
    color: 'black',
    borderWidth: 1,
    backgroundColor: '#D3D3D3',
    padding: 13,
    //justifyContent: 'center',
    //alignitems: 'center',
    textAlign: 'center',
    width: 315,
    fontWeight: 'bold',
  },
  butaoBorda: {
    padding: 11,
  },
});

export default TelaLoginComponent;