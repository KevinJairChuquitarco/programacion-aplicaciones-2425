import { NativeBaseProvider, View, Text, Heading, Button } from "native-base";

export const Home = ( { navigation } ) => {
  return <NativeBaseProvider>
    <View>
      <Heading>
        Aplicaciones Móviles con <Text color="emerald.500">React Native</Text>
      </Heading>
      <Text mt="3" fontWeight="medium">
        Esta aplicación fue desarrollada en la asigntatura de Programación de Aplicaciones de Tercer Nivel
      </Text>
      <Text mt="3" fontWeight="medium">Calculadora IMC</Text>
      <Button py="2" onPress={()=>{
        navigation.navigate("CalculadoraIMC");
      }}>
        Ir a Calculadora IMC
      </Button>
    </View>
  </NativeBaseProvider>
}