import { Text, Heading, Button, Image, Center } from "native-base";
import { Contenedor } from "../../componentes/contenedor/contenedor";
export const Home = ({ navigation }) => {
  return <Contenedor>
    <Heading ml="3" mr="3" mt="3" textAlign="center">
      Aplicaciones Móviles con <Text color="emerald.500">React Native</Text>
    </Heading>
    <Center>
      <Image borderRadius={100} source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAOwOYLpGw0-14PtoY8iDROltaB2t1xQRxjQ&s"
      }} alt="Alternate Text" size="xl" />
    </Center>
    <Text ml="2" mr="2" mt="3" fontWeight="medium">
      Kevin Chuquitarco
    </Text>
    <Text ml="2" mr="2" mt="3" fontWeight="medium">
      Esta aplicación fue desarrollada en la asigntatura de Programación de Aplicaciones de Tercer Nivel Periodo Octubre 2024 - Marzo 2025
    </Text>
    <Heading  ml="2" mt={3} mb={3}>
      Calculadora IMC
    </Heading>
    <Center>
      <Image  source={{
        uri: "https://www.corredorespopulares.es/imagenes/miscelanea/imc.jpg"
      }} alt="Alternate Text" size="xl" />
    </Center>
    <Text ml="2" mr="2" mt="3" mb={3} fontWeight="medium">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus aut sunt excepturi quibusdam corporis laborum non ea temporibus soluta, praesentium fugit, a iusto eligendi illo nulla cum et autem!
    </Text>
    <Button mr={12} ml={12} onPress={() => {
      navigation.navigate("CalculadoraIMC");
    }}>
      Ir a Calculadora IMC
    </Button>

    <Heading  ml="2" mt={3} mb={3}>
      Uso HTTP
    </Heading>
    <Center>
      <Image borderRadius={100} source={{
        uri:  "https://www.buscador.com/wp-content/uploads/2020/01/Internet-01-e1584625861229.jpg"
      }} alt="Alternate Text" size="xl" />
    </Center>
    <Text ml="2" mr="2" mt="3" mb={3} fontWeight="medium">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus aut sunt excepturi quibusdam corporis laborum non ea temporibus soluta, praesentium fugit, a iusto eligendi illo nulla cum et autem!
    </Text>
    <Button mr={12} ml={12} onPress={() => {
      navigation.navigate("API");
    }}>
      Ir a API
    </Button>

    <Heading  ml="2" mt={3} mb={3}>
      SQLite
    </Heading>
    <Center>
      <Image  source={{
        uri: "https://api.nuget.org/v3-flatcontainer/sqlite.redist/3.8.4.2/icon"
      }} alt="Alternate Text" size="xl" />
    </Center>
    <Text ml="2" mr="2" mt="3" mb={3} fontWeight="medium">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus aut sunt excepturi quibusdam corporis laborum non ea temporibus soluta, praesentium fugit, a iusto eligendi illo nulla cum et autem!
    </Text>
    <Button mr={12} ml={12} onPress={() => {
      navigation.navigate("SQLiteScreen");
    }}>
      Ir a Crud
    </Button>


  </Contenedor>
}