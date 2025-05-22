import React from "react";
import { Text } from "react-native";

const MyText = ({ children }) => {
  return <Text>{children}</Text>; // ← must return valid React element
};

export default MyText;
