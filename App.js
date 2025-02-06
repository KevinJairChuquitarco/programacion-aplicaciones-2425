import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/pantallas/home/home.jsx";
import { CalculadoraIMC } from "./src/pantallas/calculadoraIMC/calculadoraIMC.jsx";
import { ConsumoAPI } from "./src/pantallas/consumoAPI/consumoAPI.jsx";
import { SQLiteScreen } from "./src/pantallas/sqlite/sqlite.jsx";

const Stack = createNativeStackNavigator();

export default function App(){
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{title:"Inicio"}} name="Home" component={ Home }/>
      <Stack.Screen options={{title:"Calculadora IMC"}} name="CalculadoraIMC" component={ CalculadoraIMC }/>
      <Stack.Screen options={{title:"Rick and Morty"}} name="API" component={ ConsumoAPI }/>
      <Stack.Screen options={{title:"Gestión de Tareas"}} name="SQLiteScreen" component={ SQLiteScreen }/> 
    </Stack.Navigator>
  </NavigationContainer>
}

