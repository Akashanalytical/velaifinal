export const Inital_State1 = {
  states: "",
  district: "",
  jobtitle: "",
  duration: "",
  salary: "",
};

export const ShortTimeFilter = (state, action) => {
  switch (action.type) {
    case "SET_STATE": {
      console.log("im here");
      return {
        ...state,
        states: action.payload,
      };
    }
    case "SET_DISTRICT": {
      console.log("im here");
      return {
        ...state,
        district: action.payload,
      };
    }

    case "SET_JOBTITLE": {
      console.log("im here");
      return {
        ...state,
        jobtitle: action.payload,
      };
    }

    case "SET_Duration": {
      console.log("im here");
      return {
        ...state,
        duration: action.payload,
      };
    }

    case "SET_SALARY": {
      return {
        ...state,
        salary: action.payload,
      };
    }
    case "GET Data": {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
