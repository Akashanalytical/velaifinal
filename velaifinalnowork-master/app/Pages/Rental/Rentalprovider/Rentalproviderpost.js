//import liraries
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

// create a component
export default function Rentalproviderpost({ navigation }) {
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
      <ScrollView style={{ flex: 1, height: "100%" }}>
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
          <View
            style={{
              height: 82,
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              // borderLeftWidth: 10,
              alignItems: "center",
              width: "90%",
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
                  uri: "https://cpimg.tistatic.com/05123901/b/6/Hand-Drilling-Machine-BOSCH-DEWALT-KPT-MAKITA.jpeg",
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
                Drill Driver
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Product Id : RT0001
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Posted on : Jan 2, 2023
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 82,
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              // borderLeftWidth: 10,
              alignItems: "center",
              width: "90%",
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
                  uri: "https://cpimg.tistatic.com/05123901/b/6/Hand-Drilling-Machine-BOSCH-DEWALT-KPT-MAKITA.jpeg",
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
                Drill Driver
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Product Id : RT0001
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Posted on : Jan 2, 2023
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 82,
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              // borderLeftWidth: 10,
              alignItems: "center",
              width: "90%",
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
                  uri: "https://cpimg.tistatic.com/05123901/b/6/Hand-Drilling-Machine-BOSCH-DEWALT-KPT-MAKITA.jpeg",
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
                Drill Driver
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Product Id : RT0001
              </Text>
              <Text
                style={{
                  color: "#333",
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Posted on : Jan 2, 2023
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
