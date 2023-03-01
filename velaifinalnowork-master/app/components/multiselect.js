import React, { useState } from "react";
import { Text, View } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: "Juventus",
    id: "JUVE",
  },
  {
    item: "Real Madrid",
    id: "RM",
  },
  {
    item: "Barcelona",
    id: "BR",
  },
  {
    item: "PSG",
    id: "PSG",
  },
  {
    item: "FC Bayern Munich",
    id: "FBM",
  },
  {
    item: "Manchester United FC",
    id: "MUN",
  },
  {
    item: "Manchester City FC",
    id: "MCI",
  },
  {
    item: "Everton FC",
    id: "EVE",
  },
  {
    item: "Tottenham Hotspur FC",
    id: "TOT",
  },
  {
    item: "Chelsea FC",
    id: "CHE",
  },
  {
    item: "Liverpool FC",
    id: "LIV",
  },
  {
    item: "Arsenal FC",
    id: "ARS",
  },

  {
    item: "Leicester City FC",
    id: "LEI",
  },
];

function Multi() {
  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);
  return (
    <View
      style={{
        marginTop: 0,
        marginHorizontal: 18,
        backgroundColor: "white",
        padding: 5,
      }}
    >
      <View style={{ height: 0 }} />
      <SelectBox
        label="select you skill set"
        options={K_OPTIONS}
        width="100%"
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
        containerStyle={{
          backgroundColor: "white",
        }}
        labelStyle={{
          display: "none",
        }}
        inputFilterContainerStyle={{
          backgroundColor: "white",
          padding: 0,
        }}
        optionContainerStyle={{
          backgroundColor: "white",
          padding: 2,
        }}
        multiOptionContainerStyle={{
          backgroundColor: "#FF5AB2",
        }}
        multiOptionsLabelStyle={{
          fontSize: 10,
          fontWeight: "600",
        }}
        toggleIconColor="black"
        searchIconColor="black"
        arrowIconColor="black"
      />
    </View>
  );

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], "id"));
  }

  function onChange() {
    return (val) => setSelectedTeam(val);
  }
}

export default Multi;
