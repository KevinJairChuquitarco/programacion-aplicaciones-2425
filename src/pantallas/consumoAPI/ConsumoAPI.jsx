import React, {useEffect, useState} from "react";
import { Text, Box } from "native-base";
import { ActivityIndicator, FlatList } from "react-native";
import { Contenedor } from "../../componentes/contenedor/contenedor";
import { Card } from "../../componentes/card/card";

export const ConsumoAPI = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getPersonajes = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPersonajes();
    }, []);

    return <Contenedor>
        <Box bgColor="white">
            { isLoading ? (
                <ActivityIndicator/>
            ) : (
                <FlatList 
                    data={data}
                    keyExtractor={ ({id}) => id }
                    renderItem={({item})=>(
                        <Card url={item.image} 
                        nombre={item.name} 
                        especie={item.species}/>
                    )}
                />
            )
            }
        </Box>
    </Contenedor>;
}