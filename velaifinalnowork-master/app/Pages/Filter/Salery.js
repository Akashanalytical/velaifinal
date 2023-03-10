//import liraries
import React, { Component, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { S_FILTER } from "../../../App";
// import { useDispatch } from "react-redux";

// create a component
export default function Salery() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const { state1, dispatch1 } = useContext(S_FILTER);
  const [items, setItems] = useState([
    {
      label: "0-1lakhs",

      value: "0-1lakhs",
    },
    { label: "1-5 lakhs", value: "1-5 lakhs" },
    { label: "5-10lakhs", value: "5-10lakhs" },
    { label: "daily payment", value: "daily payment" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        placeholder={"Select Package"}
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
        // multiple={true}
        showTickIcon={true}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{ width: 250 }}
        showArrowIcon={true}
        customItemLabelStyle={{
          fontStyle: "italic",
        }}
        onChangeValue={(value) => {
          console.log("Im at the state chnge");
          console.log(value);
          dispatch1({ type: "SET_SALARY", payload: value });
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
