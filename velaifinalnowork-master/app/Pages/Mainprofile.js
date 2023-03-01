// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import React from "react";
// import { FontAwesome } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
// import { ScrollView } from "react-native-gesture-handler";
// import { Feather } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { SimpleLineIcons } from "@expo/vector-icons";
// import { Octicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
// export default function Profilepage({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.iconstotal}>
//         <View
//           style={{
//             flexGrow: 0.3,
//             alignItems: "center",
//           }}
//         >
//           <FontAwesome name="user-circle" size={80} color="#D9D9D9" />
//           <MaterialCommunityIcons
//             name="pencil-circle"
//             size={33}
//             color="#1E5966"
//             style={{ position: "relative", bottom: 28, left: 30 }}
//           />
//         </View>
//         <View style={styles.top2}>
//           <View style={{ marginVertical: 10 }}>
//             <Text style={{ fontSize: 18, color: "#333" }}>+91 8220553838</Text>
//           </View>
//           <View>
//             <Text style={{ fontSize: 18, color: "#333" }}>Adayar,chennai</Text>
//           </View>
//         </View>
//       </View>
//       <ScrollView style={{ marginHorizontal: 20 }} decelerationRate="fast">
//         <View
//           style={{
//             height: 130,
//             justifyContent: "center",
//             alignContent: "center",
//             alignItems: "center",
//             borderColor: "#D9D9D9",
//             borderBottomWidth: 1,
//           }}
//         >
//           <View style={{ marginBottom: 10 }}>
//             <Text>Need to Add Your Details</Text>
//           </View>
//           <View>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("Userprofile")}
//               // style={{
//               //   backgroundColor: "green",
//               //   padding: 10,
//               //   borderRadius: 10,
//               // }}
//             >
//               <LinearGradient
//                 colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
//                 style={{
//                   height: 49,
//                   width: 290,
//                   justifyContent: "center",
//                   alignItems: "center",
//                   // marginHorizontal: 50,
//                   borderRadius: 10,
//                   // opacity: mobilenumber.length > 1 && !istick ? 1 : 0.5,
//                   // marginTop: 30,
//                 }}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 1 }}
//                 useAngle={45}
//               >
//                 <Text
//                   style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}
//                 >
//                   Add Personal Details
//                 </Text>
//               </LinearGradient>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View
//           style={{
//             height: 80,
//             justifyContent: "center",
//             alignContent: "center",
//             alignItems: "flex-start",
//             paddingLeft: 30,
//             borderColor: "#D9D9D9",
//             borderBottomWidth: 1,
//           }}
//         >
//           <TouchableOpacity
//             style={{ flexDirection: "row", alignItems: "center" }}
//             onPress={() => {
//               navigation.navigate("personalprofile");
//             }}
//           >
//             <View
//               style={{
//                 marginBottom: 10,
//                 justifyContent: "center",
//                 alignContent: "center",
//                 alignItems: "center",
//                 flexDirection: "row",
//               }}
//             >
//               <Feather name="edit" size={24} color="black" />
//               <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
//                 Update Profile
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             height: 80,
//             justifyContent: "center",
//             alignContent: "center",
//             alignItems: "flex-start",
//             paddingLeft: 30,
//             borderColor: "#D9D9D9",
//             borderBottomWidth: 1,
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate("Privacypolicy");
//             }}
//           >
//             <View
//               style={{
//                 marginBottom: 10,
//                 justifyContent: "center",
//                 alignContent: "center",
//                 alignItems: "center",
//                 flexDirection: "row",
//               }}
//             >
//               <MaterialIcons name="security" size={24} color="black" />
//               <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
//                 Privacy Policies
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             height: 80,
//             justifyContent: "center",
//             alignContent: "center",
//             alignItems: "flex-start",
//             paddingLeft: 30,
//             borderColor: "#D9D9D9",
//             borderBottomWidth: 1,
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate("Termscondition");
//             }}
//           >
//             <View
//               style={{
//                 marginBottom: 10,
//                 justifyContent: "center",
//                 alignContent: "center",
//                 alignItems: "center",
//                 flexDirection: "row",
//               }}
//             >
//               <Ionicons
//                 name="ios-information-circle-outline"
//                 size={24}
//                 color="black"
//               />
//               <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
//                 Terms and Conditions
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             height: 80,
//             justifyContent: "center",
//             alignContent: "center",
//             alignItems: "flex-start",
//             paddingLeft: 30,
//             borderColor: "#D9D9D9",
//             borderBottomWidth: 1,
//           }}
//         >
//           <TouchableOpacity>
//             <View
//               style={{
//                 marginBottom: 10,
//                 justifyContent: "center",
//                 alignContent: "center",
//                 alignItems: "center",
//                 flexDirection: "row",
//               }}
//             >
//               <AntDesign name="customerservice" size={24} color="black" />

//               <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
//                 Help
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             height: 80,
//             justifyContent: "center",
//             alignContent: "center",
//             alignItems: "flex-start",
//             paddingLeft: 30,
//             borderColor: "#D9D9D9",
//             borderBottomWidth: 1,
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate("Faq");
//             }}
//           >
//             <View
//               style={{
//                 marginBottom: 10,
//                 justifyContent: "center",
//                 alignContent: "center",
//                 alignItems: "center",
//                 flexDirection: "row",
//               }}
//             >
//               <SimpleLineIcons name="question" size={24} color="black" />
//               <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
//                 FAQ
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             height: 80,
//             justifyContent: "center",
//             alignContent: "center",
//             alignItems: "flex-start",
//             paddingLeft: 30,
//             borderColor: "#D9D9D9",
//             borderBottomWidth: 1,
//           }}
//         >
//           <TouchableOpacity
//             style={{ flexDirection: "row", alignItems: "center" }}
//           >
//             <View
//               style={{
//                 marginBottom: 10,
//                 justifyContent: "center",
//                 alignContent: "center",
//                 alignItems: "center",
//                 flexDirection: "row",
//               }}
//             >
//               <Octicons name="arrow-switch" size={24} color="black" />
//               <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
//                 Switch Account
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             height: 80,
//             justifyContent: "center",
//             alignContent: "center",
//             alignItems: "flex-start",
//             paddingLeft: 30,
//             borderColor: "#D9D9D9",
//             borderBottomWidth: 1,
//           }}
//         >
//           <TouchableOpacity
//             style={{ flexDirection: "row", alignItems: "center" }}
//           >
//             <View
//               style={{
//                 marginBottom: 10,
//                 justifyContent: "center",
//                 alignContent: "center",
//                 alignItems: "center",
//                 flexDirection: "row",
//               }}
//             >
//               <Ionicons name="person-add-outline" size={24} color="black" />
//               <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
//                 Add Account
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             height: 80,
//             justifyContent: "center",
//             alignContent: "center",
//             alignItems: "flex-start",
//             paddingLeft: 30,
//             borderColor: "#D9D9D9",
//             borderBottomWidth: 1,
//           }}
//         >
//           <TouchableOpacity
//             style={{ flexDirection: "row", alignItems: "center" }}
//           >
//             <View
//               style={{
//                 marginBottom: 10,
//                 justifyContent: "center",
//                 alignContent: "center",
//                 alignItems: "center",
//                 flexDirection: "row",
//               }}
//             >
//               <SimpleLineIcons name="logout" size={24} color="black" />
//               <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
//                 Log out
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   title: {
//     justifyContent: "center",
//     alignItems: "center",
//     height: 40,
//   },
//   top2: {
//     flexGrow: 0.6,
//     height: "100%",
//     justifyContent: "center",
//     marginBottom: 50,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   edutext: {
//     fontSize: 17,
//     fontWeight: "400",
//     paddingLeft: 5,
//     color: "#1E5966",
//     paddingTop: 8,
//   },
//   titlestyle: {
//     fontWeight: "500",
//     fontSize: 22,
//   },
//   iconstotal: {
//     alignItems: "center",
//     alignContent: "center",
//     paddingTop: 20,
//     justifyContent: "space-around",
//     height: 200,
//     flexDirection: "row",
//   },
//   education: {
//     flexDirection: "row",
//     width: "50%",
//     justifyContent: "center",
//     alignItems: "flex-end",
//     marginVertical: 10,
//   },
//   centeredView: {
//     flex: 1,
//     width: "90%",
//     marginHorizontal: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 25,
//     borderColor: "#707070",
//     padding: 100,
//     height: "42%",
//     alignItems: "center",
//     shadowColor: "#000",
//     borderWidth: 2,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//   },
//   openButton: {
//     backgroundColor: "#F194FF",
//     borderRadius: 20,
//     padding: 10,
//     elevation: 10,
//   },
//   input: {
//     borderRadius: 10,
//     height: 50,
//     backgroundColor: "#fff",
//     borderColor: "#707070",
//     width: "100%",
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     borderWidth: 1,
//     width: "90%",
//     padding: 10,
//     marginHorizontal: 20,
//     marginVertical: 10,
//     justifyContent: "center",
//   },
//   inputs: {
//     height: 40,
//     margin: 12,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 10,
//   },
// });

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../App";
import { useContext } from "react";
import { LocalizationContext } from "../../App";
export default function Profilepage({ navigation, route }) {
  const { t, language, setlanguage } = useContext(LocalizationContext);

  //set profile
  const [profilemodal, setprofilemodal] = useState(false);
  const [profileActivityIndicators, setprofileActivityIndicators] =
    useState(false);
  const [profile, setprofile] = useState(null);
  const [profilepic, setprofilepic] = useState("");
  // to addd the

  //add image to backend
  const addprofile = async (paras1, paras2) => {
    console.log("im at loading the image");
    const body = {};
    body.userType = paras2;
    body.user_id = 4;
    body.profilepic = paras1;
    console.log(body);
    try {
      await fetch(`http://192.168.1.19:5000/api/prfilepic_update`, {
        method: "PUT",
        mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        });
    } catch (error) {
      console.log(error);
    }
  };
  //to get the image
  async function takeAndUploadPhotoAsync1(paras) {
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
    setprofileActivityIndicators(true);
    console.log("result is " + result);
    console.log(result);
    let localUri = result.assets[0]["uri"];
    console.log(localUri);
    setprofile(localUri);
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
        await fetch(`http://192.168.1.19:5000/api/job_post/aws_upload/4`, {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: "same-origin", // include, *same-origin, omit
          headers: {
            Accept: "application/json",
            // "Content-Type": "multipart/form-data",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formdata, // body data type must match "Content-Type" header
        })
          .then((response) => response.json())
          .then((result) => {
            console.log("im at the a profile image");
            console.log(result);
            const usertype = handleUpdate1(state);
            console.log(usertype);
            setprofilepic(result["updated"]);
            console.log("i am going to call the function to upload a image");
            addprofile(result["updated"], usertype);
            getdataofuser();
            setprofileActivityIndicators(false);
            setprofilemodal(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
    submitdata();
  }

  const { state, dispatch } = useContext(AuthContext);
  const [data, setdata] = useState({});
  console.log(state);
  console.log("Im at job profile");
  console.log(route.params);
  console.log(state.job_provider_info);
  useEffect(() => {
    getdataofuser();
  }, []);
  const getdataofuser = async () => {
    try {
      await fetch(`http://192.168.1.19:5000/api/profile_details_show`, {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(route.params),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setdata(result["profile_info"]);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = (paras) => {
    for (let i = 0; i < Object.keys(paras).length; i++) {
      if (
        !(Object.keys(paras)[i] == "userdeatils") &&
        Object.values(paras)[i]
      ) {
        console.log(Object.keys(paras)[i]);
        navigation.navigate("personalprofile", {
          userType: Object.keys(paras)[i],
          user_id: 4,
        });
      }
    }
  };
  const handleUpdate1 = (paras) => {
    for (let i = 0; i < Object.keys(paras).length; i++) {
      if (
        !(Object.keys(paras)[i] == "userdeatils") &&
        Object.values(paras)[i]
      ) {
        return Object.keys(paras)[i];
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconstotal}>
        <View
          style={{
            flexGrow: 0.3,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setprofilemodal(true)}>
            {!(data.profilepic == null) ? (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={{ uri: data.profilepic }}
                  style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
                />
              </View>
            ) : (
              <>
                <FontAwesome name="user-circle" size={80} color="#D9D9D9" />
                <MaterialCommunityIcons
                  name="pencil-circle"
                  size={33}
                  color="#1E5966"
                  style={{ position: "relative", bottom: 28, left: 30 }}
                />
              </>
            )}
          </TouchableOpacity>
          <Modal
            animationType="slide"
            //animationInTiming = {13900}
            transparent={true}
            visible={profilemodal}
            animationOut="slide"
            swipeDirection="down"
            onRequestClose={() => {
              setprofilemodal(!profilemodal);
              setprofileActivityIndicators(false);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {profileActivityIndicators ? (
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
                        backgroundColor: "#2196F3",
                      }}
                      onPress={() => {
                        takeAndUploadPhotoAsync1("camera");
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
                        backgroundColor: "#2196F3",
                        marginTop: 20,
                      }}
                      onPress={() => takeAndUploadPhotoAsync1("files")}
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
        </View>
        <View style={styles.top2}>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 18, color: "#333" }}>{data.number}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 18, color: "#333" }}>{data.location}</Text>
          </View>
        </View>
      </View>
      <ScrollView style={{ marginHorizontal: 20 }}>
        {!state.job_provider_info ? (
          <View
            style={{
              height: 130,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderColor: "#D9D9D9",
              borderBottomWidth: 1,
            }}
          >
            <View style={{ marginBottom: 10 }}>
              <Text>Need to Add Your Details</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Userprofile")}
                // style={{
                //   backgroundColor: "green",
                //   padding: 10,
                //   borderRadius: 10,
                // }}
              >
                <LinearGradient
                  colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
                  style={{
                    height: 49,
                    width: 290,
                    justifyContent: "center",
                    alignItems: "center",
                    // marginHorizontal: 50,
                    borderRadius: 10,
                    // opacity: mobilenumber.length > 1 && !istick ? 1 : 0.5,
                    // marginTop: 30,
                  }}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  useAngle={45}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}
                  >
                    Add Personal Details
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <></>
        )}
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => {
              handleUpdate(state);
            }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Feather name="edit" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Update Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Privacypolicy");
            }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <MaterialIcons name="security" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Privacy Policies
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Termscondition");
            }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="ios-information-circle-outline"
                size={24}
                color="black"
              />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Terms and Conditions
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <AntDesign name="customerservice" size={24} color="black" />

              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Help
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Faq");
            }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <SimpleLineIcons name="question" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                FAQ
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Octicons name="arrow-switch" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Switch Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Ionicons name="person-add-outline" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Add Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-start",
            paddingLeft: 30,
            borderColor: "#D9D9D9",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <SimpleLineIcons name="logout" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
                Log out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  top2: {
    flexGrow: 0.6,
    height: "100%",
    justifyContent: "center",
    marginBottom: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    justifyContent: "space-around",
    height: 200,
    flexDirection: "row",
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
