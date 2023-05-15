import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font';



const TelaCadastroComponent = ({navigaton}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [digiteSenhaNovamente, setDigitaSenhaNovamente] = useState('');
   const [loaded] = useFonts ({
    SecularOne: require('./assets/fonte/SecularOne-Regular.ttf')
   });
  if(!loaded){
    return null
  }

  return (
    <View style={estilos.login}>
      <View style={estilos.logo}>
        <Text style={estilos.logo}>ProcuraLitico</Text>
       
      </View>

      <View style={estilos.login}>

      <View style={estilos.input}> 

      
        <Text style = {estilos.texto}>Email</Text>
        
        <TextInput
          style={estilos.textInput}
        
          placeholder=""
          onChangeText={(texto) => setEmail(texto)}
          defaultValue={email}
        />
        
    <Text style = {estilos.texto}>Senha</Text>
        <TextInput
          style={estilos.textInput}
          placeholder=""
          onChangeText={(texto) => setSenha(texto)}
          defaultValue={senha}
        />
<Text style = {estilos.texto}>Digite senha novamente</Text>
      <TextInput
      style={estilos.textInput}
      placeholder=""
      onChangeText={(texto) => setDigitaSenhaNovamente(texto)}
      defaultValue={digiteSenhaNovamente}
      />

      </View>
        <TouchableOpacity style={estilos.butaoBorda} onPress={() => navigaton.navigate('')}>
        <Text style={estilos.butao}>Iniciar Sessão</Text>
        </TouchableOpacity>
      </View>
    </View>
  ); 
};
const estilos = StyleSheet.create({
  login: {
    backgroundColor: 'white',
    flex: 1,
    height: '100vh',
    justifyContent:'center',
    
   
  },

  textInput: {
    borderWidth: 1,
    height: 49,
    width:292,
    backgroundColor: '#D3D3D3',
    borderRadius: 9,
    padding: 9,
    justifyContent:'center'
  },

  input:{
     margin:'0 auto'
  },
  logo: {
    color:'#228B22',
    fontFamily: 'SecularOne' ,
    fontSize: 40,
    justifyContent:'center',
    flexDirection:'row',


  },
  butao: {
    color: 'black',
    borderWidth: 1,
    backgroundColor: '#D3D3D3',
    padding: 13,
    textAlign: 'center',
    width: 315,
     fontWeight: 'bold',
  },
  
  butaoBorda:{
    
 padding: 11, 
  },
    
});
export default TelaCadastroComponent;