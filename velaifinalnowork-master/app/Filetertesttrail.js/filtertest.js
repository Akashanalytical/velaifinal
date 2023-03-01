import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Button,
  FlatList,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { Checkbox, RadioButton } from "react-native-paper";

const App = ({ route, navigation }) => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const [checked7, setChecked7] = React.useState(false);
  const [checked8, setChecked8] = React.useState(false);
  const [checked9, setChecked9] = React.useState(false);
  const [checked10, setChecked10] = React.useState(false);
  const [checked11, setChecked11] = React.useState(false);
  const [checked12, setChecked12] = React.useState(false);
  const [checked13, setChecked13] = React.useState(false);
  const [checked14, setChecked14] = React.useState(false);
  const [checked15, setChecked15] = React.useState(false);
  const [checked16, setChecked16] = React.useState(false);
  const [checked17, setChecked17] = React.useState(false);
  const [checked18, setChecked18] = React.useState(false);
  const [checked19, setChecked19] = React.useState(false);
  const [checked20, setChecked20] = React.useState(false);
  const [checked21, setChecked21] = React.useState(false);
  const [checked22, setChecked22] = React.useState(false);

  const [radioChecked, setRadioChecked] = React.useState("first");
  // All your menu options go here.
  const [menuItems, setMenuItems] = React.useState([
    { id: "1", name: "Sort" },
    { id: "2", name: "Cuisines" },
    { id: "3", name: "Offers & More" },
    { id: "4", name: "Ideal for Viewing Distance dsfhj fdsfjj " },
    { id: "5", name: "Age" },
    { id: "6", name: "Price" },
    { id: "7", name: "Age" },
    { id: "8", name: "Price" },
    { id: "9", name: "Age" },
    { id: "10", name: "Price" },
    { id: "11", name: "Age" },
    { id: "12", name: "Price" },
    { id: "13", name: "Age" },
    { id: "14", name: "Price" },
    { id: "15", name: "Age" },
    { id: "16", name: "Price" },
    { id: "17", name: "Test" },
    { id: "18", name: "last" },
  ]);
  // this holds the keys of the menuItems for the view to know which category is currently being rendered.
  const [selectedItem, setSelectedItem] = React.useState("1");
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            marginRight: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Entypo
              name={"cross"}
              style={{ marginRight: 12, marginLeft: 5 }}
              size={30}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
            Sort/Filter
          </Text>
        </View>
        <View style={{ marginRight: 15, marginLeft: 15, paddingVertical: 5 }}>
          <TouchableOpacity onPress={() => alert("Clear All Pressed")}>
            <Text style={{ color: "red", fontWeight: "bold" }}>CLEAR ALL</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.menuColumn}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {menuItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => setSelectedItem(item.id)}
                  style={[
                    styles.menuItem,
                    item.id === selectedItem ? styles.selectedMenuItem : null,
                  ]}
                >
                  <Text numberOfLines={2} style={styles.menuItemText}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.settingsColumn}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {selectedItem === "1" && (
              <View style={styles.settingsView}>
                <Text style={{ textTransform: "uppercase" }}>
                  Show Restaurants By
                </Text>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton
                    value="first"
                    status={radioChecked === "first" ? "checked" : "unchecked"}
                    onPress={() => setRadioChecked("first")}
                  />
                  <Text>Relevance</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton
                    value="second"
                    status={radioChecked === "second" ? "checked" : "unchecked"}
                    onPress={() => setRadioChecked("second")}
                  />
                  <Text>Delivery Time</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton
                    value="third"
                    status={radioChecked === "third" ? "checked" : "unchecked"}
                    onPress={() => setRadioChecked("third")}
                  />
                  <Text>Rating</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton
                    value="fourth"
                    status={radioChecked === "fourth" ? "checked" : "unchecked"}
                    onPress={() => setRadioChecked("fourth")}
                  />
                  <Text>Cost: Low to High</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton
                    value="fifth"
                    status={radioChecked === "fifth" ? "checked" : "unchecked"}
                    onPress={() => setRadioChecked("fifth")}
                  />
                  <Text>Cost: High to Low</Text>
                </View>
              </View>
            )}
            {selectedItem === "2" && (
              <View style={styles.settingsView}>
                <Text>CUISINES</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked1 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked1(!checked1);
                    }}
                  />
                  <Text>American</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked2 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked2(!checked2);
                    }}
                  />
                  <Text>Andhra</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked3 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked3(!checked3);
                    }}
                  />
                  <Text>Arabian</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked4 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked4(!checked4);
                    }}
                  />
                  <Text>Asian</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked5 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked5(!checked5);
                    }}
                  />
                  <Text>Barbecue</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked6 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked6(!checked6);
                    }}
                  />
                  <Text>Beverages</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked7 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked7(!checked7);
                    }}
                  />
                  <Text>Biryani</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked8 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked8(!checked8);
                    }}
                  />
                  <Text>Chinese</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked9 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked9(!checked9);
                    }}
                  />
                  <Text>Continental</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked10 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked10(!checked10);
                    }}
                  />
                  <Text>Combo</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked11 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked11(!checked11);
                    }}
                  />
                  <Text>Desserts</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked12 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked12(!checked12);
                    }}
                  />
                  <Text>Europian</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked13 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked13(!checked13);
                    }}
                  />
                  <Text>Fast Food</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked14 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked14(!checked14);
                    }}
                  />
                  <Text>Grill</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked15 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked15(!checked15);
                    }}
                  />
                  <Text>Healthy Food</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked16 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked16(!checked16);
                    }}
                  />
                  <Text>Hydrabadi</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked17 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked17(!checked17);
                    }}
                  />
                  <Text>Ice Cream</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked18 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked18(!checked18);
                    }}
                  />
                  <Text>Indian</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked19 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked19(!checked19);
                    }}
                  />
                  <Text>Italian</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked20 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked20(!checked20);
                    }}
                  />
                  <Text>Juices</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked21 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked21(!checked21);
                    }}
                  />
                  <Text>Kebabs</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Checkbox
                    status={checked22 ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked22(!checked22);
                    }}
                  />
                  <Text>Maxican</Text>
                </View>
              </View>
            )}
            {selectedItem === "3" && (
              <View style={styles.settingsView}>
                <Text>Anything can go here</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {/* <View style={{ marginRight: 15, marginLeft: 15, paddingVertical: 5, flex: 0.5 }}>
                    <Button title="Clear Filters" />
                </View> */}
        <View
          style={{
            marginRight: 15,
            marginLeft: 15,
            paddingVertical: 5,
            flex: 0.5,
          }}
        >
          <TouchableOpacity
            style={styles.btnDRed}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              APPLY
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    flex: 1,
  },
  menuColumn: {
    flex: 0.35,
    flexDirection: "column",
    backgroundColor: "#dedede",
  },
  menuItem: {
    // flex: 1,
    flex: 0,
    //height:hp(8.5),
    justifyContent: "center",
    alignItems: "center",
    // alignItems: 'flex-start',
    // borderWidth:1,
  },
  selectedMenuItem: {
    backgroundColor: "white",
    color: "#162da2",
  },

  menuItemText: {
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "flex-start",
    fontSize: 15,
    fontWeight: "normal",
    paddingVertical: 16,
  },
  // value column -right
  settingsColumn: {
    flex: 0.65,
    padding: 10,
    backgroundColor: "white",
  },
  btnDRed: {
    paddingVertical: 7,
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: "#ff0000",
  },
});

export default App;
