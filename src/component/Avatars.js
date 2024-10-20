import React from "react";
import man from "../Assets/man.png";
import woman from "../Assets/woman.png";

export const MaleAvatars = () => {
  return (
    <div>
      <img src={man} alt="" width="50px" />
    </div>
  );
};

export const FemaleAvatars = () => {
  return (
    <div>
      <img src={woman} alt="" width="50px" />
    </div>
  );
};
