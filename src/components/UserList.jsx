import React from "react";
import { connect } from "react-redux";
import User from "./User";

const UserList = ({ users, deleteUser, editUser }) => {
  const userList = users.map((user) => {
    return (
      <User
        user={user}
        key={user.id}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    );
  });
  return <div className="user-list">{userList}</div>;
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps)(UserList);