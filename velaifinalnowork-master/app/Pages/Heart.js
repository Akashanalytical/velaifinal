//import liraries
import React, { Component, useState } from "react";
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
} from "react-native";
import Top from "../components/Topcontainer";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Octicons,
  SimpleLineIcons,
  EvilIcons,
  Entypo,
} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { Use } from "react-native-svg";
import Top2 from "../components/Topcontainer2";

//get a item

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

const Items = ({ title, sal, per, time, loc, Dis, name, short }) => (
  <View style={{ flex: 1, marginBottom: 20, marginTop: 10 }}>
    <View
      style={{
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        height: "100%",
        width: "90%",
        marginLeft: "5%",
        justifyContent: "center",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
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
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            color: "#333",
            fontSize: 20,
            fontWeight: "600",
            width: 130,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          {title}
        </Text>
        {/* <View
          style={{
            borderRadius: 10,
            width: 70,
            height: 30,
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#333",
            borderRadius: 10,
            marginLeft: 70,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}
        <LinearGradient
          colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
          style={{
            borderRadius: 10,
            width: 80,
            height: 30,
            marginTop: 10,

            marginLeft: "20%",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
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
          {/* <Octicons name="dot-fill" size={20} color="#fff" /> */}

          <Text
            style={{
              fontSize: 14,
              color: "#FFF",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            {short == "True" ? "Short" : "Long"}
          </Text>
          {/* </View> */}
          {/* </View> */}
        </LinearGradient>
        <View
          style={{
            marginTop: 10,
            marginRight: "20%",
            marginLeft: "3%",
          }}
        >
          <FontAwesome name="share-alt" size={22} color="#333" />
        </View>
      </View>

      <Text
        style={{
          color: "#333",
          fontSize: 14,
          fontWeight: "400",
          marginTop: 5,
          marginBottom: 10,
          marginHorizontal: 20,
        }}
      >
        Posted By : {name}
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
              marginLeft: 10,
              alignContent: "center",
            }}
          >
            <FontAwesome5 name="coins" size={20} color="#333" />
            <Text
              style={{
                // marginTop: 3,

                marginLeft: 10,
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              {sal} {per}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 10,
              width: 150,
              marginLeft: 10,
              marginTop: 8,

              alignContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="calendar-clock"
              size={20}
              color="#333"
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
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
            <Entypo name="location-pin" size={20} color="#333" />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              {loc}
            </Text>
          </View>
          <View
            style={{
              alignContent: "center",
              marginTop: 8,

              flexDirection: "row",
              marginBottom: 10,
              width: "80%",
            }}
          >
            <MaterialCommunityIcons
              name="map-marker-distance"
              size={20}
              color="#333"
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              {Dis} km
            </Text>
          </View>
        </View>
      </View>
    </View>
  </View>
  // <View style={styles.item}>
  //   <Text style={styles.title}>{title}</Text>
  // </View>
);

// create a component

const Heart = ({ navigation }) => {
  // const [search, setSearch] = useState("");
  const [search, setSearch] = useState("");

  const user_id = useSelector((state) => state.ID);
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
    console.log("i am at the dataass");
    try {
      await fetch(`http://192.168.1.8:5000/api/s_l_like_job/${user_id}`, {
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
          var newdata = result["liked_job"];
          console.log("im the data going to savee");
          console.log(newdata);
          setdata(newdata);
          setloading(false);
        });
    } catch (error) {
      console.warn(error);
    }
  }
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
      <Text
        style={{
          textAlign: "center",
          fontSize: 22,
          fontWeight: "500",
          marginTop: 20,
        }}
      >
        Saved Jobs
      </Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
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
            marginVertical: 20,
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <EvilIcons name="search" size={22} color="#707070" />
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
            <FontAwesome name="microphone" size={22} color="#707070" />
          </View>
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <View>
          {refreshing ? <ActivityIndicator /> : null}
          {console.log(data)}
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
};
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

export default Heart;
