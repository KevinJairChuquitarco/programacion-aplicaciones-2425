import React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { Item } from "../../componentes/item/item";
import {styles } from "./sqlite.styles";
import { Contenedor } from "../../componentes/contenedor/contenedor";

export const SQLiteScreen = () => {
    return <Contenedor>
        <View style= {styles.contenedor}>
            <Text style={styles.titulo}>Ejemplo SQLite</Text>
            <View style={styles.fila}>
                <TextInput style={styles.entrada}> </TextInput>
            </View>

            <ScrollView style= {styles.areaLista}>
                <View style={styles.contenedorDireccion}>
                    <Text style={styles.tituloSeccion}>Por Hacer</Text>
                    {/* <Item></Item> */}
                </View>

                <View style={styles.contenedorDireccion}>
                    <Text style={styles.tituloSeccion}>Tareas Hechas</Text>
                    {/* <Item></Item> */}
                </View>
            </ScrollView>
        </View>
    </Contenedor>
}