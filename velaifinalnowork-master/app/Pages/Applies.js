//import liraries
import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Pressable,
  SafeAreaView,
  RefreshControl,
  ActivityIndicator,
  TextInput,
  Search,
  Alert,
} from "react-native";

import Top from "../components/Topcontainer";
import { Ionicons } from "@expo/vector-icons";
import {
  MaterialCommunityIcons,
  FontAwesome,
  SimpleLineIcons,
  EvilIcons,
} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Top2 from "../components/Topcontainer2";
const Items = ({ title, sal, per, time, loc, Dis, name, short }) => (
  <View style={{ flex: 1, marginBottom: 20, marginTop: 10 }}>
    <View
      style={{
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        height: "100%",
        width: "90%",
        marginLeft: "5%",
        justifyContent: "center",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5.62,
        elevation: 8,
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
        <FontAwesome name="share-alt" size={34} color="#333" />
      </View>

      <Text
        style={{
          color: "#333",
          fontSize: 14,
          fontWeight: "400",
          marginTop: 10,

          marginHorizontal: 10,
        }}
      >
        Posted By: {name}
      </Text>

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
            <FontAwesome name="rupee" size={22} color="#333" />
            <Text
              style={{
                // marginTop: 3,

                marginLeft: 10,
                fontSize: 13,
                fontWeight: "400",
              }}
            >
              {sal}/{per}
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
            <MaterialCommunityIcons name="timer-sand" size={24} color="#333" />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 13,
                fontWeight: "400",
              }}
            >
              {time}
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
            <Ionicons name="location-outline" size={24} color="#333" />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 13,
                fontWeight: "400",
              }}
            >
              {loc}
            </Text>
          </View>
          <View
            style={{
              alignContent: "center",

              flexDirection: "row",
              marginBottom: 10,
              width: 180,
            }}
          >
            <MaterialCommunityIcons
              name="map-marker-distance"
              size={22}
              color="#333"
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 13,
                fontWeight: "400",
              }}
            >
              {Dis}
            </Text>
          </View>
          <LinearGradient
            colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
            style={{
              alignContent: "center",
              borderRadius: 10,
              width: 100,
              height: 30,
              marginLeft: 70,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 14,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            useAngle={45}
          >
            {/* <View
              style={{
                borderTopWidth: 20,
                backgroundColor: "red",
                borderColor: "red",
              }}
            > */}

            <Text
              style={{
                fontSize: 13,
                color: "#fff",
                fontWeight: "400",
              }}
            >
              {short == "True" ? "Short Time" : "Long Time"}
            </Text>
            {/* </View> */}
          </LinearGradient>
        </View>
      </View>
    </View>
  </View>
  // <View style={styles.item}>
  //   <Text style={styles.title}>{title}</Text>
  // </View>
);
// create a component
function Saved({ navigation }) {
  console.log(navigation);
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [refreshing, setRefreshing] = useState(true);
  useEffect(() => {
    fetchdata();
  }, []);

  React.useEffect(() => {
    navigation.addListener("tabPress", () => fetchdata());
  }, []);

  async function fetchdata() {
    console.log("i am at the dataa");
    console.log(navigation);
    try {
      await fetch("http://192.168.1.19:5000/api/s_apply_details/4", {
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
          setRefreshing(false);
          var newdata = result["s_job_apply_details"];
          setdata(newdata);
          setloading(false);
        });
    } catch (error) {
      console.warn(error);
    }
  }
  console.log(data.length > 0);
  if (loading && data.length > 0) {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );
  }
  return (
    <>
      <Top2 />
      <SafeAreaView style={styles.container}>
        <View>
          {refreshing ? <ActivityIndicator /> : null}
          <FlatList
            data={data}
            decelerationRate="fast"
            renderItem={({ item }) => (
              <Items
                title={item.job_title}
                sal={item.Salary}
                per={item.per}
                time={item.time}
                name={item.username}
                loc={item.location}
                Dis={item.distance}
                short={item.is_short}
              />
            )}
            keyExtractor={(item) => item.id}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={fetchdata} />
            }
          />
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
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
});

//make this component available to the app
export default Saved;
