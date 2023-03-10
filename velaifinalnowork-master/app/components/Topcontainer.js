import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useState, useEffect, useContext } from "react";
import DropDownRole from "./dropdown/dropdownRole";
import * as Location from "expo-location";
import DropDownLanguage from "./dropdown/DropDownLanguage";
import DropDownLanguage2 from "./dropdown/DropDownlanguage2";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../App";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
export default function Top() {
  //To pass the location
  const [location, setLocation] = useState(null);
  const [currlocation, setcurrLocation] = useState(null);
  const [loading, setiloading] = useState(true);
  const navigation = useNavigation();
  const [isvoice, setisvoice] = useState(true);
  const myIDnumber = useSelector((state) => state.ID);
  const { state, dispatch } = useContext(AuthContext);
  console.log(state);
  //to get the permission we use UseEffect Hook
  useEffect(() => {
    //getting a user Location takes time so i need to wait so i make a async function
    const getPermission = async () => {
      //we use foreround permission for gettin Permission inside the app
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please give permissions to acces the Loaction");
        return;
      }
      //To get the current Location
      let CurrentLocation = await Location.getCurrentPositionAsync({});
      dispatch({ type: "Set_coords", payload: CurrentLocation });

      // setcurrLocation(CurrentLocation);
      const reverseGeocodeAddress = await Location.reverseGeocodeAsync({
        longitude: CurrentLocation.coords.longitude,
        latitude: CurrentLocation.coords.latitude,
      });
      console.log("im at the Topp containerrrr");
      if (Object.keys(state.coords).length > 0) {
        givelocation(
          state.coords.coords.latitude,
          state.coords.coords.longitude
        );
      } else {
        givelocation(
          CurrentLocation.coords.latitude,
          CurrentLocation.coords.longitude
        );
      }

      setLocation(reverseGeocodeAddress);
      if (
        (location &&
          location[0].district &&
          location[0].city &&
          location[0].region) ||
        state.location != null
      ) {
        setiloading(false);

        dispatch({
          type: "Set_Location",
          payload: `${location[0].district},${location[0].city},${location[0].region}`,
        });
      }
    };

    getPermission();
  }, []);
  //for gett the accurate values we need to change the dependency array value to "location"
  const givelocation = async (paras1, paras2) => {
    console.log("im at the locatiooooon");
    const body = {};
    body.user_id = myIDnumber;
    body.latitude = paras1;
    body.longitude = paras2;
    console.log(myIDnumber);
    console.log(body);
    try {
      await fetch("http://192.168.1.12:5000/api/location_update", {
        method: "PUT",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body), // body data type must match "Content-Type" header
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          //  dispatch({
          //    type: "Loged_In",
          //    payload: result.user_id,
          //  });
          //  if (result.msg === "Login success") {
          //    showToastWithGravity("Sucess");
          //    handleAddTodo(result.user_id);
          //    console.log("im going to call");
          //    clearInterval(intervalId);
          //    setIntervalId(null);
          //    setTimerStarted(false);

          // // pauseTimer(true);
          // navigation.navigate("botnav");
        });
    } catch (error) {
      console.warn(error);
    }
  };
  // if (loading && state.location == "")
  return (
    <View style={styles.topContainer}>
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
      <View style={styles.leftSide}>
        <View style={{ marginLeft: 7 }}>
          <Text>
            <Ionicons name="ios-pin-sharp" size={22} color="#333" />
          </Text>
        </View>
        <View>
          {loading && state.location == "" ? (
            <Text
              style={{
                fontSize: 10,
                fontWeight: "500",
                color: "#333",
                marginLeft: 2,
              }}
            >
              Loading...
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 10,
                fontWeight: "500",
                color: "#333",
                marginLeft: 2,

                width: 100,
              }}
            >
              {state.location == ""
                ? (location[0].district, location[0].city, location[0].region)
                : state.location}
            </Text>
          )}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: 20,
          width: "40%",
        }}
      >
        {/* <View>
          <Pressable>
            <MaterialCommunityIcons
              name="account-voice"
              size={24}
              color="black"
            />
          </Pressable>
        </View> */}
        {/* <View style={{ justifyContent: "space-evenly" }}> */}
        {/* <DropDownLanguage2 /> */}
        <View
          style={{
            flexDirection: "row",
            marginRight: 20,

            alignItems: "center",
          }}
        >
          <Ionicons name="md-globe-outline" size={22} color="#333" />
          <Pressable>
            <Text style={{ Text: 18, color: "#333" }}>EN</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => setisvoice(!isvoice)}>
          {isvoice ? (
            <MaterialCommunityIcons
              name="account-voice"
              size={22}
              color="#333"
            />
          ) : (
            <MaterialCommunityIcons
              name="account-voice-off"
              size={22}
              color="#333"
            />
          )}
        </Pressable>
        {/* <Pressable
          onPress={() => {
            navigation.navigate("mainprofile");
          }}
        >
          <Ionicons name="person-circle-sharp" size={35} color="black" />
        </Pressable> */}
      </View>
      {/* <View style={{ marginTop: -12 }}> */}
      {/* <DropDownRole /> */}
      {/* <Pressable onPress={() => navigation.navigate("register")}>
            <Image
              style={{ height: 40, width: 20 }}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
          </Pressable> */}
      {/* </View> */}
    </View>
    // </View>
  );
}
const styles = StyleSheet.create({
  topContainer: {
    // flexDirection: "row",
    // backgroundColor: "#fafafa",
    // flex: 0.1,
    // justifyContent: "space-between",
    // alignItems: "center",
    // padding: 5,
    height: 60,
    width: "100%",
    position: "relative",
    backgroundColor: "#eefbff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSide: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
