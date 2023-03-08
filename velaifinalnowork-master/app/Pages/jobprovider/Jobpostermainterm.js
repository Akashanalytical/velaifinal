// //import liraries
// import React, { Component } from "react";
// import { TouchableOpacity } from "react-native";
// import { View, Text, StyleSheet, Image } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { FontAwesome, Ionicons } from "@expo/vector-icons";
// import { ScrollView } from "react-native-gesture-handler";

// // create a component
// export default function Jobpostermain({ navigation }) {
//   return (
//     <>
//       <View
//         style={{
//           width: "100%",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 25,
//             fontWeight: "600",
//           }}
//         >
//           Create Post
//         </Text>
//       </View>

//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           marginHorizontal: 20,
//           marginBottom: 20,
//           // alignItems: "center",
//           // alignContent: "center",
//         }}
//       >
//         <TouchableOpacity onPress={() => navigation.navigate("Long")}>
//           <LinearGradient
//             colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
//             style={{
//               height: 42,
//               width: 160,
//               borderRadius: 10,
//               marginTop: 30,
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "row",
//             }}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//             useAngle={45}
//           >
//             <Text
//               style={{
//                 color: "#fff",
//                 fontSize: 18,
//                 fontWeight: "600",
//                 marginHorizontal: 10,
//                 justifyContent: "center",
//               }}
//             >
//               Longtime Job
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("short")}>
//           <LinearGradient
//             colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
//             style={{
//               height: 42,
//               width: 160,
//               borderRadius: 10,
//               marginTop: 30,
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "row",
//             }}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//             useAngle={45}
//           >
//             <Text
//               style={{
//                 color: "#fff",
//                 fontSize: 18,
//                 fontWeight: "600",
//                 marginHorizontal: 10,
//                 justifyContent: "center",
//               }}
//             >
//               Shorttime Job
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//       <ScrollView style={{ flex: 1, height: "100%" }}>
//         <View
//           style={{
//             width: "100%",
//             justifyContent: "center",
//             alignItems: "center",
//             marginBottom: 20,
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 25,
//               fontWeight: "600",
//             }}
//           >
//             Your Post
//           </Text>
//         </View>
//         {/* <View
//           style={{
//             justifyContent: "center",
//             alignContent: "center",
//             marginVertical: 30,
//           }}
//         > */}
//         {/* <ScrollView style={{ height: "100%" }}> */}
//         {/* <Image
//             style={{
//               height: "50%",
//               width: "100%",

//               resizeMode: "contain",
//             }}
//             source={require("../../images/jobpost.png")}
//           />
//           <View style={{ justifyContent: "center", alignItems: "center" }}>
//             <Text style={{ fontSize: 15, fontWeight: "600" }}>
//               Don’t have an any post
//             </Text>
//             <Text style={{ fontSize: 15, fontWeight: "600" }}>
//               create your post
//             </Text>
//           </View>
//         </View> */}
//         <View
//           style={{
//             justifyContent: "center",
//             alignContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <View
//             style={{
//               height: 82,
//               backgroundColor: "#FFFFFF",
//               justifyContent: "space-evenly",
//               // borderLeftWidth: 10,
//               width: "90%",
//               marginBottom: 15,

//               borderColor: "#D9D9D9",
//               borderRadius: 20,
//               borderWidth: 2,
//             }}
//           >
//             <View style={{ marginLeft: 30 }}>
//               <Text
//                 style={{
//                   color: "#333",
//                   fontSize: 20,
//                   fontWeight: "600",
//                 }}
//               >
//                 Software developer
//               </Text>
//               <Text
//                 style={{
//                   color: "#333",
//                   fontSize: 15,
//                   fontWeight: "600",
//                 }}
//               >
//                 Posted on: Jan 2, 2023
//               </Text>
//               <Text
//                 style={{
//                   color: "#333",
//                   fontSize: 15,
//                   fontWeight: "600",
//                 }}
//               >
//                 Expiry:Jan 12, 2023
//               </Text>
//             </View>
//           </View>
//           <View
//             style={{
//               height: 82,
//               backgroundColor: "#FFFFFF",
//               justifyContent: "space-evenly",
//               // borderLeftWidth: 10,
//               width: "90%",
//               marginBottom: 15,
//               borderColor: "#D9D9D9",
//               borderRadius: 20,
//               borderWidth: 2,
//             }}
//           >
//             <View style={{ marginLeft: 30 }}>
//               <Text
//                 style={{
//                   color: "#333",
//                   fontSize: 20,
//                   fontWeight: "600",
//                 }}
//               >
//                 Software developer
//               </Text>
//               <Text
//                 style={{
//                   color: "#333",
//                   fontSize: 15,
//                   fontWeight: "600",
//                 }}
//               >
//                 Posted on: Jan 2, 2023
//               </Text>
//               <Text
//                 style={{
//                   color: "#333",
//                   fontSize: 15,
//                   fontWeight: "600",
//                 }}
//               >
//                 Expiry:Jan 12, 2023
//               </Text>
//             </View>
//           </View>
//           <View
//             style={{
//               height: 82,
//               backgroundColor: "#FFFFFF",
//               justifyContent: "space-evenly",
//               // borderLeftWidth: 10,
//               marginBottom: 15,

//               width: "90%",
//               borderColor: "#D9D9D9",
//               borderRadius: 20,
//               borderWidth: 2,
//             }}
//           >
//             <View style={{ marginLeft: 30 }}>
//               <Text
//                 style={{
//                   color: "#333",
//                   fontSize: 20,
//                   fontWeight: "600",
//                 }}
//               >
//                 Software developer
//               </Text>
//               <Text
//                 style={{
//                   color: "#333",
//                   fontSize: 15,
//                   fontWeight: "600",
//                 }}
//               >
//                 Posted on: Jan 2, 2023
//               </Text>
//               <Text
//                 style={{
//                   color: "#333",
//                   fontSize: 15,
//                   fontWeight: "600",
//                 }}
//               >
//                 Expiry:Jan 12, 2023
//               </Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </>
//   );
// }

// // define your styles
// const styles = StyleSheet.create({
//   container: {},
// });

// //make this component available to the app

import React, { Component, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Modal } from "react-native";
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
  LogBox,
  Share,
  Alert,
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  SimpleLineIcons,
  EvilIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Message } from "react-native-gifted-chat";
import { useNavigation } from "@react-navigation/native";
//to navigate

//on share
const onShare = async ({
  title,
  sal,
  per,
  time,
  loc,
  cou,
  Dis,
  name,
  short,
  work,
}) => {
  try {
    const result = await Share.share({
      title: "Message from Velai app",
      message: `Job Title:${title}\nSalary:${sal}/${
        short == "True" ? per : "LPA"
      }\nTime:${
        short == "True" ? time : work
      }\nLocation:${loc}\n Message sent from velai app`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};

//flaatlist design
const Iteems = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
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
const Items = ({
  title,
  sal,
  per,
  time,
  cou,
  loc,
  Dis,
  name,
  short,
  work,
  iD,
  navigation,
}) => {
  // const { navigation } = this.props.navigation;
  return (
    <View style={{ flex: 1, marginBottom: 20 }}>
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
          <TouchableOpacity
            onPress={() =>
              onShare({
                title,
                sal,
                per,
                time,
                loc,
                cou,
                Dis,
                name,
                short,
                work,
              })
            }
          >
            <FontAwesome name="share-alt" size={34} color="#333" />
          </TouchableOpacity>
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
              <FontAwesome name="rupee" size={22} color="#333" />
              <Text
                style={{
                  // marginTop: 3,

                  marginLeft: 10,
                  fontSize: 13,
                  fontWeight: "400",
                }}
              >
                {sal}/{short == "True" ? per : "LPA"}
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
              <MaterialCommunityIcons
                name="timer-sand"
                size={24}
                color="#333"
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 13,
                  fontWeight: "400",
                }}
              >
                {short == "True" ? time : work}
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
              <TouchableOpacity
                onPress={() => {
                  // chagePage();
                  navigation.navigate("JobApppliedPersons", {
                    id: iD,
                    short: short,
                  });
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
                  {cou} Persons Applied
                  {/* {count} */}
                </Text>
              </TouchableOpacity>
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
};

// create a component
export default function Jobpostermain({ navigation }) {
  const [jobcount, setjobcount] = useState(2);
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const userID = useSelector((state) => state.ID);

  const chagePage = () => {
    navigation.navigate("JobApppliedPersons");
  };

  useEffect(() => {
    submitdata();
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  React.useEffect(() => {
    navigation.addListener("tabPress", () => submitdata());
  }, []);
  async function submitdata() {
    try {
      await fetch(`http://192.168.1.20:5000/api/provide_jobs/${userID}`, {
        method: "GET",
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
          var newdata = result["posted_job"];
          console.log(result["posted_job"][0].count);
          setdata(newdata);
          setloading(false);
        });
    } catch (error) {
      console.warn(error);
    }
  }
  if (loading) {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );
  }
  return (
    <>
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
          Create Post
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginBottom: 20,
          // alignItems: "center",
          // alignContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Long")}>
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
              Longtime Job
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("short")}>
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
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1, height: "100%" }}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
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
        {jobcount <= 0 ? (
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              marginVertical: 30,
            }}
          >
            <Image
              style={{
                height: "50%",
                width: "100%",
                resizeMode: "contain",
              }}
              source={require("../../images/jobpost.png")}
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 15, fontWeight: "600" }}>
                Don’t have an any post
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "600" }}>
                create your post
              </Text>
            </View>
          </View>
        ) : (
          <SafeAreaView style={styles.container}>
            <View>
              {refreshing ? <ActivityIndicator /> : null}
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <Items
                    iD={item.id}
                    title={item.job_title}
                    sal={item.Salary}
                    per={item.per}
                    time={item.time}
                    loc={item.location}
                    short={item.is_short}
                    work={item.workspace}
                    cou={item.count}
                    navigation={navigation}
                    // count={item.count}
                  />
                )}
                keyExtractor={(item) => item.id}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={submitdata}
                  />
                }
              />
            </View>
          </SafeAreaView>
        )}
      </ScrollView>
    </>
  );
}
// define your styles
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
