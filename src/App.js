import { useState } from "react";
import "./App.css";
import { UserForm } from "./component/UserForm";
import { UserTable } from "./component/UserTable";

const App = () => {
  const [userList, setUserList] = useState([]);
  const addUser = (userObj) => {
    // console.log(userObj);
    setUserList([...userList, userObj]); //preserving the previous adduser
  };
  console.log(userList);
  return (
    <div className="container pt-4">
      <h2 className="text-center">UserList</h2>
      <UserForm addUser={addUser} />
      {/* passing props */}
      <UserTable userList={userList} />
    </div>
  );
};

export default App;
