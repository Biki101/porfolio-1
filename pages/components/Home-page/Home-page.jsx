import React from "react";

const HomePage = () => {
  return (
    <div
      className="home_image bg-cover flex justify-center items-center bg-no-repeat"
      style={{
        backgroundImage: `url("/header.jpg")`,
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="text-left m-auto  w-3/5 text-5xl">
        <p className="text-gray-700 text-6xl">Hi!</p>
        <p className="text-gray-800 mt-5 text-6xl">I am Biki Kumar Thakur</p>
        <p className="text-3xl text-gray-600 mt-5">
          REACT DEVELOPER / FRONT END DESIGNER
        </p>
      </div>
    </div>
  );
};

export default HomePage;
