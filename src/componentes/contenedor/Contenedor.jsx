import { NativeBaseProvider, View } from "native-base";
import { StyleSheet } from "react-native";

export const Contenedor = ( { children } ) => {
    return <NativeBaseProvider>
        <View style={ estilos.container }>
            { children }
        </View>
    </NativeBaseProvider>;
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});