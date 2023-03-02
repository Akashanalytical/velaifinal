import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import Top from "../Topcontainer";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import { useSelector, useDispatch } from "react-redux";

import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import SwiperCard from "../../Pages/Post";

// create a component
export default function SelectCategory({ route }) {
  console.log(route);
  const hi = "helllo";
  console.log(`${hi},hello`);
  const is_personal_provider = useSelector(
    (state) => state.job_Provider_personal
  );
  const is_company_provider = useSelector(
    (state) => state.job_Provider_company
  );
  const [isclick, setIsclick] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isvoice, setisvoice] = useState(true);
  const [search, setSearch] = useState("");

  //hello doiii
  const todoList = useSelector((state) => state.IS_user_login);
  const myIDnumber = useSelector((state) => state.ID);
  console.log("hi i am the id", myIDnumber);
  console.log(todoList);

  //habdle job seeker
  const handlejobseeker = () => {
    dispatch({ type: "im_job_seeker" });
    navigation.navigate("bottomhome");
  };
  //handlejobprovider
  const handleJobProvider = () => {
    dispatch({ type: "job_provider" });
    if (is_personal_provider) {
      navigation.navigate("p_job_provider", { screen: "post" });
    } else if (is_company_provider) {
      navigation.navigate("c_job_provider", { screen: "post" });
    } else {
      navigation.navigate("Jobmainselect", { screen: "post" });
    }
  };
  // console.log(route.params);
  // const userDetails = route.params.Details;
  // console.log("im at main category");
  // console.log(userDetails);
  // // const id = route.params.userId;
  // console.log(navigation);
  const [index, setIndex] = useState(0);
  const [imageData, setImageData] = useState([
    {
      src: require("../../images/ChatGPT.png"),
      title: "ChatGPT Image 1",
    },
    {
      src: require("../../images/Germanaid.png"),
      title: "ChatGPT Image 2",
    },
    {
      src: require("../../images/GovtJobs.png"),
      title: "ChatGPT Image 3",
    },
  ]);
  const [imageData2, setImageData2] = useState([
    {
      src: require("../../images/ChatGPT.png"),
      title: "ChatGPT Image 1",
    },
    {
      src: require("../../images/Germanaid.png"),
      title: "ChatGPT Image 2",
    },
    {
      src: require("../../images/GovtJobs.png"),
      title: "ChatGPT Image 3",
    },
  ]);

  const CarouselItem = ({ item }) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={item.src}
          style={{
            resizeMode: "contain",
            width: "100%",
            height: "100%",
            marginTop: 140,
            borderRadius: 20,
          }}
        />
        <Text
          style={{
            bottom: 16,
            fontSize: 50,
            color: "red",
            marginTop: 20,
          }}
        >
          {item.title}
        </Text>
      </View>
    );
  };

  const CarouselItem2 = ({ item }) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={item.src}
          style={{
            resizeMode: "contain",
            width: "100%",
            height: "100%",
            marginTop: 140,
            borderRadius: 20,
          }}
        />
        <Text
          style={{
            bottom: 16,
            fontSize: 50,
            color: "red",
            marginTop: 20,
          }}
        >
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Top />
      {/* <View
        style={{
          height: 60,
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "flex-start",
          // alignItems: "center",
          // justifyContent: "center",
          // alignContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>
            <AntDesign name="left" size={24} color="#333" />
          </Text>
          <Text
            style={{
              marginRight: 40,
              marginLeft: 5,
              width: 190,
              alignItems: "center",
              fontSize: 16,
              fontWeight: "400",
            }}
          >
            Adyar, Chennai
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
          }}
        >
          <Ionicons name="md-globe-outline" size={24} color="#333" />
          <Pressable>
            <Text style={{ marginLeft: 3, Text: 18, color: "#333" }}>EN</Text>
          </Pressable>
          <Pressable onPress={() => setisvoice(!isvoice)}>
            {isvoice ? (
              <MaterialCommunityIcons
                name="account-voice"
                size={24}
                color="#333"
              />
            ) : (
              <MaterialCommunityIcons
                name="account-voice-off"
                size={24}
                color="black"
              />
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("role1");
            }}
          >
            <Ionicons name="person-circle-sharp" size={25} color="black" />
          </Pressable>
        </View>
      </View> */}
      <ScrollView decelerationRate="fast">
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
              // marginHorizontal: 55,
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
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            flexDirection: "row",
            justifyContent: "space-around",
            // marginVertical: 50,
          }}
        >
          {/* <Pressable
            onPress={() =>
              navigation.navigate("post", {
                // userId: id,
                // Details: userDetails,
              })
            }
          > */}
          <Pressable onPress={() => handlejobseeker()}>
            <LinearGradient
              colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              useAngle={45}
              style={{
                height: 150,
                width: 150,
                backgroundColor: "#FFFFFF",
                marginHorizontal: 5,
                marginVertical: 20,
                justifyContent: "center",
                alignItems: "center",
                // borderWidth: 1,
                // borderColor: "#A3A3A3",
                borderRadius: 32,
                alignContent: "center",
                position: "relative",
                // shadowColor: "#000000",
                // shadowOffset: {
                //   width: 0,
                //   height: 6,
                // },
                // shadowOpacity: 0.2,
                // shadowRadius: 15.62,
                // elevation: 18,
              }}
            >
              <View style={{ marginBottom: 25 }}>
                <Image
                  // resizeMode="contain"
                  source={require("../Maincategory/Categoryimage/job-opportunities.png")}
                  style={{ width: 60, height: 60 }}
                />
              </View>

              <Text
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                JOB SEEKER
              </Text>
            </LinearGradient>
          </Pressable>

          <Pressable
            // onPress={() =>
            //   navigation.navigate({
            //     // userId: id,
            //     // Details: userDetails,
            //   })
            // }
            onPress={
              () => handleJobProvider()
              // navigation.navigate("Jobmainselect", { screen: "post" })
            }
          >
            <LinearGradient
              colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              useAngle={45}
              style={{
                height: 150,
                width: 150,
                backgroundColor: "#FFFFFF",
                marginHorizontal: 5,
                marginVertical: 20,
                justifyContent: "center",
                alignItems: "center",
                // borderWidth: 1,
                // borderColor: "#A3A3A3",
                borderRadius: 32,
                alignContent: "center",
                position: "relative",
                // shadowColor: "#000000",
                // shadowOffset: {
                //   width: 0,
                //   height: 6,
                // },
                // shadowOpacity: 0.2,
                // shadowRadius: 15.62,
                // elevation: 18,
              }}
            >
              <View style={{ marginBottom: 25 }}>
                <Image
                  resizeMode="contain"
                  source={require("../Maincategory/Categoryimage/manager.png")}
                  style={{ width: 60, height: 60 }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                JOB PROVIDER
              </Text>
            </LinearGradient>
          </Pressable>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("rentalseekerbottamtab")}
          >
            <LinearGradient
              colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              useAngle={45}
              style={{
                height: 150,
                width: 150,
                backgroundColor: "#FFFFFF",
                marginHorizontal: 5,
                marginVertical: 20,
                justifyContent: "center",
                alignItems: "center",
                // borderWidth: 1,
                // borderColor: "#A3A3A3",
                borderRadius: 32,
                alignContent: "center",
                position: "relative",
                // shadowColor: "#000000",
                // shadowOffset: {
                //   width: 0,
                //   height: 6,
                // },
                // shadowOpacity: 0.2,
                // shadowRadius: 15.62,
                // elevation: 18,
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../Maincategory/Categoryimage/deal1.png")}
                style={{ width: 60, height: 60 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: "#fff",
                  marginTop: 10,
                  fontWeight: "600",
                }}
              >
                RENTAL
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                SEEKER
              </Text>
            </LinearGradient>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate("rentalproviderbottamtab", { screen: "post" })
            }
          >
            <LinearGradient
              colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              useAngle={45}
              style={{
                height: 150,
                width: 150,
                backgroundColor: "#FFFFFF",
                marginHorizontal: 5,
                marginVertical: 20,
                justifyContent: "center",
                alignItems: "center",
                // borderWidth: 1,
                // borderColor: "#A3A3A3",
                borderRadius: 32,
                alignContent: "center",
                position: "relative",
                // shadowColor: "#000000",
                // shadowOffset: {
                //   width: 0,
                //   height: 6,
                // },
                // shadowOpacity: 0.2,
                // shadowRadius: 15.62,
                // elevation: 18,
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../Maincategory/Categoryimage/deal.png")}
                style={{ width: 60, height: 60 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: "#fff",
                  marginTop: 10,
                  fontWeight: "600",
                }}
              >
                RENTAL
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                PROVIDER
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
        <View
          style={{
            height: 60,
            backgroundColor: "#16323B",
            marginHorizontal: 20,
            borderRadius: 20,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../images/Ad1.png")}
            style={{ width: "100%", height: "100%" }}
          />
          {/* <Carousel
            data={imageData2}
            // autoPlay={true}
            renderItem={({ item, index }) => (
              <CarouselItem2 item={item} index={index} />
            )}
            // height={60}
            width={100}
            // // inactiveSlideScale={2}
            autoplayInterval={100}
          /> */}
        </View>
        <View
          style={{
            backgroundColor: "#FFF",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <LinearGradient
            colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            useAngle={45}
            style={{
              height: 80,
              width: 80,
              backgroundColor: "#FFFFFF",
              marginHorizontal: 5,
              marginVertical: 20,
              justifyContent: "center",
              alignItems: "center",
              // borderWidth: 1,
              // borderColor: "#A3A3A3",
              borderRadius: 20,
              alignContent: "center",
              position: "relative",
              // shadowColor: "#000000",
              // shadowOffset: {
              //   width: 0,
              //   height: 6,
              // },
              // shadowOpacity: 0.2,
              // shadowRadius: 15.62,
              // elevation: 18,
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../Maincategory/Categoryimage/deal.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text
              style={{
                fontSize: 13,
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Insurance
            </Text>
            {/* <Text
              style={{
                fontSize: 15,
                color: "#fff",
                fontWeight: "600",
              }}
            >
              PROVIDER
            </Text> */}
          </LinearGradient>
          <LinearGradient
            colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            useAngle={45}
            style={{
              height: 80,
              width: 80,
              backgroundColor: "#FFFFFF",
              marginHorizontal: 5,
              marginVertical: 20,
              justifyContent: "center",
              alignItems: "center",
              // borderWidth: 1,
              // borderColor: "#A3A3A3",
              borderRadius: 20,
              alignContent: "center",
              position: "relative",
              // shadowColor: "#000000",
              // shadowOffset: {
              //   width: 0,
              //   height: 6,
              // },
              // shadowOpacity: 0.2,
              // shadowRadius: 15.62,
              // elevation: 18,
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: 40, height: 40 }}
              source={require("../../images/freelance.png")}
            />
            <Text
              style={{
                fontSize: 13,
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Freelance
            </Text>
            {/* <Text
              style={{
                fontSize: 15,
                color: "#fff",
                fontWeight: "600",
              }}
            >
              PROVIDER
            </Text> */}
          </LinearGradient>
          <LinearGradient
            colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            useAngle={45}
            style={{
              height: 80,
              width: 80,
              backgroundColor: "#FFFFFF",
              marginHorizontal: 5,
              marginVertical: 20,
              justifyContent: "center",
              alignItems: "center",
              // borderWidth: 1,
              // borderColor: "#A3A3A3",
              borderRadius: 20,
              alignContent: "center",
              position: "relative",
              // shadowColor: "#000000",
              // shadowOffset: {
              //   width: 0,
              //   height: 6,
              // },
              // shadowOpacity: 0.2,
              // shadowRadius: 15.62,
              // elevation: 18,
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../images/government.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text
              style={{
                fontSize: 13,
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Government
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Job
            </Text>
            {/* <Text
              style={{
                fontSize: 15,
                color: "#fff",
                fontWeight: "600",
              }}
            >
              PROVIDER
            </Text> */}
          </LinearGradient>
        </View>

        <View
          style={{
            height: 240,
            width: "100%",

            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Carousel
            data={imageData}
            autoPlay={true}
            renderItem={({ item, index }) => (
              <CarouselItem item={item} index={index} />
            )}
            height={200}
            width={300}
            inactiveSlideScale={2}
            autoplayInterval={5000}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

//make this component available to the app
