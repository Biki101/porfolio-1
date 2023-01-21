import React from "react";
import propTypes from "react";

const Button = (props) => {
  return (
    <div
      className={`${
        props.round
          ? "bg-red-800 cursor-pointer text-white px-4 py-3 w-40 text-center rounded-full hover:bg-black mt-10"
          : ""
      }`}
    >
      {props.title}
    </div>
  );
};

export default Button;

Button.protoTypes = {
  title: propTypes.string,
  round: propTypes.bool,
};
