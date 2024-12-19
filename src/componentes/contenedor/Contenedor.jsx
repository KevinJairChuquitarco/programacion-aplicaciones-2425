import { NativeBaseProvider, View } from "native-base";
import { EstilosContenedor } from "./contenedor.styles";

export const Contenedor = ( { children } ) => {
    return <NativeBaseProvider>
        <View style={ EstilosContenedor.container }>
            { children }
        </View>
    </NativeBaseProvider>;
}

