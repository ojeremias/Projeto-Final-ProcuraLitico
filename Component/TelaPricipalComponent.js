import { View , StyleSheet} from "react-native";
import { Button ,Text} from "react-native-paper";


const TelaPrincipalComponent =()=>{
    return(
    <View style ={estilo.conteiner}>    
    <Text>PROCURALITICO</Text>

    <Button icon={"arrow"} mode="contained" onPress={()=>navigation.navigate("TelaCadastroComponent")}>Criar conta</Button>
    <Button icon={"arrow"} mode="contained" onPress={()=>navigation.navigate("TelaLoginComponent")}>Entra com uma conta</Button>
    <Button icon={"arrow"} mode="contained" onPress={()=> navigation.navigate("TelaNoticiaComponent")}> Entra como visitante </Button>
    </View>
 )
}

 const estilo = StyleSheet.create({
    conteiner:{
     flex: 1,
     backgroundColor: '#fff',
     justifyContent: 'center',
    }

 })

export default TelaPrincipalComponent