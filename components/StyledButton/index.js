import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = () => {
  return (
    <View style={styles.container}>
      {/* <Text>StyledButton</Text> */}
      <Pressable
        style={styles.button}
        onPress={() => {
          console.warn("You tapped ?");
        }}
      >
        <Text style={styles.text}> Custom Order!</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
