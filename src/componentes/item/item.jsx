import React from "react";
import { styles } from "./item.styles";

import { TouchableOpacity, Text } from "react-native";

export const Item = ({ item, onPressItem }) => {
    const { id, done, value } = item;
    return <TouchableOpacity
        onPress={ () => onPressItem && onPressItem(id) }
        style={[styles.item, done && styles.itemDone]}>
        <Text style={[styles.itemText, done && styles.itemTextDone]}>
            {value}
        </Text>
    </TouchableOpacity>
}