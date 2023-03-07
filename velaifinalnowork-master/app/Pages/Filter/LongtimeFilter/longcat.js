//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useContext } from "react";
import { L_FILTER } from "../../../../App";
// create a component
export default function MyComponent1() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const { state2, dispatch2 } = useContext(L_FILTER);
  //   console.log(state1);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  // const { state1, dispatch1 } = useContext(S_FILTER);

  const [items, setItems] = useState([
    {
      label: "Content, Editorial",

      value: "Content, Editorial",
    },
    { label: "Quality Assurance", value: "Quality Assurance" },
    { label: "Food, Beverage", value: "Food, Beverage" },
    { label: "Hospitality", value: "Hospitality" },
    { label: "Sciences", value: "Sciences" },
    { label: "Healthcare & Life", value: "Healthcare & Life" },
    { label: "IT & Information Security", value: "IT & Information Security" },
    // { label: "Media Production &Entertainment", value: "8" },
    // { label: "Engineering Hardware& Networks", value: "9" },
    // { label: "Construction & SiteEngineering", value: "10" },
    // { label: "Research & Development", value: "11" },
    // { label: "Procurement & SupplyChain", value: "12" },
    // { label: "Project & ProgramManagement", value: "13" },
  ]);

  const [Role, setRole] = useState([
    {
      label: "civil Engineer",

      value: "civil Engineer",
    },
    { label: "ux desiner", value: "ux desiner" },
    { label: "System engineer", value: "System engineer" },
    { label: "Cad designer", value: "Cad designer" },
    { label: "React developer", value: "React developer" },
    { label: "Security", value: "Security" },
    { label: "Cyber Security", value: "Cyber Security" },
    { label: "Teacher", value: "Cyber Security" },
    // { label: "Engineering Hardware& Networks", value: "9" },
    // { label: "Construction & SiteEngineering", value: "10" },
    // { label: "Research & Development", value: "11" },
    // { label: "Procurement & SupplyChain", value: "12" },
    // { label: "Project & ProgramManagement", value: "13" },
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
        onChangeValue={(value) => {
          console.log("Im at the state chnge");
          console.log(value);
          dispatch2({ type: "SET_JOBTITLE_long", payload: value });
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
        listItemLabelStyle={{
          color: "black",
        }}
      />
      <View style={{ marginTop: 40 }}>
        {/* <DropDownPicker
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
          // multiple={true}
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
        /> */}
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
