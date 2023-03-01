//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

// create a component
export default function Experiance() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    {
      label: "0-1 year",

      value: "1",
    },
    { label: "1-5 year", value: "2" },
    { label: "5-10", value: "3" },
    { label: "Fresher", value: "4" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        placeholder={"Select Experiance"}
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
      />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});

//make this component available to the app
