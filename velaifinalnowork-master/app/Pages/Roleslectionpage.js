import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import * as Progress from "react-native-progress";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import SvgComponent1 from "../components/roleselectsvg1";
import SvgComponent2 from "../components/roleselectsvg2";
import { LocalizationContext } from "../../App";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
export default function SelectRole({ route, navigation }) {
  const { t, language, setlanguage } = useContext(LocalizationContext);

  const [isSeeker, setisSeeker] = useState(false);
  const [isprovider, setisProvider] = useState(false);
  console.log(route.params);
  const userDetails = route.params.data;
  const id = route.params.id;
  console.log(userDetails);
  console.log(id);
  const moveTo = () => {
    setTimeout(() => {
      // write your functions
      console.log(id);
      navigation.navigate("SelectCategory", {
        userId: id,
        Details: userDetails,
      });
    }, 200);
  };
  const moveTo2 = () => {
    setTimeout(() => {
      // write your functions
      navigation.navigate("SelectCategoryform", {
        userId: id,
        Details: userDetails,
      });
    }, 200);
  };
  return (
    <View style={styles.main}>
      <View style={styles.topConatainer}>
        <View style={styles.topitem}>
          <View style={styles.topitem1}>
            <Text
              style={{
                fontSize: language == "ta" ? 11 : 14,
                fontWeight: "700",
              }}
            >
              {t("roletitle")}
            </Text>
          </View>
          <View style={styles.topitem2}>
            <View>
              <Pressable>
                <MaterialCommunityIcons
                  name="account-voice"
                  size={24}
                  color="black"
                />
              </Pressable>
            </View>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Ionicons name="md-globe-outline" size={24} color="black" />
              <Text>EN</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomItem}>
          <Progress.Bar
            progress={0.5}
            width={350}
            color={"#6BC3FF"}
            borderWidth={3}
            unfilledColor={"#BBB6B6"}
            borderColor={"#BBB6B6"}
            borderRadius={6}
            height={4}
          />
        </View>
      </View>
      <View style={styles.middle}>
        <View
          style={{
            paddingTop: 50,
            paddingLeft: 20,
            paddingBottom: 20,
          }}
        >
          <Text
            style={{ fontWeight: "600", fontSize: language == "ta" ? 13 : 16 }}
          >
            {t("role")}
          </Text>
        </View>
        <View style={styles.cardsItem}>
          <Pressable
            onPress={() => {
              setisSeeker(true);
              setisProvider(false);
              moveTo();
            }}
          >
            <LinearGradient
              // colors={["#1da1f2", "#1da1f2"]}
              colors={["#6BC3FF", "#1da1f2"]}
              style={styles.card1}
            >
              <View style={styles.icon}>
                {!isSeeker ? (
                  <Entypo name="circle" size={24} color="black" />
                ) : (
                  <AntDesign name="checkcircle" size={24} color="green" />
                )}
              </View>
              <View style={styles.Info}>
                <View>
                  <Text
                    style={{
                      fontSize: language == "ta" ? 13 : 14,
                      fontWeight: "600",
                    }}
                  >
                    {t("card1title1")}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: language == "ta" ? 14 : 16,
                      fontWeight: "700",
                    }}
                  >
                    {t("card1title2")}
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: language == "ta" ? 13 : 14,
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  {t("card1title3")}
                </Text>
              </View>
              <View style={styles.image1}>
                <SvgComponent1 />
              </View>
            </LinearGradient>
          </Pressable>
          <Pressable
            onPress={() => {
              setisProvider(true);
              setisSeeker(false);
              moveTo2();
            }}
          >
            <LinearGradient
              // colors={["#1da1f2", "#1da1f2"]}
              colors={["#6BC3FF", "#1da1f2"]}
              style={styles.card2}
            >
              <View style={styles.icon2}>
                {!isprovider ? (
                  <Entypo name="circle" size={24} color="black" />
                ) : (
                  <AntDesign name="checkcircle" size={24} color="green" />
                )}
              </View>
              <View style={styles.Info2}>
                <View>
                  <Text
                    style={{
                      fontSize: language == "ta" ? 12 : 14,
                      fontWeight: "600",
                    }}
                  >
                    {t("card1title1")}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: language == "ta" ? 14 : 16,
                      fontWeight: "700",
                    }}
                  >
                    {t("card2title2")}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: language == "ta" ? 13 : 14,
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  {t("card2title3")}
                </Text>
              </View>
              <View style={styles.image2}>
                <SvgComponent2 />
              </View>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  topConatainer: {
    flex: 0.1,
    justifyContent: "flex-end",
    paddingTop: 50,
  },
  middle: {
    flex: 0.9,
    justifyContent: "space-around",
  },
  bottom: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 30,
  },
  topitem: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginBottom: 10,
  },

  topitem1: {
    flex: 0.6,
    marginHorizontal: 10,
  },
  topitem2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0.3,
  },
  bottomItem: {
    marginHorizontal: 13,
    marginVertical: 5,
  },
  icon: {
    flex: 0.2,
    marginTop: 10,
  },
  icon2: {
    flex: 0.2,
    marginTop: 10,
  },
  Info: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.7,
    marginTop: 10,
  },
  card1: {
    flexDirection: "row",
    marginHorizontal: 20,
    height: 170,
    padding: 10,
    borderRadius: 30,
    marginBottom: 60,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 18.62,
    elevation: 18,
  },
  card2: {
    alignContent: "flex-start",
    flexDirection: "row",
    marginHorizontal: 20,
    height: 160,
    padding: 10,
    width: 280,
    borderRadius: 30,

    position: "relative",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 18.62,
    elevation: 18,
  },
  Info2: {
    flexDirection: "row",
    flex: 0.6,
    flexWrap: "wrap",
    marginTop: 10,
    position: "relative",
  },
  cardsItem: {
    flex: 1,
  },
  image1: {
    marginTop: 30,
    marginRight: -35,
  },
  image2: {
    position: "absolute",
    marginLeft: 160,
    marginTop: 50,
  },
});
