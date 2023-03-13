//import liraries
import React, { Component, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
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
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

//Data
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

//flatlist item for the page

// create a component
export default function Rentalproviderpost({ navigation }) {
  const [data, setdata] = useState("");
  const [refreshing, setRefreshing] = useState(true);
  // const [isclick, setisclick] = useState(false);
  const userID = useSelector((state) => state.ID);
  useEffect(() => {
    getuserdata();
  }, []);
  React.useEffect(() => {
    navigation.addListener("tabPress", () => getuserdata());
  }, []);
  const handleRentedProducts = async (paras, paras2) => {
    const body = {};
    body.user_id = paras;
    body.rent_id = paras2;
    console.log(body);
    try {
      await fetch(`http://192.168.1.12:5000/api/rented_products`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.rented === "success") {
            navigation.navigate("history");
          }
        });
    } catch (error) {
      console.log("i at job titile error");
      console.warn(error);
    }
  };
  async function getuserdata() {
    try {
      await fetch(`http://192.168.1.12:5000/api/rent_pro_post_show/${userID}`, {
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
          setdata(result.posts);
          setRefreshing(false);
        });
    } catch (error) {
      console.log("i at job titile error");
      console.warn(error);
    }
  }
  //user
  const Items = ({ date, type, title, pic, post_id, user_id }) => {
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
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("rentalproviderswipe", {
            post_id: post_id,
          })
        }
      >
        <View
          style={{
            height: 120,
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            // borderLeftWidth: 10,
            alignItems: "center",
            width: 350,
            marginBottom: 15,

            borderColor: "#D9D9D9",
            borderRadius: 20,
            borderWidth: 2,
          }}
        >
          <View
            style={{
              width: 50,
              marginTop: 5,
              marginLeft: 10,
            }}
          >
            <Image
              source={{
                uri: pic,
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
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                color: "#333",
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                color: "#333",
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              Product Type : {type}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text
                  style={{
                    color: "#333",
                    fontSize: 15,
                    fontWeight: "600",
                  }}
                >
                  Posted on : {result}
                </Text>
              </View>
              <View
                style={{
                  marginLeft: 20,
                  backgroundColor: "blue",
                  padding: 8,
                  borderRadius: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => handleRentedProducts(user_id, post_id)}
                >
                  <Text style={{ color: "white" }}>Rented</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
            }}
          >
            Rent Product
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 20,
            // alignItems: "center",
            // alignContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Rent")}>
            <LinearGradient
              colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
              style={{
                height: 42,
                width: 320,
                borderRadius: 10,
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              useAngle={45}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "600",
                  marginHorizontal: 10,
                  justifyContent: "center",
                }}
              >
                Add Your first Rental product
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <LinearGradient
              colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
              style={{
                height: 42,
                width: 160,
                borderRadius: 10,
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              useAngle={45}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "600",
                  marginHorizontal: 10,
                  justifyContent: "center",
                }}
              >
                Shorttime Job
              </Text>
            </LinearGradient>
          </TouchableOpacity> */}
        </View>
      </View>
      {/* <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          marginVertical: 30,
        }}
      >
        <Text></Text>
        <Image
          style={{
            height: "50%",
            width: "100%",

            resizeMode: "contain",
          }}
          source={require("../../../images/jobpost.png")}
        />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            Don’t have an any post
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            create your post
          </Text>
        </View>
      </View> */}
      <View style={{ flex: 1, height: "100%" }}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
            }}
          >
            Your Post
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            {refreshing ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={data}
                decelerationRate="fast"
                renderItem={({ item }) => (
                  <Items
                    title={item.product_name}
                    type={item.product_type}
                    date={item.posteddatetime}
                    pic={item.pic}
                    post_id={item.id}
                    user_id={userID}
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
          </View>
        </View>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
