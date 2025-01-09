import { Box, HStack, Avatar, VStack, Text } from "native-base";

export const Card = (props) => {
    return <Box pl="4" pr="5" py="2">
        <HStack alignItems="center" space={3}>
            <Avatar size="48px" source={{uri: props.url }}></Avatar>
            <VStack>
                <Text color="coolGray.800"> {props.nombre} </Text>
                <Text color="coolGray.600"> {props.especie} </Text>
            </VStack>
        </HStack>
    </Box>
}