import { createContext, useReducer } from "react";
import githubReducer from "../GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // GET INITIAL USERS FOR TESTING PURPOSES

  //SET LOADING
  // const setLoading = () => {
  //   dispatch({ type: "SET_LOADING" });
  // };

  // clear users from state
  // const clearDatas = () => {
  //   dispatch({ type: "CLEAR_DATAS", payload: [] });
  // };

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        // since they are all state, we ae using the state operators instead
        ...state,
        dispatch,
        // searchUsers,
        // clearDatas,
        // getUser,
        // getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
