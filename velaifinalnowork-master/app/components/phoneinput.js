import { View, Text } from "react-native";
import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

export default function Phoneinput() {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <PhoneInput
        defaultValue={value}
        defaultCode="IN"
        containerStyle={{
          width: "100%",
          height: 200,
          backgroundColor: "#FFC629",
        }}
        textContainerStyle={{
          backgroundColor: "white",
          height: 70,
          marginVertical: 30,
          borderRadius: 10,
          marginHorizontal: 10,
          padding: 10,
        }}
        flagButtonStyle={{
          backgroundColor: "white",
          marginHorizontal: 10,
          marginVertical: 30,
          height: 70,
          borderRadius: 10,
        }}
        autoFocus
      />
    </View>
  );
}
