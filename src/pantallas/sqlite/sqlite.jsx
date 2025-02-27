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
    const [texto, setTexto] = useState('');
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
                    <TextInput 
                        onChangeText={(text)=>setTexto(text)}
                        onSubmitEditing={ async () => {
                                await agregarItem(db, texto);
                                recargarItems();
                                setTexto('');
                            } 
                        }
                        placeholder="Ingresa la tarea"
                        value={texto}
                        style={styles.entrada}
                    /> 
                </View>
                <ScrollView style={styles.areaLista}>
                    <View style={styles.contenedorDireccion}>
                        <Text style={styles.tituloSeccion}>Por Hacer</Text>
                        { itemsPorHacer.map((item)=> (
                            <Item
                            key={item.id}
                            item={item}
                            onPressItem={ async (id) => {
                                await marcarItemCompletado(db, id);
                                recargarItems();
                            }}/>
                        ))}
                    </View>

                    <View style={styles.contenedorDireccion}>
                        <Text style={styles.tituloSeccion}>Tareas Hechas</Text>
                        { itemsCompletados.map( (item)=>(
                            <Item
                                key={item.id}
                                item={item}
                                onPressItem={ async (id) => {
                                    await eliminarItem(db,id);
                                    recargarItems();
                            }}/>
                        ) ) }
                    </View>
                </ScrollView>
            </View>
        </Contenedor>
}