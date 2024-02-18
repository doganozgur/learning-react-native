import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function PizzaTranslator() {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={(newText) => setText(newText)}
      />

      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
    </View>
  );
}
