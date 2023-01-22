import React, { useState } from "react";
import Button from "../Button/button";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([
    {
      title: "React JS",
      imageUrl: "/img/service-img/react.png",
    },
    {
      title: "Next JS",
      imageUrl: "/img/service-img/next.png",
    },
    {
      title: "API",
      imageUrl: "/img/service-img/api.png",
    },
    {
      title: "CSS and SASS",
      imageUrl: "/img/service-img/sass.png",
    },
  ]);
  return (
    <div id="services">
      <div className="text-center mt-44">
        <h2 className="text-2xl">What I Do?</h2>
        <h1 className="text-4xl text-yellow-800 my-10">Services</h1>
      </div>
      <div className="w-3/4 m-auto text-center flex justify-between items-center">
        {services.map(({ title, ...serviceProps }) => (
          <ServiceCard {...serviceProps} title={title} key={title} />
        ))}
      </div>
    </div>
  );
};

export default Services;
