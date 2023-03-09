import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import Posts from "../Pages/Post";
import { NavigationContainer } from "@react-navigation/native";
import Landing from "../Pages/Landing";
import { Ionicons } from "@expo/vector-icons";
import JOBApplied from "../Pages/jobAppliedPersons";
import EduInfo2 from "../Pages/EducationProfile2edit";
import NomoreCards from "../nomorecards";
import MainScreen from "../Pages/MainScreen";
import Workexperience2 from "../Pages/workexperience2";
import Mobillogin from "../Pages/MobileLogin";
import UserInfoTwo from "../Pages/UserInfoEdit";
import SelectRole from "../Pages/Roleslectionpage";
import OtpScreen from "../Pages/Otpscreen";
import JobposterDetails from "../Pages/jobPoster";
import UserProfileEdit from "../Pages/ProfileEdit";
import Phoneinput from "../components/phoneinput";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import UserInfo from "../Pages/USerInfo";
import SwiperCard from "../Pages/Post";
import Jobseeker from "../Pages/jobseekerDeatils";
import BottomTAb, {
  Filterscreenmain,
  JobProviderBottomTAb,
  ModifyHome,
  Rentalproviderbottomtab,
  Rentalseekerbottomtab,
} from "./RootTabnav";
import Top from "../components/Topcontainer";
import MessageSelect from "../Pages/message/MessageSelect";
import ShortTermRental from "../Pages/Rentalshort";
import DropDownLanguage from "../components/dropdown/DropDownLanguage";
import Maincategory from "../components/Maincategory/Maincategory";
import SelectCategory from "../components/Maincategory/Selectcategory";
import { Feather } from "@expo/vector-icons";
import { LocalizationContext } from "../../App";
import SelectCategoryform from "../components/Maincategory/Selectcategoryform";
import Userprofile from "../Pages/Userprofile";
import Workexperience from "../Pages/Workexperience";
import EduInfo from "../Pages/Educationprofile";
import Profilepage from "../Pages/Mainprofile";
import Sign from "../Pages/Longform";
import ShortTermForms from "../Pages/ShortTermform";
import PersonProfilepage from "../Pages/Personalprofile";
import { createStackNavigator } from "@react-navigation/stack";
import RentalSwiperCard from "../Pages/Rental/Rentalswipe";
import Jobmainselect from "../Pages/jobprovider/Jobtermchoose";
import Faq from "../components/Documentation/Faq.js";
import Termscondition from "../components/Documentation/Terms&condition";
import Privacypolicy from "../components/Documentation/Privacypolicy";
import New from "../Pages/Filter/NEW";
import Shorttimefilter from "../Pages/Filter/ShortTimefilter/Shorttimefilter";

import Topforjobprovider from "../components/Top/Topforjobprovider";
import CompanyJobProvider from "../Pages/companyjobprovider";
import PersonalJobProvider from "../Pages/personalJobProvider";
const Stack = createStackNavigator();

function CustomHeaderBackImage({ navigation }) {
  return (
    <View
      style={{
        width: "60%",
        flexDirection: "row",
        // backgroundColor: "red",
        alignItems: "center",
      }}
    >
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={require("../images/home.png")}
      />
    </View>
  );
}
function Root({ navigation }) {
  // const navigation = useNavigation();
  const state = useSelector((state) => state);
  console.log(state.job_provider_info);
  console.log("im at the");
  const userlogin = useSelector((state) => state.IS_user_login);
  const personal_job_provider = useSelector(
    (state) => state.job_provider_personal_user_details
  );
  const company_job_provider = useSelector(
    (state) => state.job_Provider_company_user_details
  );

  console.log(userlogin);
  console.log("inside Root");
  console.log(company_job_provider, personal_job_provider);
  console.log(LocalizationContext);
  const { language, t, setlanguage } = useContext(LocalizationContext);
  console.log(language);
  const MyTheme = {
    dark: false,
    colors: {
      border: "#f2f2f2",
    },
  };
  const [isvoice, setisvoice] = useState(true);

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        {userlogin ? (
          <Stack.Screen
            name="botnav"
            component={BottomTAb}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={Mobillogin}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="short"
          component={ShortTermForms}
          options={{
            headerRight: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        {!personal_job_provider ? (
          <Stack.Screen
            name="p_job_provider"
            component={PersonalJobProvider}
            options={{
              headerRight: (props) => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: "70%",
                    }}
                  >
                    <Ionicons name="md-globe-outline" size={24} color="#333" />
                    <Pressable>
                      <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                    </Pressable>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginHorizontal: 12,
                    }}
                  >
                    <Pressable onPress={() => setisvoice(!isvoice)}>
                      {isvoice ? (
                        <MaterialCommunityIcons
                          name="account-voice"
                          size={26}
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
                  </View>
                </View>
              ),
              headerStyle: {
                backgroundColor: "#fff",
              },
              title: "",
            }}
          />
        ) : (
          <></>
        )}
        {!company_job_provider ? (
          <Stack.Screen
            name="c_job_provider"
            component={CompanyJobProvider}
            options={{
              headerRight: (props) => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: "70%",
                    }}
                  >
                    <Ionicons name="md-globe-outline" size={24} color="#333" />
                    <Pressable>
                      <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                    </Pressable>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginHorizontal: 12,
                    }}
                  >
                    <Pressable onPress={() => setisvoice(!isvoice)}>
                      {isvoice ? (
                        <MaterialCommunityIcons
                          name="account-voice"
                          size={26}
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
                  </View>
                </View>
              ),
              headerStyle: {
                backgroundColor: "#fff",
              },
              title: "",
            }}
          />
        ) : (
          <></>
        )}
        <Stack.Screen
          name="Long"
          component={Sign}
          options={{
            headerRight: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Rent"
          component={ShortTermRental}
          options={{
            headerRight: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="jobprovidebottamtab"
          component={JobProviderBottomTAb}
          options={{
            headerTitle: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
                <Topforjobprovider />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },

            headerBackImage: ({ tintColor }) => (
              <CustomHeaderBackImage tintColor={tintColor} />
            ),
            // headerRight: () => <></>,
          }}
          // headerMode="screen"
          // options={{
          //   headerShown: true,
          // headerBackImage: () => {
          //   <Feather name="home" size={24} color="black" />;
          // },
          // // headerStyle: { backgroundColor: "#000000", height: RFValue(102) },
          // // headerTintStyle: { fontWeight: "bold" },
          // // headerTitleStyle: {
          // //   marginLeft: RFValue(72),
          // //   fontFamily: "Aldrich-Regular",
          // //   color: "white",
          // // },
          // }}
        ></Stack.Screen>
        <Stack.Screen
          name="rentalseekerbottamtab"
          component={Rentalseekerbottomtab}
          options={{
            headerTitle: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
                <Topforjobprovider />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },

            headerBackImage: ({ tintColor }) => (
              <CustomHeaderBackImage tintColor={tintColor} />
            ),
            // headerRight: () => <></>,
          }}
        />
        <Stack.Screen
          name="rentalproviderbottamtab"
          component={Rentalproviderbottomtab}
          options={{
            headerTitle: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
                <Topforjobprovider />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },

            headerBackImage: ({ tintColor }) => (
              <CustomHeaderBackImage tintColor={tintColor} />
            ),
            // headerRight: () => <></>,
          }}
        />
        {/* <Stack.Screen
          name="category"
          component={Maincategory}
          options={{ headerShown: false }}
        ></Stack.Screen> */}
        <Stack.Screen
          name="SelectCategory"
          component={SelectCategory}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="nomoreCards"
          component={NomoreCards}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="SelectCategoryform"
          component={SelectCategoryform}
          options={{ headerShown: true }}
        ></Stack.Screen>
        {!company_job_provider && !personal_job_provider ? (
          <Stack.Screen
            name="Jobmainselect"
            component={Jobmainselect}
            options={{
              headerTitle: (props) => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: "15%",
                    }}
                  >
                    <Ionicons name="md-globe-outline" size={24} color="#333" />
                    <Pressable>
                      <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                    </Pressable>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginHorizontal: 12,
                    }}
                  >
                    <Pressable onPress={() => setisvoice(!isvoice)}>
                      {isvoice ? (
                        <MaterialCommunityIcons
                          name="account-voice"
                          size={26}
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
                  </View>
                </View>
              ),
              headerStyle: {
                backgroundColor: "#fff",
              },
              headerBackImage: ({ tintColor }) => (
                <CustomHeaderBackImage tintColor={tintColor} />
              ),
            }}
          />
        ) : (
          <></>
        )}
        <Stack.Screen
          name="Faq"
          component={Faq}
          options={{
            headerTitle: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Termscondition"
          component={Termscondition}
          options={{
            headerTitle: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Privacypolicy"
          component={Privacypolicy}
          options={{
            headerTitle: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="mainprofile"
          component={Profilepage}
          options={{
            headerRight: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        {/* <Stack.Screen
          name="filter"
          component={New}
          options={{ headerShown: true }}
        /> */}
        <Stack.Screen
          name="personalprofile"
          component={PersonProfilepage}
          options={{
            headerRight: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="role"
          component={SelectRole}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Moblog"
          component={Mobillogin}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="editinfo"
          component={UserInfoTwo}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="post"
          component={SwiperCard}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="JobProvider"
          component={JobposterDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Shorttimefilter"
          component={Shorttimefilter}
          options={{
            headerRight: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Longtimefilter"
          component={New}
          options={{
            headerRight: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="MessageSelect"
          component={MessageSelect}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={UserProfileEdit}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Userprofile"
          component={Userprofile}
          options={{
            headerRight: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="filter"
          component={Filterscreenmain}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Homex"
          component={ModifyHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JobApppliedPersons"
          component={JOBApplied}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="eduexp"
          component={EduInfo}
          options={{
            headerRight: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        {/* 
        <Stack.Screen
          name="eduexp"
          component={EduInfo}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="workexp"
          component={Workexperience}
          options={{
            headerRight: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="workexp2"
          component={Workexperience2}
          options={{
            headerRight: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "70%",
                  }}
                >
                  <Ionicons name="md-globe-outline" size={24} color="#333" />
                  <Pressable>
                    <Text style={{ Text: 18, color: "#333" }}>EN</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Pressable onPress={() => setisvoice(!isvoice)}>
                    {isvoice ? (
                      <MaterialCommunityIcons
                        name="account-voice"
                        size={26}
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
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="register"
          component={UserInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="rentalswipe"
          component={RentalSwiperCard}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="eduexp2"
          component={EduInfo2}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Otpscreen"
          component={OtpScreen}
          options={{
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="globe-outline" size={24} color="black" />
                <DropDownLanguage />
              </View>
            ),
            title: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Root;
