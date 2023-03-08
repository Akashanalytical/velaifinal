import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Linking,
  RefreshControl,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title, email, number, resume }) => (
  <View style={styles.item}>
    <Text style={styles.title}>USERNAME: {title}</Text>
    <Text style={styles.title}>Email: {email}</Text>
    <Text style={styles.title}>Number: {number}</Text>
    <Text style={styles.title} onPress={() => Linking.openURL(resume)}>
      Resume:
    </Text>
  </View>
);

const JOBApplied = ({ route }) => {
  const [loading, setloading] = useState(true);
  const [refreshing, setRefreshing] = useState(true);
  const [data, setdata] = useState("");
  console.log(route.params);
  useEffect(() => {
    if (route.params.short === "True") {
      submitdata(route.params.id);
    } else {
      submitdata1(route.params.id);
    }
  }, []);
  async function submitdata(paras1) {
    console.log(paras1);
    try {
      await fetch(`http://192.168.1.20:5000/api/job_s_apply_user/${paras1}`, {
        method: "GET",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setRefreshing(false);
          var newdata = result["user"];
          console.log(newdata);
          setdata(newdata);
          setloading(false);
        });
    } catch (error) {
      console.warn(error);
    }
  }
  async function submitdata1(paras1) {
    try {
      await fetch(`http://192.168.1.20:5000/api/job_l_apply_user/${paras1}`, {
        method: "GET",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setRefreshing(false);
          var newdata = result["user"];
          setdata(newdata);
          setloading(false);
        });
    } catch (error) {
      console.warn(error);
    }
  }
  if (loading) {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );
  }
  console.log("im at the user info");
  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            title={item.username}
            email={item.emailid}
            number={item.number}
            resume={item.resume}
          />
        )}
        keyExtractor={(item) => item.id}
        //   keyExtractor={(item) => item.id}
        // refreshControl={
        // //   <RefreshControl
        // //     refreshing={refreshing}
        // //     onRefresh={
        // //       route.params.short == "True"
        // //         ? submitdata(route.params.id)
        // //         : submitdata1(route.params.id)
        // //     }
        // //   />
        // }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default JOBApplied;
