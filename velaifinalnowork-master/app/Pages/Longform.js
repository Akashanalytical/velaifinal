import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  Modal,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useEffect } from "react";
import { useContext } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { LocalizationContext } from "../../App";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const Sign = () => {
  //gender
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isclicked, setisclicked] = useState(false);
  //t for language translation
  const { t, language, setlanguage } = useContext(LocalizationContext);

  //pic for image
  const [modalVisible, setModalVisible] = useState(false);
  const [ActivityIndicators, setActivityIndicators] = useState(false);
  const [image, setImage] = useState(null);

  //image
  const [jobpost, setjobpostpic] = useState(null);

  //upload IMage syntax
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
        await fetch(`http://192.168.1.10:5000/api/job_post/aws_upload/5`, {
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

  const [gender, setGender] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer Not to Say", value: "neutral" },
  ]);
  //workspace
  const [workspaceopen, setworkspaceopen] = useState(false);
  const [workspacevalue, setworkspacevalue] = useState(false);
  const [workspace, setworkspace] = useState([
    { label: "Remote", value: "Remote" },
    { label: "offline", value: "offline" },
  ]);
  //duration
  const [durationopen, setdurationopen] = useState(false);
  const [durationvalue, setdurationvalue] = useState(false);
  const [duration, setduration] = useState([
    { label: "1-10days", value: "1-10days" },
    { label: "11-30days", value: "11-30days" },
    { label: "1-6months", value: "1-6months" },
    { label: "7-12months", value: "7-12months" },
    { label: "Permanent", value: "Permanent" },
  ]);
  //company
  const [companyOpen, setCompanyOpen] = useState(false);
  const [companyValue, setCompanyValue] = useState(null);
  const [company, setComapny] = useState([
    { label: "PUCIT", value: "pucit" },
    { label: "UCP", value: "ucp" },
    { label: "UET", value: "uet" },
  ]);

  //to get the job title
  useEffect(() => {
    fetchdata();
  }, []);
  async function fetchdata() {
    try {
      await fetch("http://192.168.1.10:5000/api/job_title", {
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
        .then((result) => (console.log(result), setComapny(result)));
    } catch (error) {
      console.log("i at job titile error");
      console.warn(error);
    }
  }
  const [loading, setLoading] = useState(false);
  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);

  const onCompanyOpen = useCallback(() => {
    setGenderOpen(false);
    setdurationopen(false);
  }, []);

  //duration
  const ondurationOpen = useCallback(() => {
    setCompanyOpen(false);
    setworkspaceopen(false);
  });
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    const result = company.filter(checkcom);
    function checkcom(com) {
      return com.value == companyValue;
    }
    const finalJob = result[0].label;
    console.log(finalJob);
    data.job_title = finalJob;
    data.jobpic = jobpost;
    data.isallow_tocall = isclicked;
    data.user_id = 1;
    console.log(data, "data");
    async function submitdata() {
      try {
        await fetch("http://192.168.1.10:5000/api/long_job_post", {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
          });
      } catch (error) {
        console.warn(error);
      }
    }
    submitdata();
  };
  //to find the

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.dropdownCompany}>
            <Controller
              name="job_title"
              defaultValue=""
              control={control}
              render={({ field: { onChange, value } }) => (
                <DropDownPicker
                  style={styles.dropdown}
                  open={companyOpen}
                  value={companyValue} //companyValue
                  items={company}
                  setOpen={setCompanyOpen}
                  listMode="MODAL"
                  modalTitle="Select job title"
                  modalProps={{
                    animationType: "slide",
                  }}
                  modalContentContainerStyle={{
                    backgroundColor: "white",
                  }}
                  setValue={setCompanyValue}
                  setItems={setComapny}
                  placeholder="job Title"
                  placeholderStyle={styles.placeholderStyles}
                  loading={loading}
                  activityIndicatorColor="#5188E3"
                  searchable={true}
                  searchPlaceholder="Search title here..."
                  onOpen={onCompanyOpen}
                  onChangeValue={onChange}
                  zIndex={1000}
                  zIndexInverse={3000}
                />
              )}
            />
          </View>
        </View>
        <View>
          {/*workspace*/}
          <Controller
            name="workspace"
            defaultValue=""
            control={control}
            render={({ field: { onChange, value } }) => (
              <View style={styles.dropdownCompany}>
                <DropDownPicker
                  style={styles.dropdown}
                  open={workspaceopen}
                  value={workspacevalue} //companyValue
                  items={workspace}
                  setOpen={setworkspaceopen}
                  setValue={setworkspacevalue}
                  setItems={setworkspace}
                  placeholder="Workspace"
                  placeholderStyle={[
                    styles.placeholderStyles,
                    { elevation: 10 },
                  ]}
                  containerStyle={{ zIndex: 60 }}
                  loading={loading}
                  activityIndicatorColor="#5188E3"
                  searchable={true}
                  searchPlaceholder="Search your company here..."
                  onOpen={onCompanyOpen}
                  onChangeValue={onChange}
                />
              </View>
            )}
          />
        </View>
        <View>
          <Controller
            name="location"
            defaultValue=""
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                selectionColor={"#5188E3"}
                placeholder="Select location"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
        </View>
        <View>
          <Controller
            name="Duration"
            defaultValue=""
            control={control}
            render={({ field: { onChange, value } }) => (
              <View style={styles.dropdownCompany}>
                <DropDownPicker
                  style={styles.dropdown}
                  open={durationopen}
                  value={durationvalue} //companyValue
                  items={duration}
                  setOpen={setdurationopen}
                  setValue={setdurationvalue}
                  setItems={setduration}
                  placeholder="Select Duration"
                  dropDownContainerStyle={{
                    position: "relative", // to fix scroll issue ... it is by default 'absolute'
                    top: 0, //to fix gap between label box and container
                  }}
                  placeholderStyle={styles.placeholderStyles}
                  containerStyle={{ zIndex: 50 }}
                  loading={loading}
                  listMode="SCROLLVIEW"
                  activityIndicatorColor="#5188E3"
                  searchable={true}
                  searchPlaceholder="Set duration here..."
                  onOpen={ondurationOpen}
                  onChangeValue={onChange}
                />
              </View>
            )}
          />
        </View>
        <Controller
          name="Salary"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              selectionColor={"#5188E3"}
              placeholder="Salary"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="Education"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              selectionColor={"#5188E3"}
              placeholder="Education"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="mobile_number"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input]}
              selectionColor={"#5188E3"}
              placeholder="Mobile Number"
              keyboardType="number-pad"
              multiline
              numberOfLines={4}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="email"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input]}
              selectionColor={"#5188E3"}
              placeholder="abc@gmail.com"
              keyboardType="email-address"
              multiline
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Text style={{ paddingLeft: 20, marginBottom: 10 }}>
          Your Preference
        </Text>
        <View style={[styles.section, { marginLeft: 10 }]}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={() => {
              setisclicked(true), setChecked(!isChecked);
            }}
          />
          <Text style={[styles.paragraph]}>Allow candidates to call HR</Text>
        </View>
        <Text style={{ marginHorizontal: 10 }}> Add image</Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          {image === null ? (
            <View
              style={{
                backgroundColor: "#D9D9D9",
                padding: 20,

                width: 70,
                height: 70,
                borderRadius: 70 / 2,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 20,
                marginHorizontal: 20,
              }}
            >
              <Entypo name="camera" size={24} color="black" />
            </View>
          ) : (
            <View>
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
                resizeMode="cover"
              />
            </View>
          )}
        </TouchableOpacity>
        <Modal
          animationType="slide"
          //animationInTiming = {13900}
          transparent={true}
          visible={modalVisible}
          animationOut="slide"
          swipeDirection="down"
          onRequestClose={() => {
            setModalVisible(!modalVisible);
            setActivityIndicators(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {ActivityIndicators ? (
                <View>
                  <Text>Loading. please wait</Text>
                  <ActivityIndicator size="large" />
                </View>
              ) : (
                <>
                  <TouchableHighlight
                    style={{
                      ...styles.openButton,
                      width: 150,
                      backgroundColor: "#1E5966",
                    }}
                    onPress={() => {
                      takeAndUploadPhotoAsync("camera");
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AntDesign name="camera" size={24} color="white" />
                      <Text style={styles.textStyle}>{t("pic")}</Text>
                    </View>
                  </TouchableHighlight>

                  <TouchableHighlight
                    style={{
                      ...styles.openButton,
                      width: 150,
                      backgroundColor: "#1E5966",
                      marginTop: 20,
                    }}
                    onPress={() => takeAndUploadPhotoAsync("files")}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FontAwesome name="files-o" size={24} color="white" />
                      <Text style={styles.textStyle}>{t("fi")}</Text>
                    </View>
                  </TouchableHighlight>
                </>
              )}
            </View>
          </View>
        </Modal>
        <LinearGradient
          colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
          style={{
            // backgroundColor: isValid ? "#6BC3FF" : "#87CEEB",
            alignItems: "center",
            backgroundColor: "#5188E3",
            color: "white",
            textAlign: "center",
            marginHorizontal: 60,
            paddingVertical: 15,
            borderRadius: 50,
            marginTop: 20,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          useAngle={45}
        >
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <Text style={{ color: "#fff" }}>Create job</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 30,
  },
  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
  },
  placeholderStyles: {
    color: "grey",
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  centeredView: {
    flex: 1,
    width: "90%",
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },
  getStarted: {
    backgroundColor: "#5188E3",
    color: "white",
    textAlign: "center",
    marginHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 20,
  },
  logIn: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  links: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#758580",
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});

export default Sign;
