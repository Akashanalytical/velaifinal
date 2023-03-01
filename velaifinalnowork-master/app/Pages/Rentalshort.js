import React, { useState, useCallback } from "react";
// import { Country, State, City } from "country-state-city";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Image,
  TouchableHighlight,
} from "react-native";
import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { useContext } from "react";
import { LocalizationContext } from "../../App";
import Checkbox from "expo-checkbox";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const ShortTermRental = () => {
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const { t, language, setlanguage } = useContext(LocalizationContext);

  const [gender, setGender] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer Not to Say", value: "neutral" },
  ]);
  const [ProductOpen, setProductOpen] = useState(false);
  const [ProducttypeValue, setProducttypeValue] = useState(null);
  const [Product, setProduct] = useState([
    { label: "Tools", value: "Tools" },
    { label: "Transport", value: "Transport" },
    { label: "Jewellery", value: "Jewellery" },
    { label: "Home Appliances", value: "Home Appliances" },
    { label: "Kitchen Tools", value: "Kitchen Tools" },
    { label: "Makeup", value: "Makeup" },
    { label: "Cloths", value: "Cloths" },
    { label: "Plots/Villas", value: "Plots/Villas" },
    { label: "Furnitures", value: "Furnitures" },
    { label: "Hospital", value: "Hospital" },
  ]);

  //checkcbox
  const [isChecked, setChecked] = useState(false);
  const [isclicked, setisclicked] = useState(false);
  //postpic
  const [jobpost, setjobpostpic] = useState(null);

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
  const ondurationOpen = useCallback(() => {
    setProductOpen(false);
  });

  //perday hour
  const [houropen, sethouropen] = useState(false);
  const [hourvalue, sethourvalue] = useState(false);
  const [hour, sethour] = useState([
    { label: "/Hour", value: "Hour" },
    { label: "/Week", value: "Week" },
    { label: "/Per Day", value: "Per Day" },
    { label: "/Per Month", value: "Per Month" },
    { label: "/Per Year", value: "Per Year" },
  ]);
  //city
  const [cityopen, setcityopen] = useState(false);
  const [cityvalue, setcityvalue] = useState(null);
  const [city, setcity] = useState([
    { label: "/Hour", value: "Hour" },
    { label: "/Week", value: "Week" },
    { label: "/Per Day", value: "Per Day" },
    { label: "/Per Month", value: "Per Month" },
    { label: "/Per Year", value: "Per Year" },
  ]);

  //company
  const [companyOpen, setCompanyOpen] = useState(false);
  const [companyValue, setCompanyValue] = useState(null);
  const [company, setComapny] = useState([
    { label: "PUCIT", value: "pucit" },
    { label: "UCP", value: "ucp" },
    { label: "UET", value: "uet" },
  ]);

  //to get the item
  useEffect(() => {
    fetchdata();
    getCountries();
  }, []);
  //country city state
  const [data, setdata] = useState([]);
  // console.log(Country.getAllCountries());
  // const CountryObj = Country.getAllCountries();

  // console.log(State.getAllStates());
  // console.log(
  //   City.getCitiesOfState("IN", "TN").filter((e) => e.name === "Chinnasalem")
  // );
  // console.log(
  //   City.getCitiesOfState("IN", "TN").filter((e) => e.name === "Abiramam")
  // );

  async function getCountries() {
    try {
      await fetch(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json",
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
        .then((response) => response.json())
        .then((result) => {
          setdata(result);
        });
    } catch (error) {
      console.log("i at job titile error");
      console.warn(error);
    }
  }
  const country = [...new Set(data.map((items) => items.country))];

  country.sort();
  const countryObj = [];
  const statesObj = [];
  const districtsobj = [];
  for (let i = 0; i < country.length; i++) {
    countryObj.push({ label: country[i], value: country[i] });
  }

  // //to get the states
  const onCountryChange = (paras) => {
    let states = data.filter((e) => e.country == paras);
    console.log("im at country");
    console.log(states);
    states = [...new Set(states.map((item) => item.subcountry))];
    states.sort();

    for (let i = 0; i < states.length; i++) {
      statesObj.push({ label: states[i], value: states[i] });
    }
  };
  //state change
  const onstateChange = (paras) => {
    console.log(paras);
    let districts = data.filter((e) => e.subcountry == paras);
    console.log("Im at districts");
    districts = [...new Set(districts.map((item) => item.name))];
    console.log(districts);
    for (let i = 0; i < districts.length; i++) {
      districtsobj.push({ label: districts[i], value: districts[i] });
    }
  };

  //city
  const onCityChange = (paras) => {
    console.log(paras);
    let city = data.filter((e) => e.name == paras);
  };
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
  }, []);
  //image index
  //pic for image
  const [modalVisible, setModalVisible] = useState(false);
  const [ActivityIndicators, setActivityIndicators] = useState(false);
  const [image, setImage] = useState(null);
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
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    const result = company.filter(checkcom);
    function checkcom(com) {
      return com.value == companyValue;
    }
    console.log(hourvalue);
    // const finalJob = result[0].label;
    // console.log(finalJob);
    // data.job_title = finalJob;
    data.pic = jobpost;
    data.isallow_tocall = isclicked;
    console.log(durationvalue);
    console.log(data, "data");
    async function submitdata() {
      try {
        await fetch("http://192.168.1.10:5000/api/shorttime_job", {
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
  return (
    <View style={styles.container}>
      <ScrollView>
        <Controller
          name="productname"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input]}
              selectionColor={"#5188E3"}
              placeholder="Product Name"
              onChangeText={onChange}
              multiline={true}
              numberOfLines={4}
              value={value}
            />
          )}
        />
        <View style={styles.dropdownCompany}>
          <Controller
            name="Product_type"
            defaultValue=""
            control={control}
            render={({ field: { onChange, value } }) => (
              <DropDownPicker
                style={styles.dropdown}
                open={ProductOpen}
                value={ProducttypeValue} //companyValue
                items={Product}
                setOpen={setProductOpen}
                listMode="MODAL"
                modalTitle="SelecT Product Type"
                modalProps={{
                  animationType: "slide",
                }}
                modalContentContainerStyle={{
                  backgroundColor: "white",
                }}
                setValue={setProducttypeValue}
                setItems={setProduct}
                placeholder="Product Type"
                placeholderStyle={styles.placeholderStyles}
                loading={loading}
                activityIndicatorColor="#5188E3"
                searchable={true}
                searchPlaceholder="Search title here..."
                onOpen={onCompanyOpen}
                onChangeValue={onstateChange}
                zIndex={1000}
                zIndexInverse={3000}
              />
            )}
          />
        </View>
        <Controller
          name="ProductFee"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              selectionColor={"#5188E3"}
              placeholder="Product Fee"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="Rental Duration"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              selectionColor={"#5188E3"}
              placeholder="Rental Duration"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <View style={styles.dropdownCompany}>
          <Controller
            name="District"
            defaultValue=""
            control={control}
            render={({ field: { onChange, value } }) => (
              <DropDownPicker
                style={styles.dropdown}
                open={houropen}
                value={hourvalue} //companyValue
                items={countryObj}
                setOpen={sethouropen}
                setValue={sethourvalue}
                setItems={sethour}
                placeholder="Select Country"
                dropDownContainerStyle={{
                  position: "relative", // to fix scroll issue ... it is by default 'absolute'
                  top: 0, //to fix gap between label box and container
                }}
                placeholderStyle={[styles.placeholderStyles]}
                containerStyle={{ zIndex: 50 }}
                loading={loading}
                listMode="SCROLLVIEW"
                activityIndicatorColor="#5188E3"
                searchable={true}
                searchPlaceholder="Set duration here..."
                onOpen={ondurationOpen}
                onChangeValue={onCountryChange(hourvalue)}
              />
            )}
          />
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-around",
          }}
        >
          <View>
            <Controller
              name="city"
              defaultValue=""
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={styles.dropdownCompany}>
                  <DropDownPicker
                    style={[styles.dropdown, { width: 160 }]}
                    open={cityopen}
                    value={cityvalue} //companyValue
                    items={districtsobj}
                    setOpen={setcityopen}
                    setValue={setcityvalue}
                    setItems={sethour}
                    placeholder="State"
                    dropDownContainerStyle={{
                      position: "relative", // to fix scroll issue ... it is by default 'absolute'
                      top: 0, //to fix gap between label box and container
                    }}
                    placeholderStyle={[styles.placeholderStyles]}
                    containerStyle={{ zIndex: 50, width: 155 }}
                    loading={loading}
                    listMode="SCROLLVIEW"
                    activityIndicatorColor="#5188E3"
                    searchable={true}
                    searchPlaceholder="Set duration here..."
                    onOpen={ondurationOpen}
                    onChangeValue={onstateChange(companyValue)}
                  />
                </View>
              )}
            />
          </View>
          <View>
            <Controller
              name="Job_Title"
              defaultValue=""
              control={control}
              render={({ field: { onChange, value } }) => (
                <DropDownPicker
                  style={[styles.dropdown, { width: 150 }]}
                  open={companyOpen}
                  value={companyValue} //companyValue
                  items={statesObj}
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
                  placeholder="Product Type"
                  placeholderStyle={styles.placeholderStyles}
                  loading={loading}
                  activityIndicatorColor="#5188E3"
                  searchable={true}
                  containerStyle={{ zIndex: 50, width: 150 }}
                  searchPlaceholder="Search title here..."
                  onOpen={onCompanyOpen}
                  onChangeValue={onCityChange(cityvalue)}
                  zIndex={1000}
                  zIndexInverse={3000}
                />
              )}
            />
          </View>
        </View>
        <Controller
          name="Address"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[
                styles.input,
                { height: 130, textAlignVertical: "top", paddingTop: 10 },
              ]}
              selectionColor={"#5188E3"}
              placeholder="Address"
              onChangeText={onChange}
              multiline={true}
              numberOfLines={4}
              value={value}
            />
          )}
        />
        <Controller
          name="Product Description"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[
                styles.input,
                { height: 130, textAlignVertical: "top", paddingTop: 10 },
              ]}
              selectionColor={"#5188E3"}
              placeholder="Product Description"
              onChangeText={onChange}
              multiline={true}
              numberOfLines={4}
              value={value}
            />
          )}
        />
        <Text style={{ marginHorizontal: 10, color: "#333" }}> Add Image</Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
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
              <View>
                <Entypo name="camera" size={24} color="black" />
              </View>
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
            textAlign: "center",
            marginHorizontal: 60,
            paddingVertical: 15,
            borderRadius: 15,
            alignItems: "center",
            marginTop: 20,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          useAngle={45}
        >
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <Text
              style={{
                color: "#fff",
              }}
            >
              Create Post
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    borderRadius: 15,
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
    borderRadius: 10,
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

export default ShortTermRental;
