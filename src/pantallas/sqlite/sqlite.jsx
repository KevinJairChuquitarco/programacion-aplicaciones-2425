import React, { useState, useCallback, useEffect } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { Item } from "../../componentes/item/item";
import { styles } from "./sqlite.styles";
import { Contenedor } from "../../componentes/contenedor/contenedor";
import { agregarItem } from "../../servicios/database";
import { marcarItemCompletado } from "../../servicios/database";
import { eliminarItem } from "../../servicios/database";
import { useSQLiteContext } from "expo-sqlite";

export const SQLiteScreen = () => {
    const db = useSQLiteContext();
    const [text, setTexto] = useState('');
    const [itemsPorHacer, setItemsPorHacer] = useState([]);
    const [itemsCompletados, setItemsCompletados] = useState([]);

    const recargarItems = useCallback(() => {
        async function recargar() {
            await db.withExclusiveTransactionAsync(async () => {
                setItemsPorHacer(await db.getAllAsync('SELECT *FROM items WHERE done = ?', false));
                setItemsCompletados(await db.getAllAsync('SELECT *FROM items WHERE done = ?', true));
            })
        }
        recargar();
    }, [db]);

    useEffect(() => {
        recargarItems();
    }, [])

    return <Contenedor>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Ejemplo SQLite</Text>
                <View style={styles.fila}>
                    <TextInput style={styles.entrada}> </TextInput>
                </View>
                <ScrollView style={styles.areaLista}>
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