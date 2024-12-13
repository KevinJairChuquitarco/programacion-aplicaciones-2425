import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
import { NativeBaseProvider, Box, Input } from 'native-base';

export const CalculadoraIMC = () => {

  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>Caculadora IMC</Text>
        <Image
          style={styles.imagen}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        ></Image>
        <Box alignItems="center">
          <Input ></Input>
        </Box>
        <TextInput
          placeholder='Ingrese su peso (Kg)'
          keyboardType='numeric'
          onChangeText={(value) => setPeso(value)}
        ></TextInput>
        <TextInput
          placeholder='Ingrese su altura (m)'
          keyboardType='numeric'
          onChangeText={(value) => setAltura(value)}
        ></TextInput>
        <Button
          title='Calcular'
          onPress={() => Alert.alert("Alerta", calcularNivelPeso(peso, altura))}
        ></Button>
      </View>
    </NativeBaseProvider>
  );
}

const calcularIMC = (peso, altura) => {
  let IMC = peso / (altura * altura);
  console.log(IMC);
  return IMC.toFixed(2);
}

const calcularNivelPeso = (peso, altura) => {
  let IMC = calcularIMC(peso, altura);
  let respuesta = "";
  if (IMC < 18.5) {
    respuesta = "Su IMC es " + IMC + " Peso inferior al normal";
  }
  if (IMC >= 18.5 && IMC <= 24.9) {
    respuesta = "Su IMC es " + IMC + " Normal";
  }
  if (IMC >= 25 && IMC <= 29.9) {
    respuesta = "Su IMC es " + IMC + " Peso superior al normal";
  }
  if (IMC >= 30) {
    respuesta = "Su IMC es " + IMC + " Obesidad";
  }
  return respuesta;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 100,
    height: 100
  }
});
