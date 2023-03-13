//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  StatusBar,
  Pressable,
  TextInput,
  Image,
  Search,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  SimpleLineIcons,
  EvilIcons,
  Entypo,
} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

const Item = ({ dur2, loc, per, price, pic, title, dur }) => (
  <View
    style={{
      marginHorizontal: 10,
      marginBottom: 20,
      backgroundColor: "#F2F2F2",
      borderRadius: 10,
      height: "25%",
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.2,
      shadowRadius: 5.62,
      elevation: 8,
      height: 150,
    }}
  >
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
      }}
    >
      <Text
        style={{
          color: "#333",
          fontSize: 18,
          fontWeight: "500",
          marginTop: 10,
        }}
      >
        {title}
      </Text>

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
            width: 100,
            height: 60,
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

    <View
      style={{
        flexDirection: "row",
        width: "57%",
        marginHorizontal: 10,
        marginTop: 10,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          width: 150,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            alignContent: "center",
          }}
        >
          <MaterialCommunityIcons
            name="hand-coin-outline"
            size={27}
            color="black"
          />
          <Text
            style={{
              // marginTop: 3,

              marginLeft: 10,
              fontSize: 18,
              fontWeight: "400",
            }}
          >
            {price}/{per}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            width: 150,
            alignContent: "center",
          }}
        >
          <MaterialCommunityIcons name="timer-sand" size={26} color="black" />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: "400",
            }}
          >
            {dur}/{dur2}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          marginLeft: 3,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            width: 180,
            alignContent: "center",
          }}
        >
          <Ionicons name="location-outline" size={26} color="#333" />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: "400",
            }}
          >
            {loc}
          </Text>
          <View style={{ marginLeft: 10, marginTop: 30 }}>
            <FontAwesome5 name="share-alt" size={34} color="black" />
          </View>
        </View>
      </View>
    </View>
  </View>
);

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
];
import { useSelector } from "react-redux";
// create a component
function Rentalseeker() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [refreshing, setRefreshing] = useState(true);
  const UserID = useSelector((state) => state.ID);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      await fetch(
        `http://192.168.1.12:5000/api/rental_see_call_history/${UserID}`,
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("post result");
          console.log(result);
          setData(result);
          setRefreshing(false);
          // const updated = [...data, ...result["short"]];
          // console.log(updated);
          // // setnewcards();
          // // setData(result["short"]);
          // setData(updated);
          // console.log(data);
          // setpage(page + 1);
          // setloading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <Top /> */}
      {/* tob bar */}
      {/* center */}
      {/* <LinearGradient
        colors={["#fafafa", "#fafafa"]}
        style={{ flex: 1, backgroundColor: "#F2F2F2" }}
      > */}
      <View
        style={{
          //   justifyContent: "center",
          //   alignContent: "center",
          marginVertical: 15,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 20 }}>Saved Products</Text>
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
      {refreshing ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item
              title={item.product_name}
              pic={item.pic}
              price={item.product_fees}
              per={item.product_fees_hour}
              loc={item.location}
              dur={item.Duration}
              dur2={item.Duration2}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
}

export default Rentalseeker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
});
