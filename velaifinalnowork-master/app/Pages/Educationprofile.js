import React from "react";
import { useState, useRef, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import {
  Text,
  View,
  Modal,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ToastAndroid,
  Pressable,
  Keyboard,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { Entypo } from "@expo/vector-icons";
import { Formik } from "formik";
import loginValidationSchema from "../components/formvalidation";
import { FontAwesome } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useContext } from "react";
import { useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PhoneInput from "react-native-phone-number-input";
import { parsePhoneNumber } from "react-native-phone-number-input";
import Top from "../components/Topcontainer";
import eduValidationSchema from "../components/educationvalidation";
// import { isValidPhoneNumber } from "react-phone-number-input";
import { LinearGradient } from "expo-linear-gradient";
import OtpScreen from "./Otpscreen";
import OTPInput from "../components/otp/otpInput";
import * as ImagePicker from "expo-image-picker";
import { LocalizationContext } from "../../App";
import { number } from "yup";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector } from "react-redux";

import { Button } from "react-native-paper";
export default function EduInfo({ navigation: { goBack } }) {
  const { t, language, setlanguage } = useContext(LocalizationContext);
  //user_ID
  const userID = useSelector((state) => state.ID);
  //Date 2
  const [ActivityIndicators, setActivityIndicators] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const showDatePicker1 = () => {
    setDatePickerVisible(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  //
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [image, setImage] = useState(null);
  //to get skills
  useEffect(() => {
    async function fetchdata() {
      try {
        await fetch("http://192.168.1.12:5000/skills/api", {
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
          .then((result) => (console.log(result), setSkills(result)));
      } catch (error) {
        console.warn(error);
      }
    }
    fetchdata();
  }, []);
  //DAte picker
  const [date, setDate] = useState(new Date());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
    });
  };
  async function takeAndUploadPhotoAsync(paras) {
    // Display the camera to the user and wait for them to take a photo or to cancel
    // the action
    let result =
      paras === "files"
        ? await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          })
        : await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
    result;
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    console.log(result);
    setActivityIndicators(true);
    console.log("result is " + result);
    console.log(result);
    let localUri = result.assets[0]["uri"];
    console.log(localUri);
    setImage(localUri);
    let filename = localUri.split("/").pop();
    console.log(filename);
    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    console.log(type);
    var formdata = new FormData();
    formdata.append("file", { uri: localUri, name: filename, type });
    // Upload the image using the fetch and FormData APIs
    let FFormData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    FFormData.append("photo", { uri: localUri, name: filename, type });
    async function submitdata() {
      try {
        console.log("im inside");
        await fetch(`http://192.168.1.12:5000/api/job_post/aws_upload/5`, {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: "same-origin", // include, *same-origin, omit
          headers: {
            // Accept: "application/json",
            "Content-Type": "multipart/form-data",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formdata, // body data type must match "Content-Type" header
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setjobpostpic(result["updated"]);
            setActivityIndicators(false);
            setModalVisible(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
    submitdata();
  }
  const showDatepicker = () => {
    showMode("date");
  };
  //select Gender
  const [genderValue, setGenderValue] = useState(null);
  const [genderOpen, setGenderOpen] = useState(false);
  const { handleSubmit, control } = useForm();
  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);
  const [gender, setGender] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer Not to Say", value: "neutral" },
  ]);
  const [isvoice, setisvoice] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [skills, setSkills] = useState(null);
  const [jobseeker, setjobseeker] = useState(false);
  const [jobprovider, setjobprovider] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const handleSubmits = (values) => {
    values.start = date;
    values.end = selectedDate;
    values.user_id = userID;
    // const finalOBj = {};
    // finalOBj.education = values;
    // finalOBj.user_id = userID;
    // console.log(finalOBj);

    async function submitdata(paras) {
      try {
        await fetch("http://192.168.1.12:5000/api/user/education", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(paras),
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.user == "success") {
              goBack();
            }
          });
      } catch (error) {
        console.warn(error);
      }
    }
    submitdata(values);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <ScrollView nestedScrollEnabled={true}>
        <Formik
          validationSchema={eduValidationSchema}
          initialValues={{
            inisitute: "",
            eduaction_level: "",
            Grade: "",
          }}
          onSubmit={(values) => handleSubmits(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
          }) => (
            <>
              <View style={{ marginTop: 0 }}>
                <View style={styles.inputform}>
                  <View style={styles.name}>
                    <View style={styles.fname}>
                      <Text style={styles.labelname}>Insititue Name</Text>
                      <TextInput
                        placeholder="Insititute Name"
                        name="inisitute"
                        style={styles.input}
                        placeholderTextColor="#707070"
                        onChangeText={handleChange("inisitute")}
                        onBlur={handleBlur("inisitute")}
                        defaultValue=""
                        underlineColorAndroid={"transparent"}
                      />
                      {errors.inisitute && touched.inisitute && (
                        <Text
                          style={{
                            fontSize: 13,
                            color: "red",
                            marginHorizontal: 20,
                          }}
                        >
                          {errors.inisitute}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.phone}>
                    <Text style={styles.labelname}>Education Level</Text>
                    <TextInput
                      placeholder="Education Level"
                      style={styles.input}
                      placeholderTextColor="#707070"
                      onChangeText={handleChange("eduaction_level")}
                      onBlur={handleBlur("eduaction_level")}
                      defaultValue=""
                    />
                    {errors.eduaction_level && touched.eduaction_level && (
                      <Text
                        style={{
                          fontSize: 13,
                          color: "red",
                          marginHorizontal: 20,
                        }}
                      >
                        {errors.eduaction_level}
                      </Text>
                    )}
                  </View>
                  <View style={styles.email}>
                    <Text style={styles.labelname}>Grade(Optional)</Text>
                    <TextInput
                      placeholder="Marks/CGPA"
                      style={styles.input}
                      onChangeText={handleChange("Grade")}
                      onBlur={handleBlur("Grade")}
                      placeholderTextColor="#707070"
                      defaultValue=""
                    />
                    {errors.Grade && touched.Grade && (
                      <Text
                        style={{
                          fontSize: 13,
                          color: "red",
                          marginHorizontal: 20,
                        }}
                      >
                        {errors.Grade}
                      </Text>
                    )}
                  </View>
                  <View style={styles.password}>
                    <Text style={styles.labelname}>From:</Text>
                    <TextInput
                      placeholder={t("passpla")}
                      style={[styles.input, { position: "relative" }]}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#707070"
                      defaultValue={date.toDateString()}
                    />
                    <Pressable onPressOut={showDatepicker}>
                      <FontAwesome5
                        name="calendar-alt"
                        size={24}
                        color="#333"
                        style={{
                          position: "absolute",
                          right: 40,
                          bottom: 23,
                        }}
                      />
                    </Pressable>
                  </View>
                  <View style={styles.password}>
                    <Text style={styles.labelname}>To:</Text>
                    <TextInput
                      placeholder={t("passpla")}
                      style={[styles.input, { position: "relative" }]}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#707070"
                      defaultValue={selectedDate.toDateString()}
                    />
                    <Pressable onPressOut={showDatePicker1}>
                      <FontAwesome5
                        name="calendar-alt"
                        size={24}
                        color="#333"
                        style={{
                          position: "absolute",
                          right: 40,
                          bottom: 23,
                        }}
                      />
                    </Pressable>
                    <DateTimePickerModal
                      date={selectedDate}
                      isVisible={datePickerVisible}
                      mode="date"
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                    />
                  </View>
                </View>
                <LinearGradient
                  colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
                  style={{
                    backgroundColor: isValid ? "#6BC3FF" : "#87CEEB",
                    fontWeight: "600",

                    padding: 10,
                    width: "50%",
                    alignSelf: "center",
                    opacity: isValid ? 1 : 0.5,
                    borderRadius: 50,
                    marginVertical: 20,
                  }}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  useAngle={45}
                >
                  <TouchableOpacity
                    // style={{
                    //   padding: 10,
                    //   width: "50%",
                    //   alignSelf: "center",
                    //   borderRadius: 10,
                    //   marginVertical: 20,
                    // }}
                    onPress={handleSubmit}
                    disabled={!isValid}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontWeight: "600",
                        fontSize: 17,
                        color: isValid ? "#fff" : "white",
                      }}
                    >
                      Create
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  edutext: {
    fontSize: 17,
    fontWeight: "400",
    paddingLeft: 5,
    color: "#1E5966",
    paddingTop: 8,
  },
  titlestyle: {
    fontWeight: "500",
    fontSize: 22,
  },
  iconstotal: {
    alignItems: "center",
    alignContent: "center",
    paddingTop: 20,
  },
  education: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-end",
    marginVertical: 10,
  },
  centeredView: {
    flex: 1,
    width: "90%",
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  labelname: {
    marginHorizontal: 23,
    color: "#333",
    fontSize: 16,
    fontWeight: "400",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 25,
    borderColor: "#707070",
    padding: 100,
    height: "42%",
    alignItems: "center",
    shadowColor: "#000",
    borderWidth: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 10,
  },
  input: {
    borderRadius: 10,
    height: 50,
    backgroundColor: "#fff",
    borderColor: "#707070",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    width: "90%",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
  },
  inputs: {
    height: 40,
    margin: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
