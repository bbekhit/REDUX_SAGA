import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { getUsersRequest } from "./redux/actions/userActions";
import UserList from "./components/UserList";
import { Alert } from "reactstrap";
import NewUserForm from "./components/UserForm";

function App({ getUsersRequest, user: { items, error } }) {
  useEffect(() => {
    getUsersRequest();
  }, []);
  if (error) {
    console.log(error);
  }
  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <h2>Users</h2>
      <Alert color="danger" isOpen={false} toggle={() => {}}></Alert>
      <NewUserForm />
      {!!items && !!items.length && <UserList users={items} />}
    </div>
  );
}

export default connect(({ user }) => ({ user }), {
  getUsersRequest,
})(App);
