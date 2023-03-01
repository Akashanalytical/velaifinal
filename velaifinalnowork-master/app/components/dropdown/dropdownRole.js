import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
export default function DropDownRole() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  console.log(value);
  const [items, setItems] = useState([
    {
      label: "Plumbing",
      value: "Plumbing",
      icon: () => <MaterialIcons name="plumbing" size={24} color="black" />,
    },
    {
      label: "Nurse",
      value: "Nurse",
      icon: () => <FontAwesome name="medkit" size={24} color="black" />,
    },
    {
      label: "React.js",
      value: "react.js",
      icon: () => (
        <MaterialCommunityIcons name="react" size={24} color="black" />
      ),
    },
    {
      label: "Web developer",
      value: "web developer",
      icon: () => <Foundation name="web" size={24} color="black" />,
    },
    {
      label: "Java developer",
      value: "Java developer",
      icon: () => <FontAwesome5 name="java" size={24} color="black" />,
    },
    {
      label: "Painter",
      value: "a",
      icon: () => <MaterialIcons name="carpenter" size={24} color="black" />,
    },
    {
      label: "house keeping",
      value: "b",
      icon: () => <MaterialIcons name="carpenter" size={24} color="black" />,
    },
    {
      label: "Hr ",
      value: "c",
      icon: () => <MaterialIcons name="carpenter" size={24} color="black" />,
    },
    {
      label: "electrian",
      value: "d",
      icon: () => <MaterialIcons name="carpenter" size={24} color="black" />,
    },
    {
      label: "Painter",
      value: "e",
      icon: () => <MaterialIcons name="carpenter" size={24} color="black" />,
    },
    {
      label: "B",
      value: "f",
      icon: () => <MaterialIcons name="carpenter" size={24} color="black" />,
    },
    {
      label: "Painter",
      value: "g",
      icon: () => <MaterialIcons name="carpenter" size={24} color="black" />,
    },
    {
      label: "B",
      value: "h",
      icon: () => <MaterialIcons name="carpenter" size={24} color="black" />,
    },
  ]);
  return (
    <>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        placeholder={<FontAwesome5 name="filter" size={24} color="black" />}
        dropDownContainerStyle={{
          backgroundColor: "#DFDFDF",
        }}
        listMode="MODAL"
        modalTitle="Select an item"
        modalAnimationType="slide"
        modalContentContainerStyle={{
          backgroundColor: "#fff",
          color: "red",
        }}
        modalTitleStyle={{
          fontWeight: "bold",
        }}
        searchable={true}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.drope}
        showArrowIcon={false}
        customItemLabelStyle={{
          fontStyle: "italic",
        }}
        listItemLabelStyle={{
          color: "black",
          fontSize: 20,
        }}
      />
    </>
  );
}
const styles = StyleSheet.create({
  drope: {
    flex: 1,
    flexDirection: "row",
    width: 55,
    backgroundColor: "transparent",
    borderColor: "transparent",
    alignContent: "center",
    justifyContent: "center",
  },
});
