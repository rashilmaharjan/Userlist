import React from "react";
import { FemaleAvatars, MaleAvatars } from "./Avatars";

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
              {/* key prop should be givne to the elements inside an array to give the elements a stable identify. */}
              <th scope="row">{i + 1}</th>
              <td>
                {user.gender === "m" ? <MaleAvatars /> : <FemaleAvatars />}
                {/* conditional Rendering, : stands for else condition*/}
              </td>
              <td style={{ color: user.gender === "m" ? "blue" : "pink" }}>
                {user.name}
              </td>
              <td style={{ color: user.gender === "m" ? "red" : "violet" }}>
                {user.gender}
              </td>
              {/* // Receiving props from parents to child component */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
