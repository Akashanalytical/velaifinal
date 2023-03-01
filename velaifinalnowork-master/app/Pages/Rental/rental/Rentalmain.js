import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimension,
  FlatList,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import Maincategory from "../../../components/Maincategory/Maincategory";
// import Location from "./Location";
// import MyComponent from "./Category";
// import Workmode from "./Workmode";
// import Duration from "./Duration";
// import Salery from "./Salery";
// import Education from "./Education";
// import Experiance from "./Experiance";
// import Company from "./ComapanySearch";
// import Post from "./Post";

const listTab = [
  {
    status: "Tools",

    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("./rentimages/support.png")}
      />
    ),
  },
  {
    status: "Vehicles",

    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("./rentimages/car.png")}
      />
    ),
  },
  {
    status: "Cloths",
    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("./rentimages/t-shirt.png")}
      />
    ),
  },
  {
    status: "Electronics",
    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("./rentimages/responsive-design.png")}
      />
    ),
  },
  {
    status: "Kitchen Tools",
    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("./rentimages/kitchen-tool.png")}
      />
    ),
  },
  {
    status: "Furniture",
    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("./rentimages/armchair.png")}
      />
    ),
  },
  {
    status: "Makeup kit",
    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("./rentimages/makeup.png")}
      />
    ),
  },
  {
    status: "Company",
    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("./rentimages/building.png")}
      />
    ),
  },
  {
    status: "Posted by",
    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("./rentimages/car.png")}
      />
    ),
  },
  {
    status: "Poste by",
    icon: (
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("./rentimages/car.png")}
      />
    ),
  },
];

// Linking content
const data = [
  {
    name: <Maincategory />,
    text: "This is my homepage. Here I welcome you to my website and try me best to make a good impression. I tell you about the services I provide and encourage you to venture into my site.",
    status: "Tools",
  },
  {
    name: "<MyComponent />",
    text: "This is my homepage. Here I welcome you to my website and try me best to make a good impression. I tell you about the services I provide and encourage you to venture into my site.",
    status: "Vehicles",
  },

  {
    name: "<Duration />,",
    text: "Here I go into details about myself and my business, including the services we provide, how we started and our overall ethos.",
    status: "Cloths",
  },
  {
    name: "<Workmode />",
    text: "Here we give you information on how to contact us for business discussions and possible collaborations.",
    status: "Electronics",
  },
  {
    name: "<Salery />",
    text: "Here we give you information on how to contact us for business discussions and possible collaborations.",
    status: "Kitchen Tools",
  },
  {
    name: "<Education />",
    text: "Here we give you information on how to contact us for business discussions and possible collaborations.",
    status: "Furniture",
  },
  {
    name: "<Experiance />",
    text: "This is my homepage. Here I welcome you to my website and try me best to make a good impression. I tell you about the services I provide and encourage you to venture into my site.",
    status: "Makeup kit",
  },
  {
    name: "<Company />",

    text: "work",
    status: "Company",
  },
  {
    name: "<Post />",
    text: "Here we give you information on how to contact us for business discussions and possible collaborations.",
    status: "Posted by",
  },
  {
    name: "<Post />",
    text: "Here we give you information on how to contact us for business discussions and possible collaborations.",
    status: "Poste by",
  },
];

export default function Rental(navigation) {
  const [status, setStatus] = useState("location");
  const [dataList, setDataList] = useState([
    ...data.filter((e) => e.status === "location"),
  ]);

  const setStatusFilter = (status) => {
    if (status !== "location") {
      setDataList([...data.filter((e) => e.status === status)]);
    } else {
      setDataList([...data.filter((e) => e.status === "location")]);
    }

    setStatus(status);
  };
  return (
    <>
      <StatusBar style={"auto"} />
      <View style={styles.container}>
        <View style={styles.listTab}>
          <ScrollView>
            {listTab.map((e) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.btnTab,
                    status === e.status && styles.btnTabActive,
                  ]}
                  onPress={() => setStatusFilter(e.status)}
                >
                  <Text
                    style={[
                      styles.iconTab,
                      status === e.status && styles.textTabActive,
                    ]}
                  >
                    {e.icon}
                  </Text>
                  <Text style={styles.textTab}> {e.status}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <FlatList
          data={dataList}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderItem}
        />
      </View>
    </>
  );
}
const renderItem = ({ item, index, navigation }) => {
  return (
    <View key={index} style={styles.itemContainer}>
      <Text>{item.name}</Text>

      {/* <Text>{item.text}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,

    justifyContent: "center",
  },
  listTab: {
    borderColor: "#f5f5f5",
    borderWidth: 2,
    backgroundColor: "#1E5966",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 5,
    borderRadius: 20,
    // backgroundColor: "red",
  },
  btnTab: {
    // width: 0,
    // flexDirection: "column",
    marginBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  textTab: {
    fontSize: 12,
    color: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  iconTab: {
    height: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  btnTabActive: {
    backgroundColor: "#333",
    height: "10%",
    borderRadius: 10,
  },
  textTabActive: {
    color: "#333",
  },
  itemContainer: {
    paddingVertical: 15,
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 10,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
});
