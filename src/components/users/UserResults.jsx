import { useContext } from "react";
import React from "react";
import Spinner from "../layouts/Spinner";
import UserItems from "../users/UserItems";
import GithubContext from "../../context/github/GithubContext";

const UserResults = () => {
  let { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
