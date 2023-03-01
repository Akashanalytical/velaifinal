import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { useForm, Controller } from "react-hook-form";

export default function Category() {
  return (
    <View style={styles.main}>
      <View style={styles.Top}>
        <View style={styles.Top1}>
          <AntDesign name="back" size={30} color="black" />
        </View>
        <View style={styles.Top1}>
          <FontAwesome5 name="user-circle" size={30} color="black" />
        </View>
      </View>
      <View style={styles.Input}>
        <Controller
          name="company"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={styles.dropdownCompany}>
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
                placeholder="Select job title"
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
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "green",
  },
  Top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  Top1: {
    margin: 10,
  },
});
