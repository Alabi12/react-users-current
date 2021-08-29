import React, { Component } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: "Zak", email: "zak@email.com", gen: 23, id: "84379843.fsdjhj" },
        { name: "Kobi", email: "kobu@email.com", gen: 3, id: "skdlj4839483" },
      ],
    };
  }

  handleAddUser = (newUser) => {
    newUser.id = Math.random().toString();
    this.setState({
      users: [newUser, ...this.state.users],
    });
  };

  handleDeleteUser = (userId) => {
    const savedUsers = this.state.users.filter((user) => {
      return user.id !== userId;
    });
    this.setState({ users: savedUsers });
  };

  handleEditUser = (updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <UserForm addUser={this.handleAddUser} />
          </div>
          <div className="col">
            <UserList
              users={this.state.users}
              deleteUser={this.handleDeleteUser}
              editUser={this.handleEditUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;