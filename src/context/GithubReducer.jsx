const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    // case "GET_USER":
    //   return {
    //     ...state,
    //     user: action.payload,
    //     loading: false,
    //   };
    // case "GET_REPOS":
    //   return {
    //     ...state,
    //     repos: action.payload,
    //     loading: false,
    //   };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_DATAS":
      return {
        ...state,
        users: action.payload,
      };
    default:
      // return state;
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export default githubReducer;
