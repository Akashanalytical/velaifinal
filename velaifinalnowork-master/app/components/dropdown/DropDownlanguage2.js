import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { doSomethingWithInput, changeLanguage } from "../../util/util.js";
export default function DropDownLanguage2(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const calchangeLang = () => {
    doSomethingWithInput(value);
    changeLanguage(value);
  };

  if (!value) {
  }

  const [items, setItems] = useState([
    {
      label: "English",
      value: "en",
      icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>EN </Text>,
    },
    {
      label: "தமிழ்",
      value: "ta",
      icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>TN </Text>,
    },
    {
      label: "ಕೆನಡಾ",
      value: "ka",
      icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>KA </Text>,
    },
    {
      label: "తెలుగు",
      value: "te",
      icon: () => <Text style={{ fontSize: 17, fontWeight: "800" }}>TE </Text>,
    },
    {
      label: "മലയാളം",
      value: "ma",
      icon: () => <Text style={{ fontSize: 14, fontWeight: "800" }}>MA </Text>,
    },
  ]);
  return (
    <>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        placeholder={
          <MaterialCommunityIcons name="google-earth" size={24} color="black" />
        }
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
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.drope}
        showArrowIcon={false}
        onChangeValue={calchangeLang}
        customItemLabelStyle={{
          fontStyle: "italic",
        }}
        listItemLabelStyle={{
          color: "black",
        }}
      />
    </>
  );
}
const styles = StyleSheet.create({
  drope: {
    flex: 1,
    height: 30,
    width: 57,
    backgroundColor: "transparent",
    borderColor: "transparent",
    alignContent: "center",
    justifyContent: "center",
  },
});
