//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
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

// create a component
function Rentalseeker() {
  const [search, setSearch] = useState("");

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
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginHorizontal: 10,
            marginBottom: 7,
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
              Drilling Machine
            </Text>

            <View
              style={{
                marginTop: 5,
                //   position: "absolute",
              }}
            >
              <Image
                source={{
                  uri: "https://rukminim1.flixcart.com/image/416/416/kfoapow0/power-drill/u/w/t/10mm-powerful-drill-machine-for-wall-metal-wood-drilling-with-original-imafw28heg8k5kha.jpeg?q=70",
                }}
                style={{
                  backgroundColor: "purple",
                  width: 100,
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
                  Rs.1000/day
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
                  size={26}
                  color="black"
                />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 18,
                    fontWeight: "400",
                  }}
                >
                  5 Days
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
                  Adyar, Chennai
                </Text>
                <View style={{ marginLeft: 10, marginTop: 30 }}>
                  <FontAwesome5 name="share-alt" size={34} color="black" />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            marginBottom: 7,

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
              Drilling Machine
            </Text>

            <View
              style={{
                marginTop: 5,
                //   position: "absolute",
              }}
            >
              <Image
                source={{
                  uri: "https://rukminim1.flixcart.com/image/416/416/kfoapow0/power-drill/u/w/t/10mm-powerful-drill-machine-for-wall-metal-wood-drilling-with-original-imafw28heg8k5kha.jpeg?q=70",
                }}
                style={{
                  backgroundColor: "purple",
                  width: 100,
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
                  Rs.1000/day
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
                  size={26}
                  color="black"
                />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 18,
                    fontWeight: "400",
                  }}
                >
                  5 Days
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
                  Adyar, Chennai
                </Text>
                <View style={{ marginLeft: 10, marginTop: 30 }}>
                  <FontAwesome5 name="share-alt" size={34} color="black" />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginBottom: 7,
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
              Drilling Machine
            </Text>

            <View
              style={{
                marginTop: 5,
                //   position: "absolute",
              }}
            >
              <Image
                source={{
                  uri: "https://rukminim1.flixcart.com/image/416/416/kfoapow0/power-drill/u/w/t/10mm-powerful-drill-machine-for-wall-metal-wood-drilling-with-original-imafw28heg8k5kha.jpeg?q=70",
                }}
                style={{
                  backgroundColor: "purple",
                  width: 100,
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
                  Rs.1000/day
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
                  size={26}
                  color="black"
                />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 18,
                    fontWeight: "400",
                  }}
                >
                  5 Days
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
                  Adyar, Chennai
                </Text>
                <View style={{ marginLeft: 10, marginTop: 30 }}>
                  <FontAwesome5 name="share-alt" size={34} color="black" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default Rentalseeker;
