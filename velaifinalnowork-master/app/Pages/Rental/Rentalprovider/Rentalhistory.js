//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  FlatList,
} from "react-native";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// create a component

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
const Item = ({ product_name, date, pic }) => {
  const returndate = (paras) => {
    const date = new Date(paras);

    // Extract the date and time components from the Date object
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // add 1 to get 1-12 range instead of 0-11
    const day = date.getDate();

    // Construct the readable date string in your desired format
    const readableDate = `${day}/${month}/${year}`;
    return readableDate;
  };
  const result = returndate(date);
  return (
    <View
      style={{
        width: "100%",
        height: 82,
        backgroundColor: "#FFFFFF",
        justifyContent: "space-evenly",
        borderBottomWidth: 1,
        // borderLeftWidth: 10,
        borderColor: "#333",
        borderRadius: 10,
        marginBottom: 10,
        position: "relative",
      }}
    >
      <View style={{ marginLeft: 5 }}>
        {/* <View
          style={{
            width: 50,
            marginTop: 5,
            position: "absolute",
          }}
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={{
              backgroundColor: "purple",
              width: 46,
              height: 46,
              //   marginTop: 3,
              borderRadius: 110,
              resizeMode: "cover",
              // borderColor: "#f6ab03",
              // borderWidth: 1,
            }}
          />
        </View> */}
        <View style={{ width: 130, marginLeft: 55 }}>
          <Text
            style={{
              color: "#333",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            {product_name}
          </Text>
        </View>
        <View style={{ position: "absolute", marginLeft: 300 }}>
          <View
            style={{
              marginTop: 5,
              //   position: "absolute",
            }}
          >
            <Image
              source={{
                uri: pic,
              }}
              style={{
                backgroundColor: "purple",
                width: 50,
                height: 46,
                //   marginTop: 3,
                borderRadius: 7,
                borderColor: "#E5C07B",
                borderWidth: 2,
                resizeMode: "cover",

                // borderColor: "#f6ab03",
                // borderWidth: 1,
              }}
            />
          </View>
        </View>

        <Text
          style={{
            color: "#707070",
            fontSize: 14,
            fontWeight: "500",
            marginLeft: 55,
          }}
        >
          Rented on {result}
        </Text>
      </View>
    </View>
  );
};
function Rentalproducthistory({ navigation }) {
  const [isclick, setIsclick] = useState(false);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(true);
  const [data, setData] = useState("");
  const userID = useSelector((state) => state.ID);
  useEffect(() => {
    getuserdata();
  }, []);
  React.useEffect(() => {
    navigation.addListener("tabPress", () => getuserdata());
  }, []);
  async function getuserdata() {
    try {
      await fetch(`http://192.168.1.12:5000/api/rented_products/${userID}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setData(result.rented);
          setRefreshing(false);
        });
    } catch (error) {
      console.log("i at job titile error");
      console.warn(error);
    }
  }
  console.log(isclick);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* tob bar */}
      <View style={{ flex: 1 }}>
        <View
          style={{
            //   justifyContent: "center",
            //   alignContent: "center",
            marginVertical: 10,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 20 }}>History </Text>
        </View>

        <View
          style={{
            width: 280,
            height: 35,
            borderWidth: 1,
            // paddingLeft: 20,
            // margin: 5,

            justifyContent: "space-evenly",
            flexDirection: "row",
            borderRadius: 20,
            // marginLeft: 200,
            borderColor: "#707070",
            backgroundColor: "#fffff",
            marginHorizontal: 55,
            marginVertical: 15,
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
        <SafeAreaView style={styles.containers}>
          {refreshing ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Item
                  product_name={item.product_name}
                  date={item.renteddatetime}
                  pic={item.pic}
                />
              )}
              keyExtractor={(item) => item.id}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={getuserdata}
                />
              }
            />
          )}
        </SafeAreaView>
      </View>
    </View>
  );
}
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "flex-end",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  containers: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  leftSide: {
    flex: 0.5,
  },
  rightContainer: {
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});

//make this component available to the app
export default Rentalproducthistory;
