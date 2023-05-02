import { View ,Text , StyleSheet} from "react-native";
import { Button } from "react-native-paper";

function app(){
   return(
     <View style={styles.fundo}>    
     <Text>PROCURALITICO</Text>
 
     <Button icon={"arrow"} mode="contained" onPress={()=>navigation.navigate("TelaCadastroComponent")}>Criar conta</Button>
     <Button icon={"arrow"} mode="contained" onPress={()=>navigation.navigate("TelaLoginComponent")}>Entra com uma conta</Button>
     <Button icon={"arrow"} mode="contained" onPress={()=> navigation.navigate("TelaNoticiaComponent")}> Entra como visitante </Button>
     </View> 
   )
 }

 const styles = StyleSheet.create({
    conteiner:{
     flex: 1,
     backgroundColor: '#fff',
     justifyContent: 'center',
    }

 })

export default TelaPrincipalComponent