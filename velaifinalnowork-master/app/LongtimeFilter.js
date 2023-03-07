export const Inital_State2 = {
  states: "$",
  district: "$",
  job_title: "$",
  duration: "$",
  salary: "$",
  workmode: "$",
  education: "$",
  experience: "$",
  companyname: "$",
};

export const LongTimeFilter = (state, action) => {
  switch (action.type) {
    case "SET_STATE_long": {
      console.log("im here");
      return {
        ...state,
        states: action.payload,
      };
    }
    case "SET_DISTRICT_long": {
      console.log("im here");
      return {
        ...state,
        district: action.payload,
      };
    }

    case "SET_JOBTITLE_long": {
      console.log("im here");
      return {
        ...state,
        jobtitle: action.payload,
      };
    }

    case "SET_Duration_long": {
      console.log("im here");
      return {
        ...state,
        duration: action.payload,
      };
    }

    case "SET_SALARY_long": {
      return {
        ...state,
        salary: action.payload,
      };
    }
    case "SET_WORKMODE_long": {
      return {
        ...state,
        workmode: action.payload,
      };
    }
    case "SET_EDUCATION_long": {
      return {
        ...state,
        education: action.payload,
      };
    }
    case "SET_experience_long": {
      return {
        ...state,
        experience: action.payload,
      };
    }
    case "RESET": {
      return {
        states: "$",
        district: "$",
        job_title: "$",
        duration: "$",
        salary: "$",
        workmode: "$",
        education: "$",
        experience: "$",
        companyname: "$",
      };
    }
    case "SET_Company_NAME_long": {
      return {
        ...state,
        companyname: action.payload,
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
