import React from "react";
import { useSelector } from "react-redux";

const Avatar = (props) => {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={`avatar-container ${props.size} ${
        props.border ? "avatar-border" : ""
      } ${props.primary ? "avatar-primary" : ""}`}
      style={{
        filter: theme ? "invert(1)" : "invert(0)",
      }}
    >
      <img className="avatar" src={props.src} alt="Avatar" />
    </div>
  );
};

export default Avatar;
