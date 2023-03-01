import { View, Text } from "react-native";
import React from "react";
import * as IMEI from "react-native-imei";
import { Button } from "react-native-paper";
// const IMEI = require("react-native-imei");

export default function GetImei() {
  const handlePress = () => {
    IMEI.getImei().then((imeiList) => {
      console.log(imeiList);
    });
  };
  return (
    <View>
      <Text>GetImei</Text>
      <Button title="GEt imei of the phone" onPress={handlePress}>
        GET IMEI
      </Button>
    </View>
  );
}
