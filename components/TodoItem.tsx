import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TodoItemProps = {
    item: {
        text: string,
        key: string
    },
    pressHandler: (key: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10
    }
})

export default TodoItem;