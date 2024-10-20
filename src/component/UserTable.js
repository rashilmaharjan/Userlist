import React from "react";

export const UserTable = ({ userList }) => {
  return (
    <div className="mt-5 shadow-lg p-2 rounded">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, i) => (
            <tr key={i}>
              {/* key prop should be givne to the elements inside an array to give the elements a sabel identify. */}
              <th scope="row">{i + 1}</th>
              <td></td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              {/* // Receiving props from parents to child component */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
