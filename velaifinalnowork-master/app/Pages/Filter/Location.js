import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
export default function Location(props) {
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);

  const [items1, setItems1] = useState([
    {
      label: "India",
      value: "en",
      //   icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>EN </Text>,
    },
    {
      label: "Afghanistan",

      value: "ta",
      //   icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>TN </Text>,
    },
    {
      label: "Albania",
      value: "ka",
      //   icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>KA </Text>,
    },
    {
      label: "AlgeriaAzerbaijan",
      value: "te",
      //   icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>TE </Text>,
    },
    {
      label: "England",
      value: "ma",
      //   icon: () => <Text style={{ fontSize: 14, fontWeight: "800" }}>MA </Text>,
    },
  ]);

  const [items2, setItems2] = useState([
    {
      label: "Tamil nadu",
      value: "en",
      //   icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>EN </Text>,
    },
    {
      label: "kerala",
      value: "ta",
      //   icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>TN </Text>,
    },
    {
      label: "karnataka",
      value: "ka",
      //   icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>KA </Text>,
    },
    {
      label: "delhi",
      value: "te",
      //   icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>TE </Text>,
    },
    {
      label: "goa",
      value: "ma",
      //   icon: () => <Text style={{ fontSize: 14, fontWeight: "800" }}>MA </Text>,
    },
  ]);
  const [items3, setItems3] = useState([
    {
      label: "chennai",
      value: "en",
      //   icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>EN </Text>,
    },
    {
      label: "Erode",
      value: "ta",
      //   icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>TN </Text>,
    },
    {
      label: "selam",
      value: "ka",
      //   icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>KA </Text>,
    },
    {
      label: "pudukottai",
      value: "te",
      //   icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>TE </Text>,
    },
    {
      label: "vilupuram",
      value: "ma",
      //   icon: () => <Text style={{ fontSize: 14, fontWeight: "800" }}>MA </Text>,
    },
  ]);
  return (
    <View
      View
      style={{
        justifyContent: "space-between",
      }}
    >
      <View style={{ margin: 30 }}>
        <DropDownPicker
          open={open1}
          value={value1}
          items={items1}
          placeholder={"Enter Country"}
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
          mode="BADGE"
          setOpen={setOpen1}
          setValue={setValue1}
          setItems={setItems1}
          style={styles.drope}
          showArrowIcon={true}
          customItemLabelStyle={{
            fontStyle: "italic",
          }}
          listItemLabelStyle={{
            color: "black",
          }}
        />
      </View>
      <View style={{ margin: 30 }}>
        <DropDownPicker
          open={open2}
          value={value2}
          items={items2}
          placeholder={"Enter State"}
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
          mode="BADGE"
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems2}
          style={styles.drope}
          showArrowIcon={true}
          customItemLabelStyle={{
            fontStyle: "italic",
          }}
          listItemLabelStyle={{
            color: "black",
          }}
        />
      </View>
      <View style={{ margin: 30 }}>
        <DropDownPicker
          open={open3}
          value={value3}
          items={items3}
          placeholder={"Enter District"}
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
          mode="BADGE"
          setOpen={setOpen3}
          setValue={setValue3}
          setItems={setItems3}
          style={styles.drope}
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
const styles = StyleSheet.create({
  drope: {
    flex: 1,
    height: 30,
    width: 200,
    backgroundColor: "transparent",
    borderColor: "#333",
    alignContent: "center",
    justifyContent: "center",
  },
});
