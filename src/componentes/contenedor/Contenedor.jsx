import { NativeBaseProvider, ScrollView } from "native-base";
import { EstilosContenedor } from "./contenedor.styles";

export const Contenedor = ( { children } ) => {
    return <NativeBaseProvider>
        <ScrollView style={ EstilosContenedor.container }>
            { children }
        </ScrollView >
    </NativeBaseProvider>;
}

