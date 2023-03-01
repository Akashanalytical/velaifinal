import React, { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ToastAndroid,
  Pressable,
  Keyboard,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../../App";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PhoneInput from "react-native-phone-number-input";
import { parsePhoneNumber } from "react-native-phone-number-input";
//for getting the state of a reducer and make use  of dispatch
import { useSelector, useDispatch } from "react-redux";

import Top from "../components/Topcontainer";
// import { isValidPhoneNumber } from "react-phone-number-input";
import { LinearGradient } from "expo-linear-gradient";
import OtpScreen from "./Otpscreen";
import OTPInput from "../components/otp/otpInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { number } from "yup";
export default function Mobillogin({ route, navigation }) {
  const [mobilenumber, setmobilenumber] = useState("");
  const { state, dispatch } = useContext(AuthContext);
  const [otpCode, setotpCode] = useState("");
  const [finalotp, setfinalotp] = useState("");
  const [ispinready, setispinready] = useState(false);
  const [ispinCorrect, setispincorrect] = useState(false);
  const [isotpFound, setisotpFound] = useState(false);
  const maximumCodeLength = 4;
  const codeof = "1111";
  //for getting the states
  const todoList = useSelector((state) => state.IS_user_login);
  const myIDnumber = useSelector((state) => state.ID);
  const Reduxdispatch = useDispatch();
  console.log("hi i am the id", myIDnumber, todoList);
  // to mAKE THE user id
  const handleAddTodo = (paras) => {
    console.log(paras);
    Reduxdispatch({ type: "IS_USERIN", payload: paras });
    console.log(todoList);
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@data", jsonValue);
      alert("Data saved");
      console.log(jsonValue);
    } catch (e) {
      console.log(e);
      // saving error
    }
  };

  useEffect(() => {
    getData();
  });
  //get data
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@data");
      console.log(jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  const [istick, setistick] = useState(true);

  const [isvoice, setisvoice] = useState(true);
  const showToastWithGravity = (parans) => {
    ToastAndroid.showWithGravity(parans, ToastAndroid.SHORT, ToastAndroid.TOP);
  };
  const handlenumber = (e) => {
    console.log(e);
    setmobilenumber(e);
  };
  const giveotp = async () => {
    try {
      console.log(mobilenumber);
      if (mobilenumber.length > 10) {
        const body = { number: mobilenumber };
        const response = await fetch("http://192.168.1.19:5000/sms", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
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
            if (result == true) {
              showToastWithGravity("sucess");
              navigation.navigate("Otpscreen", {
                mobile: mobilenumber,
              });
            }
          });
      } else {
        alert("Invalid phone number");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const [value, setValue] = useState("");
  const [valid, isvalid] = useState(false);
  const phoneInput = useRef(null);
  const [sucesss, setsucesss] = useState(false);
  const [seconds, setSeconds] = useState(120);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [timerStarted, setTimerStarted] = useState(false);
  function toggle() {
    setIsActive(!isActive);
  }
  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  const handleStart = async () => {
    // handleStart();
    const checkValid = phoneInput.current?.isValidNumber(value);
    console.log(checkValid);
    isvalid(!checkValid);
    if (checkValid) {
      const body = {};
      body.number = mobilenumber;
      console.log(body);
      try {
        await fetch("http://192.168.1.19:5000/api/sms", {
          method: "POST",
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
            console.log("IM AT THE ");
            console.log(result.updated);
            if (result) {
              showToastWithGravity("Sucess");
              setisotpFound(true);
              const id = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
              }, 1000);
              setIntervalId(id);
              setTimerStarted(true);
            } else {
              alert(result);
            }
          });
      } catch (error) {
        console.warn(error);
      }
    }
  };
  useEffect(() => {
    if (seconds == 0) {
      console.log(seconds);
      console.log("im at the time im goin gto stop the timer");
      Alert.alert("Timer", "Time is up!");
      clearInterval(intervalId);
      setIntervalId(null);
      setTimerStarted(false);
      showToastWithGravity("OTP expired");
      setIsActive(false);
      clearOTP();
    }
  }, [seconds]);

  const handleStop = async () => {
    const value = {};
    value.otp = otpCode;
    value.number = mobilenumber;
    console.log(value);
    try {
      await fetch("http://192.168.1.19:5000/sms/verification", {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(value), // body data type must match "Content-Type" header
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          dispatch({
            type: "Loged_In",
            payload: result.user_id,
          });
          if (result.msg === "Login success") {
            showToastWithGravity("Sucess");
            handleAddTodo(result.user_id);
            console.log("im going to call");
            clearInterval(intervalId);
            setIntervalId(null);
            setTimerStarted(false);

            // // pauseTimer(true);
            // navigation.navigate("botnav");
          } else {
            showToastWithGravity("Error");
          }
        });
    } catch (error) {
      console.warn(error);
    }
  };

  const clearOTP = async () => {
    try {
      const body = {};
      body.number = mobilenumber;
      const response = await fetch("http://192.168.1.19:5000/invaild", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
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
        .then((result) => console.log(result));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View
        style={{
          flex: 0.1,
          height: "100%",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 15,
          }}
        >
          <Ionicons name="md-globe-outline" size={24} color="#333" />
          <Pressable>
            <Text style={{ marginLeft: 3, Text: 18 }}>EN</Text>
          </Pressable>
        </View>
        <View style={{ marginRight: -15 }}>
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
                color="#333"
              />
            )}
          </Pressable>
        </View>
      </View>
      {/* <Top /> */}
      <View style={{ flex: 0.7, backgroundColor: "#fff" }}>
        {/* <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            marginRight: 40,
            width: 320,
            marginLeft: 40,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Feather
            name="arrow-left"
            size={34}
            color="#333"
            style={{ marginLeft: -21 }}
          />
        </Pressable> */}
        <Text
          style={{
            color: "#1E5966",
            paddingRight: 50,
            paddingLeft: 15,
            marginLeft: 6,
            fontSize: 30,
            fontWeight: "900",
            top: 5,
          }}
        >
          HI
        </Text>
        <Text
          style={{
            color: "#333",
            paddingRight: 50,
            paddingLeft: 15,
            marginLeft: 6,
            fontSize: 21,
            fontWeight: "400",
            top: 10,
          }}
        >
          Welcome!
        </Text>
        {/* <View
        >
        </View> */}
        <Text
          style={{
            width: "100%",
            color: "#333",
            marginTop: 26,
            textAlign: "center",
            fontSize: 25,
            fontWeight: "600",
          }}
        >
          Log In
        </Text>
        <View
          style={{
            // top: 10,
            justifyContent: "space-between",
            flexWrap: "nowrap",
            flexDirection: "row",
            marginLeft: 6,
          }}
        >
          <PhoneInput
            ref={phoneInput}
            defaultCode="IN"
            defaultValue={value}
            containerStyle={{
              width: "100%",
              height: 200,
              backgroundColor: "transparent",
            }}
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              console.log(text);
              setmobilenumber(text);
            }}
            textContainerStyle={{
              backgroundColor: "white",
              height: 55,
              marginVertical: 30,
              borderRadius: 10,
              marginHorizontal: 10,
              padding: 10,
              borderColor: "#333",
              borderWidth: 1,
            }}
            flagButtonStyle={{
              backgroundColor: "white",
              marginHorizontal: 10,
              marginVertical: 30,
              height: 55,
              borderRadius: 10,
              borderColor: "#333",
              borderWidth: 1,
            }}
            autoFocus
          />
        </View>

        <View style={{ marginTop: -100 }}>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 15,
              marginBottom: 15,
            }}
          >
            <Pressable onPress={() => setistick(!istick)}>
              {istick ? (
                <MaterialIcons
                  name="check-box-outline-blank"
                  size={24}
                  color="#1e5966"
                />
              ) : (
                <MaterialIcons name="check-box" size={24} color="#1e5966" />
              )}
            </Pressable>
            <Text style={{ fontSize: 17 }}>I agree </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Termscondition");
              }}
            >
              <Text style={{ color: "#0047FF", fontSize: 17 }}>
                terms and conditions
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              // justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 23, fontWeight: "500", color: "#333" }}>
              Enter OTP
            </Text>
          </View>
          <View
            style={{
              // marginHorizontal: 30,
              borderColor: "#fff",
              // marginTop: 20,
              alignContent: "center",
              width: "120%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable onPress={Keyboard.dismiss}>
              <OTPInput
                code={otpCode}
                setCode={setotpCode}
                maximumLength={maximumCodeLength}
                setispinready={setispinready}
              />
            </Pressable>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "400",
                color: "#1E5966",
                marginTop: 10,
              }}
            >
              {seconds} Sec
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LinearGradient
              colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
              style={{
                height: 49,
                width: 290,
                // marginHorizontal: 50,
                borderRadius: 10,
                opacity: mobilenumber.length > 1 && !istick ? 1 : 0.5,
                marginTop: 12,
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              useAngle={45}
            >
              {!isotpFound ? (
                <TouchableOpacity
                  style={{
                    height: 49,
                    width: 290,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  // disabled={!ispinCorrect}
                  disabled={!(mobilenumber.length > 1 && !istick)}
                  onPress={() => handleStart()}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: "900", color: "#fff" }}
                  >
                    Request OTP
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    height: 49,
                    width: 290,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={handleStop}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: "900", color: "#fff" }}
                  >
                    Verify OTP
                  </Text>
                </TouchableOpacity>
              )}
            </LinearGradient>
          </View>
          <View
            style={{
              fontSize: 15,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              fontWeight: "400",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                // marginHorizontal: 90,
                fontSize: 15,
                // width: "100%",
                // fontWeight: "400",
                // marginTop: 20,
              }}
            >
              Don’t receive a code?
              {/* {console.log(seconds)} */}
            </Text>

            <TouchableOpacity
              disabled={!seconds == 0}
              onPress={async () => {
                setotpCode("");

                const value = {};
                value.number = mobilenumber;
                console.log(value);
                try {
                  await fetch("http://192.168.1.19:5000/api/sms", {
                    method: "POST",
                    mode: "cors", // no-cors, *cors, same-origin
                    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: "same-origin", // include, *same-origin, omit
                    headers: {
                      "Content-Type": "application/json",
                      // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify(value), // body data type must match "Content-Type" header
                  })
                    .then((response) => response.json())
                    .then((result) => {
                      // console.log("")
                      console.log(result);
                      if (result) {
                        showToastWithGravity("Sucess");
                        setSeconds(30);
                        setIsActive(true);
                      } else {
                        showToastWithGravity("Error");
                      }
                    });
                } catch (error) {
                  console.warn(error);
                }
              }}
            >
              <Text
                style={{
                  color: seconds == 0 ? "#0047FF" : "grey",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // alignContent: "center",
                  fontSize: 20,
                  marginLeft: 10,
                  // width: "100%",
                  fontWeight: "400",
                  // marginTop: 20,
                }}
              >
                Resend
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    backgroundColor: "white",
  },
  icons: {
    alignContent: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  upperContainer: {
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    marginHorizontal: 40,
  },
  exampleformat: {
    marginHorizontal: 42,
    width: 215,
    paddingBottom: 10,
  },
  LowerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
