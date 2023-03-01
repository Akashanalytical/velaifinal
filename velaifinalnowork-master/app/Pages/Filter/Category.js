//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

// create a component
export default function MyComponent() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items, setItems] = useState([
    {
      label: "Content, Editorial",

      value: "1",
    },
    { label: "Quality Assurance", value: "2" },
    { label: "Food, Beverage", value: "3" },
    { label: "Hospitality", value: "4" },
    { label: "Sciences", value: "5" },
    { label: "Healthcare & Life", value: "6" },
    { label: "IT & Information Security", value: "7" },
    { label: "Media Production &Entertainment", value: "8" },
    { label: "Engineering Hardware& Networks", value: "9" },
    { label: "Construction & SiteEngineering", value: "10" },
    { label: "Research & Development", value: "11" },
    { label: "Procurement & SupplyChain", value: "12" },
    { label: "Project & ProgramManagement", value: "13" },
  ]);

  const [Role, setRole] = useState([
    {
      label: "civil Engineer",

      value: "1",
    },
    { label: "ux desiner", value: "2" },
    { label: "System engineer", value: "3" },
    { label: "Cad designer", value: "4" },
    { label: "React developer", value: "5" },
    { label: "Security", value: "6" },
    { label: "Cyber Security", value: "7" },
    { label: "Teacher", value: "8" },
    { label: "Engineering Hardware& Networks", value: "9" },
    { label: "Construction & SiteEngineering", value: "10" },
    { label: "Research & Development", value: "11" },
    { label: "Procurement & SupplyChain", value: "12" },
    { label: "Project & ProgramManagement", value: "13" },
  ]);
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        placeholder={"Select category"}
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
      <View style={{ marginTop: 40 }}>
        <DropDownPicker
          open={open2}
          value={value2}
          items={Role}
          placeholder={"Select Role"}
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
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setRole}
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
