export const Inital_State1 = {
  states: "$",
  district: "$",
  job_title: "$",
  duration: "$",
  salary: "$",
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
    case "HASH_VALUES": {
      console.log("im here");
      return {
        states: "$",
        district: "$",
        job_title: "$",
        duration: "$",
        salary: "$",
      };
    }
    case "SET_DISTRICT": {
      console.log("im here");
      console.log(action.payload);
      return {
        ...state,
        district: action.payload,
      };
    }

    case "SET_JOBTITLE": {
      console.log("im here");
      return {
        ...state,
        job_title: action.payload,
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
    case "RESET1": {
      return {
        states: "$",
        district: "$",
        job_title: "$",
        duration: "$",
        salary: "$",
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
