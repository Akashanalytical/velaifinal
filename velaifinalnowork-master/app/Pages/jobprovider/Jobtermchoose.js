// //import liraries
// import React, { Component } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { useNavigation } from "@react-navigation/native";

// // create a component
// function Jobmainselect() {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           flexDirection: "column",
//           justifyContent: "space-between",
//           marginHorizontal: 20,
//         }}
//       >
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate("jobprovidebottamtab", { screen: "post" })
//           }
//         >
//           <LinearGradient
//             colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
//             style={{
//               height: 42,
//               width: 200,
//               borderRadius: 10,
//               marginTop: 30,
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "row",
//             }}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//             useAngle={45}
//           >
//             <Text
//               style={{
//                 color: "#fff",
//                 fontSize: 18,
//                 fontWeight: "600",
//                 marginHorizontal: 10,
//                 justifyContent: "center",
//               }}
//             >
//               Personal Account
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate("jobprovidebottamtab", { screen: "post" })
//           }
//         >
//           <LinearGradient
//             colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
//             style={{
//               height: 42,
//               width: 200,
//               borderRadius: 10,
//               marginTop: 30,
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "row",
//             }}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//             useAngle={45}
//           >
//             <Text
//               style={{
//                 color: "#fff",
//                 fontSize: 18,
//                 fontWeight: "600",
//                 marginHorizontal: 10,
//                 justifyContent: "center",
//               }}
//             >
//               Business Account
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignContent: "center",
//     alignItems: "center",
//   },
// });

// //make this component available to the app
// export default Jobmainselect;

//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../App";
import { useContext } from "react";
// create a component
function Jobmainselect({ naviagtion }) {
  const { state, dispatch } = useContext(AuthContext);
  console.log(state);
  const navigation = useNavigation();
  const handlecall = () => {
    dispatch({ type: "Set_Job_Provider" });
    navigation.navigate("p_job_provider", { screen: "post" });
  };
  const handlecall2 = () => {
    dispatch({ type: "Set_Job_Provider" });

    navigation.navigate("c_job_provider", { screen: "post" });
  };
  console.log(navigation);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => handlecall()}>
          <LinearGradient
            colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
            style={{
              height: 42,
              width: 200,
              borderRadius: 10,
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            useAngle={45}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
                marginHorizontal: 10,
                justifyContent: "center",
              }}
            >
              Personal Account
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlecall2()}>
          <LinearGradient
            colors={["#16323B", "#1F4C5B", "#1E5966", "#16323B"]}
            style={{
              height: 42,
              width: 200,
              borderRadius: 10,
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            useAngle={45}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
                marginHorizontal: 10,
                justifyContent: "center",
              }}
            >
              Business Account
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default Jobmainselect;
