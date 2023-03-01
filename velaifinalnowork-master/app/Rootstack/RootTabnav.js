import * as React from "react";
import { Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SwiperCard from "../Pages/Post";
import MainPage from "../Pages/MainScreen";
import Heart from "../Pages/Heart";
import Top from "../components/Topcontainer";
import Profile from "../Pages/Profile";
import Messagemain from "../Pages/message/Messagemain";
import SelectCategory from "../components/Maincategory/Selectcategory";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import Saved from "../Pages/Applies";
import New from "../Pages/Filter/NEW";
import Jobpostermain from "../Pages/jobprovider/Jobpostermainterm";
import Location from "../Pages/Filter/Location";
import Longterm from "../Pages/Filter/Longterm";
import { Foundation } from "@expo/vector-icons";
import Rental from "../Pages/Rental/rental/Rentalmain";
import Jobposterapplied from "../Pages/jobprovider/Jobposterappliied";
import Notificationjobseeker from "../Pages/message/Notificationjobseek";
import Hire from "../Pages/jobprovider/JobhIre";
import JobposterMessagemain from "../Pages/message/Jobposter message/Jobpostermain";
import JobposterNotification from "../Pages/message/Jobposter message/Jobposternotification";
import Rentalseeker from "../Pages/Rental/rental/Rentalsaved";
import Rentalstatus from "../Pages/Rental/rental/RentalStatus";
import RentalMessagemain from "../Pages/message/Rentalmessage/Rentalmessagemain";
import Rentalnotification from "../Pages/message/Rentalmessage/Rentalnotification";
import Rentalproviderpost from "../Pages/Rental/Rentalprovider/Rentalproviderpost";
import Rentalproducthistory from "../Pages/Rental/Rentalprovider/Rentalhistory";
import Rentalproductdetail from "../Pages/Rental/Rentalprovider/Rentedproducts";
import Rentalposternotification from "../Pages/message/Rentalpostermessage/Rentalposternotification";
import RentalposterMessagemain from "../Pages/message/Rentalpostermessage/Rentalpostermessagemain";
import RentalSwiperCard from "../Pages/Rental/Rentalswipe";
import ShortTermForms from "../Pages/ShortTermform";
import LongtimeSwiperCard from "../Swipe/Longtimeswipe";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

import ShorttimeSwiperCard from "../Swipe/Shorttimeswipe";
import Top2 from "../components/Topcontainer2";

const Homestack = createNativeStackNavigator();
function SettingsScreen({ route }) {
  // const Details = route.params.Details;
  // console.log("it is in setting top");
  // console.log(Details);
  return (
    <View style={{ flex: 1 }}>
      {/* <Top />
      <Profile */}
      {/* userDetails={Details} */}
      {/* /> */}
      <SwiperCard />
    </View>
  );
}

export function ModifyHome({ route }) {
  return (
    <Homestack.Navigator>
      <Homestack.Screen
        name="tophome"
        component={SelectCategory}
        options={{
          headerShown: false,
        }}
      />
      <Homestack.Screen
        name="bottomhome"
        component={SwipeChatmainScreen}
        options={{ headerShown: false }}
      />
      <Homestack.Screen
        name="fill"
        component={New}
        options={{ headerShown: true }}
      />
    </Homestack.Navigator>
  );
}

function LikedScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <Heart navigation={navigation} />
    </View>
  );
}
function ApplieScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <Saved navigation={navigation} />
    </View>
  );
}
// function ChatScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Top />
//       <Messagemain />
//     </View>
//   );
// }

function Longtermfilter({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <New />
      {/* <Text>gjuhgdf</Text> */}
    </View>
  );
}

function Shorttermfilter({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications</Text>
    </View>
  );
}
function FilterScreenTabs() {
  return (
    <>
      <Top />
      {/* <LinearGradient
      colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
    style={{ flex: 1, width: "100%", justifyContent: "center" }}
    > */}
      <MealsTabs.Navigator
        tabBarOptions={{
          activeTintColor: "#ffffff",
          inactiveTintColor: "#333",
          showIcon: true,
          pressColor: "#e9eef0",
          scrollEnabled: false,
          tabStyle: {
            borderRadius: 10,
            justifyContent: "center",
            alignContent: "center",
          },
          indicatorStyle: {
            backgroundColor: "#16323B",
            height: "100%",
            borderRadius: 10,
            // marginBottom: 8,
            width: "50%",
          },
          style: {
            backgroundColor: "#fff",
            marginHorizontal: 60,
            borderRadius: 10,
            height: 40,
            width: 280,
          },
          labelStyle: { fontSize: 14 },
        }}
        style={{ flex: 1, width: "100%", justifyContent: "center" }}
      >
        <MealsTabs.Screen name="Shorttime" component={Shorttermfilter} />
        <MealsTabs.Screen name="Longtime" component={Longtermfilter} />
      </MealsTabs.Navigator>
    </>
  );
}

export function Filterscreenmain() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FilterScreenTabs />
    </View>
  );
}

// for jobseeker message.......========

const MealsStack = createStackNavigator();
const MealsTabs = createMaterialTopTabNavigator();

function MealsUpcomingScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Messagemain />
    </View>
  );
}

function MealsPastScreen({ route }) {
  return (
    <View style={{ flex: 1 }}>
      <Notificationjobseeker />
    </View>
  );
}

function MealsScreenTabs() {
  return (
    <>
      <Top2 />
      {/* <LinearGradient
      colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
    style={{ flex: 1, width: "100%", justifyContent: "center" }}
    > */}
      <MealsTabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#333",
          tabBarPressColor: "#707070",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "700",
            marginTop: -5,
            paddingTop: 0,
          },
          // scrollEnabled: false,
          // pressColor: "#e9eef0",
          // tabStyle: {
          //   borderRadius: 10,
          //   justifyContent: "center",
          //   alignContent: "center",
          //   marginVertical: -10,
          // },
          tabBarItemStyle: {
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#1F4C5B",
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            width: "50%",
          },
          tabBarStyle: {
            backgroundColor: "#FFF",
            borderRadius: 20,
            height: 40,
            width: 280,
            marginVertical: 20,
            // marginHorizontal: 90,
            marginHorizontal: "15%",
          },
          // tabBarContentContainerStyle: {
          //   backgroundColor: "red",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   alignContent: "center",
          // },
        }}
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <MealsTabs.Screen name="Messages" component={MealsUpcomingScreen} />
        <MealsTabs.Screen name="Notifications" component={MealsPastScreen} />
      </MealsTabs.Navigator>
    </>
  );
}
function ChatmainScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MealsScreenTabs />
    </View>
  );
}

//main swipe/////////////==80986978657-78697854805

function SwipeMealsUpcomingScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LongtimeSwiperCard />
    </View>
  );
}

function SwipeMealsPastScreen({ route }) {
  return (
    <View style={{ flex: 1 }}>
      <ShorttimeSwiperCard />
    </View>
  );
}

function SwipeMealsScreenTabs() {
  return (
    <>
      <Top2 />
      {/* <LinearGradient
      colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
    style={{ flex: 1, width: "100%", justifyContent: "center" }}
    > */}
      <MealsTabs.Navigator
        screenOptions={{
          tabBarGap: 5,

          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#333",
          tabBarPressColor: "#707070",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "700",
            marginTop: -5,
            paddingTop: 0,
          },

          // showIcon: true,
          // pressColor: "#e9eef0",
          // tabStyle: {
          //   borderRadius: 10,
          //   justifyContent: "center",
          //   alignContent: "center",
          //   marginVertical: -10,
          // },
          tabBarIndicatorStyle: {
            backgroundColor: "#1F4C5B",
            height: "100%",
            borderRadius: 20,
            // marginBottom: 8,
            width: "50%",
          },
          tabBarBounces: true,
          swipeEnabled: false,
          tabBarStyle: {
            marginVertical: 10,
            backgroundColor: "#FFF",
            alignContent: "center",
            margin: 35,
            borderRadius: 20,
            height: 40,
            width: 320,
          },
          // labelStyle: { fontSize: 14 },
        }}
        style={{ flex: 1, width: "100%", justifyContent: "center" }}
      >
        <MealsTabs.Screen
          name="Short-Time Job"
          component={SwipeMealsPastScreen}
        />
        <MealsTabs.Screen
          name="Long-time Job"
          component={SwipeMealsUpcomingScreen}
        />
      </MealsTabs.Navigator>
    </>
  );
}
export function SwipeChatmainScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SwipeMealsScreenTabs />
    </View>
  );
}

// jobposter message.....

function JobposterMealsUpcomingScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <JobposterMessagemain />
    </View>
  );
}

function JobposterMealsPastScreen({ route }) {
  return (
    <View style={{ flex: 1 }}>
      <JobposterNotification />
    </View>
  );
}

function JobMealsScreenTabs() {
  return (
    <>
      {/* <LinearGradient
      colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
    style={{ flex: 1, width: "100%", justifyContent: "center" }}
    > */}
      <MealsTabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#333",
          tabBarPressColor: "#707070",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "700",
            marginTop: -5,
            paddingTop: 0,
          },
          // scrollEnabled: false,
          // pressColor: "#e9eef0",
          // tabStyle: {
          //   borderRadius: 10,
          //   justifyContent: "center",
          //   alignContent: "center",
          //   marginVertical: -10,
          // },
          tabBarItemStyle: {
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#1F4C5B",
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            width: "50%",
          },
          tabBarStyle: {
            marginVertical: 10,
            backgroundColor: "#FFF",
            margin: 60,
            borderRadius: 20,
            height: 40,
            width: 280,
          },
        }}
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <MealsTabs.Screen
          name="Messages"
          component={JobposterMealsUpcomingScreen}
        />
        <MealsTabs.Screen
          name="Notifications"
          component={JobposterMealsPastScreen}
        />
      </MealsTabs.Navigator>
    </>
  );
}
function Jobpostermessage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <JobMealsScreenTabs />
    </View>
  );
}

// Rentalseeker message

function RentalseekerMealsUpcomingScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <RentalMessagemain />
    </View>
  );
}

function RentalseekrrMealsPastScreen({ route }) {
  return (
    <View style={{ flex: 1 }}>
      <Rentalnotification />
    </View>
  );
}

function RentalseekerMealsScreenTabs() {
  return (
    <>
      {/* <LinearGradient
      colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
    style={{ flex: 1, width: "100%", justifyContent: "center" }}
    > */}
      <MealsTabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#333",
          tabBarPressColor: "#707070",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "700",
            marginTop: -5,
            paddingTop: 0,
          },
          // scrollEnabled: false,
          // pressColor: "#e9eef0",
          // tabStyle: {
          //   borderRadius: 10,
          //   justifyContent: "center",
          //   alignContent: "center",
          //   marginVertical: -10,
          // },
          tabBarItemStyle: {
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#1F4C5B",
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            width: "50%",
          },
          tabBarStyle: {
            marginVertical: 10,
            backgroundColor: "#FFF",
            margin: 60,
            borderRadius: 20,
            height: 40,
            width: 280,
          },
        }}
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <MealsTabs.Screen
          name="Messages"
          component={RentalseekerMealsUpcomingScreen}
        />
        <MealsTabs.Screen
          name="Notifications"
          component={RentalseekrrMealsPastScreen}
        />
      </MealsTabs.Navigator>
    </>
  );
}
function Rentalseekermessage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <RentalseekerMealsScreenTabs />
    </View>
  );
}

// rental provider message
function RentalposterMealsUpcomingScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <RentalposterMessagemain />
    </View>
  );
}

function RentalposterMealsPastScreen({ route }) {
  return (
    <View style={{ flex: 1 }}>
      <Rentalposternotification />
    </View>
  );
}

function RentalposterMealsScreenTabs() {
  return (
    <>
      {/* <LinearGradient
      colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
    style={{ flex: 1, width: "100%", justifyContent: "center" }}
    > */}
      <MealsTabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#333",
          tabBarPressColor: "#707070",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "700",
            marginTop: -5,
            paddingTop: 0,
          },
          // scrollEnabled: false,
          // pressColor: "#e9eef0",
          // tabStyle: {
          //   borderRadius: 10,
          //   justifyContent: "center",
          //   alignContent: "center",
          //   marginVertical: -10,
          // },
          tabBarItemStyle: {
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#1F4C5B",
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            width: "50%",
          },
          tabBarStyle: {
            marginVertical: 10,
            backgroundColor: "#FFF",
            margin: 60,
            borderRadius: 20,
            height: 40,
            width: 280,
          },
        }}
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <MealsTabs.Screen
          name="Messages"
          component={RentalposterMealsUpcomingScreen}
        />
        <MealsTabs.Screen
          name="Notifications"
          component={RentalposterMealsPastScreen}
        />
      </MealsTabs.Navigator>
    </>
  );
}
function Rentalpostermessage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <RentalposterMealsScreenTabs />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomTAb({ route }) {
  // console.log("im at bot nav");
  // console.log(route.params.Details);
  return (
    <>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Homes") {
              iconName = focused ? "home-sharp" : "ios-home-outline";
            } else if (route.name == "liked") {
              iconName = focused ? "heart" : "ios-heart-outline";
            } else if (route.name == "applied") {
              iconName = focused
                ? "checkmark-circle"
                : "checkmark-circle-outline";
            } else if (route.name == "messagefake") {
              iconName = focused
                ? "chatbubble-ellipses"
                : "chatbubble-ellipses-outline";
            }
            return (
              <Ionicons name={iconName} size={28} color={color} fill={"red"} />
            );
          },
          tabBarActiveTintColor: "#1E5966",
          tabBarInactiveTintColor: "#333",
          headerShown: false,
          tabBarPosition: "bottom",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            shadowColor: "#333",
            shadowOffset: {
              width: 3,
              height: 6,
            },
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 8,
            height: "7%",
          },
        })}
      >
        <Tab.Screen
          name="Homes"
          component={ModifyHome}
          options={{ title: "Home" }}
          // initialParams={{ userID: route.params.userId }}
        />
        {/* <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{ title: "" }} */}
        {/* initialParams={{ Details: route.params.Details }} */}
        {/* /> */}
        {/* <Tab.Screen
        name="Select"
        component={SwiperCard}
        options={{ title: "" }}
        // initialParams={{ Details: route.params.Details }}
      /> */}

        <Tab.Screen
          name="liked"
          component={LikedScreen}
          options={{ title: "Saved" }}
        />
        <Tab.Screen
          name="applied"
          component={ApplieScreen}
          options={{ title: "Applied" }}
        />

        {/* <Tab.Screen name="chat" component={ChatScreen} options={{ title: "" }} /> */}
        <Tab.Screen
          name="messagefake"
          component={ChatmainScreen}
          options={{ title: "message" }}
        />
        {/* <Tab.Screen
        name="filter"
        component={filterscreenmain}
        options={{ title: "message" }}
      /> */}
      </Tab.Navigator>
    </>
  );
}

function Jobapplies() {
  return (
    <View style={{ flex: 1 }}>
      <Jobposterapplied />
    </View>
  );
}

export function JobProviderBottomTAb({ route }) {
  // console.log("im at bot nav");
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Homes") {
          } else if (route.name == "Hire") {
            iconName = focused ? "ios-people-sharp" : "ios-people-outline";
          } else if (route.name == "applied") {
            iconName = focused
              ? "ios-checkmark-circle-sharp"
              : "checkmark-circle-outline";
          } else if (route.name == "post") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name == "messagefake") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
          }
          // <Ionicons name="add-circle-outline" size={24} color="black" />;
          return (
            <Ionicons name={iconName} size={28} color={color} fill={"red"} />
          );
        },
        tabBarActiveTintColor: "#1E5966",
        tabBarInactiveTintColor: "#333",
        headerShown: false,
        tabBarPosition: "bottom",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          shadowColor: "#333",
          shadowOffset: {
            width: 3,
            height: 6,
          },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 8,
          height: "7%",
        },
      })}
    >
      {/* <Tab.Screen
        name="Homes"
        component={ModifyHome}
        options={{ title: "Home" }}
        // initialParams={{ userID: route.params.userId }}
      /> */}
      {/* <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{ title: "" }} */}
      {/* initialParams={{ Details: route.params.Details }} */}
      {/* /> */}
      {/* <Tab.Screen
        name="Select"
        component={SwiperCard}
        options={{ title: "" }}
        // initialParams={{ Details: route.params.Details }}
      /> */}

      <Tab.Screen name="Hire" component={Hire} options={{ title: "Hire" }} />

      <Tab.Screen
        name="post"
        component={Jobpostermain}
        options={{ title: "Post" }}
      />
      <Tab.Screen
        name="applied"
        component={Jobapplies}
        options={{ title: "Applied" }}
      />

      {/* <Tab.Screen name="chat" component={ChatScreen} options={{ title: "" }} /> */}
      <Tab.Screen
        name="messagefake"
        component={Jobpostermessage}
        options={{ title: "message" }}
      />
      {/* <Tab.Screen
        name="filter"
        component={filterscreenmain}
        options={{ title: "message" }}
      /> */}
    </Tab.Navigator>
  );
}

export function Rentalseekerbottomtab({ route }) {
  // console.log("im at bot nav");
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Homes") {
            iconName = focused ? "ios-home-outline" : "ios-home-outline";
          } else if (route.name == "liked") {
            iconName = focused ? "ios-heart" : "ios-heart-outline";
          } else if (route.name == "applied") {
            iconName = focused ? "ios-flash-sharp" : "ios-flash-outline";
          } else if (route.name == "post") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name == "messagefake") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
          }
          // <Ionicons name="add-circle-outline" size={24} color="black" />;
          return (
            <Ionicons name={iconName} size={28} color={color} fill={"red"} />
          );
        },
        tabBarActiveTintColor: "#1E5966",
        tabBarInactiveTintColor: "#333",
        headerShown: false,
        tabBarPosition: "bottom",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          shadowColor: "#333",
          shadowOffset: {
            width: 3,
            height: 6,
          },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 8,
          height: "7%",
        },
      })}
    >
      {/* <Tab.Screen
        name="Homes"
        component={ModifyHome}
        options={{ title: "Home" }}
        // initialParams={{ userID: route.params.userId }}
      /> */}
      {/* <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{ title: "" }} */}
      {/* initialParams={{ Details: route.params.Details }} */}
      {/* /> */}
      {/* <Tab.Screen
        name="Select"
        component={SwiperCard}
        options={{ title: "" }}
        // initialParams={{ Details: route.params.Details }}
      /> */}
      <Tab.Screen
        name="post"
        component={Rental}
        options={{ title: "Categories" }}
      />

      <Tab.Screen
        name="liked"
        component={Rentalseeker}
        options={{ title: "Saved" }}
      />
      <Tab.Screen
        name="applied"
        component={Rentalstatus}
        options={{ title: "Status" }}
      />

      {/* <Tab.Screen name="chat" component={ChatScreen} options={{ title: "" }} /> */}
      <Tab.Screen
        name="messagefake"
        component={Rentalseekermessage}
        options={{ title: "message" }}
      />
      {/* <Tab.Screen
        name="filter"
        component={filterscreenmain}
        options={{ title: "message" }}
      /> */}
    </Tab.Navigator>
  );
}

export function Rentalproviderbottomtab({ route }) {
  // console.log("im at bot nav");
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Homes") {
          } else if (route.name == "liked") {
            iconName = focused ? "ios-cube" : "ios-cube-outline";
          } else if (route.name == "history") {
            iconName = focused ? "timer" : "timer-outline";
          } else if (route.name == "post") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name == "messagefake") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
          }
          // <Ionicons name="add-circle-outline" size={24} color="black" />;
          return (
            <Ionicons name={iconName} size={28} color={color} fill={"red"} />
          );
        },
        tabBarActiveTintColor: "#1E5966",
        tabBarInactiveTintColor: "#333",
        headerShown: false,
        tabBarPosition: "bottom",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          shadowColor: "#333",
          shadowOffset: {
            width: 3,
            height: 6,
          },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 8,
          height: "7%",
        },
      })}
    >
      {/* <Tab.Screen
        name="Homes"
        component={ModifyHome}
        options={{ title: "Home" }}
        // initialParams={{ userID: route.params.userId }}
      /> */}
      {/* <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{ title: "" }} */}
      {/* initialParams={{ Details: route.params.Details }} */}
      {/* /> */}
      {/* <Tab.Screen
        name="Select"
        component={SwiperCard}
        options={{ title: "" }}
        // initialParams={{ Details: route.params.Details }}
      /> */}
      <Tab.Screen
        name="liked"
        component={Rentalproductdetail}
        options={{ title: "Rented" }}
      />
      <Tab.Screen
        name="post"
        component={Rentalproviderpost}
        options={{ title: "Post" }}
      />
      <Tab.Screen
        name="history"
        component={Rentalproducthistory}
        options={{ title: "History" }}
      />
      {/* <Tab.Screen name="chat" component={ChatScreen} options={{ title: "" }} /> */}
      <Tab.Screen
        name="messagefake"
        component={Rentalpostermessage}
        options={{ title: "message" }}
      />
      {/* <Tab.Screen
        name="filter"
        component={filterscreenmain}
        options={{ title: "message" }}
      /> */}
    </Tab.Navigator>
  );
}
