//import liraries
import React, { Component, useState } from "react";
import { TextInput } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

// create a component
export default function Company() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [search, setSearch] = useState("");

  //   const [items, setItems] = useState([
  //     {
  //       label: "0-1 year",

  //       value: "1",
  //     },
  //     { label: "1-5 year", value: "2" },
  //     { label: "5-10", value: "3" },
  //     { label: "Permanent", value: "4" },
  //   ]);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 270,
          height: 35,
          borderWidth: 1,
          // paddingLeft: 20,
          // margin: 5,

          justifyContent: "space-evenly",
          flexDirection: "row",
          borderRadius: 20,
          marginLeft: -11,
          borderColor: "#707070",
          backgroundColor: "#fffff",
          //   marginHorizontal: 55,
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <EvilIcons name="search" size={24} color="#707070" />
        </View>
        <TextInput
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search here"
          style={{ marginLeft: 10 }}
        />
        <View
          style={{
            marginLeft: 130,
            marginTop: 5,
          }}
        >
          <FontAwesome name="microphone" size={24} color="#707070" />
        </View>
      </View>
      {/* <DropDownPicker
        open={open}
        value={value}
        items={items}
        placeholder={"Select Duration"}
        dropDownContainerStyle={{
          backgroundColor: "#DFDFDF",
        }}
        listMode="MODAL"
        modalTitle="Select an item"
        modalAnimationType="slide"
        modalContentContainerStyle={{
          backgroundColor: "#fff",
        }}
        modalTitleStyle={{
          fontWeight: "bold",
        }}
        searchable={true}
        mode="BADGE"
        categorySelectable={true}
        closeAfterSelecting={true}
        multiple={true}
        showTickIcon={true}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{ width: 250 }}
        showArrowIcon={true}
        customItemLabelStyle={{
          fontStyle: "italic",
        }}
        listItemLabelStyle={{
          color: "black",
        }}
      /> */}
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
