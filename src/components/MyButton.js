import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MyButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
