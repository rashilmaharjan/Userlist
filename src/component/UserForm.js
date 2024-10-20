import React, { useState } from "react";

export const UserForm = ({ addUser }) => {
  //Destructuring as soon as pass props
  const [user, setUser] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault(); //prevent from browser to refresh
    addUser(user);
  };
  //   addUser(user)
  //   console.log(user);
  return (
    <div className="w-50 shadow-lg p-5 m-auto mt-5 rounded">
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row g-2">
          <div className="col-md-3">
            <select
              name="gender"
              id="inputState"
              className="form-select"
              required
              defualtvalue=""
              onChange={handleOnChange}
            >
              <option value="">Choose...</option>
              <option value="m">male</option>
              <option value="f">female</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="User name"
              aria-label="User name"
              required
              onChange={handleOnChange}
            />
          </div>

          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};
