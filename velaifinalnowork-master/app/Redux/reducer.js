import { IS_USERIN } from "./action.js";
import { USER_ID } from "./action.js";

const initialState = {
  IS_user_login: false,
  ID: "",
  user_details_given: false,
  job_provider_info: false,
  job_provider_personal_user_details: false,
  job_Provider_company_user_details: false,
  job_seeker_info: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_USERIN: {
      console.log(action.payload);
      return {
        ...state,
        IS_user_login: true,
        ID: action.payload,
      };
    }
    case "job_provider": {
      return {
        ...state,
        job_provider_info: true,
        job_seeker_info: false,
      };
    }
    case "personal_job_provider": {
      return {
        ...state,
        job_provider_personal_user_details: true,
        job_Provider_company_user_details: false,
      };
    }
    case "remove these": {
      return {
        ...state,
        job_Provider_company: false,
        job_Provider_personal: false,
      };
    }
    case "job_Provider_company": {
      return {
        ...state,
        job_provider_personal_user_details: false,
        job_Provider_company_user_details: true,
      };
    }
    case "im_job_seeker": {
      return {
        ...state,
        job_seeker_info: true,
      };
    }
    case "get_State": {
      return {
        ...state,
      };
    }
    case "User_Details_Given": {
      return {
        ...state,
        user_details_given: true,
      };
    }
    // case USER_ID: {
    //   console.log("im a user");
    //   console.log(action.payload);

    //   return {
    //     ...state,
    //     ID: action.payload,
    //   };
    // }
    case "remove": {
      console.log("im remove my account");

      return {
        IS_user_login: false,
        ID: "",
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
