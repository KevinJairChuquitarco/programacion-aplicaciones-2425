import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/pantallas/home/home.jsx";
import { CalculadoraIMC } from "./src/pantallas/calculadoraIMC/calculadoraIMC.jsx";
import { ConsumoAPI } from "./src/pantallas/consumoAPI/consumoAPI.jsx";

const Stack = createNativeStackNavigator();

export default function App(){
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ Home }/>
      <Stack.Screen name="CalculadoraIMC" component={ CalculadoraIMC }/>
      <Stack.Screen name="API" component={ ConsumoAPI }/> 
    </Stack.Navigator>
  </NavigationContainer>
}

