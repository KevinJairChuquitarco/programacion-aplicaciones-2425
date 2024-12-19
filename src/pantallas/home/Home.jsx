import { Text, Heading, Button } from "native-base";
import { Contenedor } from "../../componentes/contenedor/contenedor.jsx";
export const Home = ({ navigation }) => {
  return <Contenedor>
    <Heading>
      Aplicaciones Móviles con <Text color="emerald.500">React Native</Text>
    </Heading>
    <Text mt="3" fontWeight="medium">
      Esta aplicación fue desarrollada en la asigntatura de Programación de Aplicaciones de Tercer Nivel
    </Text>
    <Text mt="3" fontWeight="medium">Calculadora IMC</Text>
    <Button py="2" onPress={() => {
      navigation.navigate("CalculadoraIMC");
    }}>
      Ir a Calculadora IMC
    </Button>
    <Button marginTop="3" py="2" onPress={() => {
      navigation.navigate("API");
    }}>
      Ir a API
    </Button>
  </Contenedor>
}