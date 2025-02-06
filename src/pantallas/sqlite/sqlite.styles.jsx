import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        paddingTop: 64
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    },
    fila: {
        flexDirection:'row'
    },
    entrada: {
        borderColor:'#4630eb',
        borderRadius: 4,
        borderWidth: 1,
        flex: 1,
        height: 48,
        margin: 16,
        padding: 8
    },
    areaLista: {
        paddingTop: 16,
        marginBottom: 1,
        flex: 1
    },
    contenedorDireccion: {
        marginTop: 16,
        marginHorizontal:16
    },
    tituloSeccion: {
        fontSize: 18,
        marginBottom: 8
    }
});