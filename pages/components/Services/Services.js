import React, { useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([
    {
      title: "React JS",
      imageUrl: "/img/service-img/react.png",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quasi quam eos. Possimus blanditiis modi quia sequi esse quae doloribus!",
    },
    {
      title: "Next JS",
      imageUrl: "/img/service-img/next.png",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quasi quam eos. Possimus blanditiis modi quia sequi esse quae doloribus!",
    },
    {
      title: "API",
      imageUrl: "/img/service-img/api.png",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quasi quam eos. Possimus blanditiis modi quia sequi esse quae doloribus!",
    },
    {
      title: "CSS and SASS",
      imageUrl: "/img/service-img/sass.png",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quasi quam eos. Possimus blanditiis modi quia sequi esse quae doloribus!",
    },
  ]);
  return (
    <>
      <div className="text-center mt-44">
        <h2 className="text-2xl">What I Do?</h2>
        <h1 className="text-4xl my-10">Services</h1>
      </div>
      <div className="w-3/4 m-auto text-center flex justify-between">
        {services.map(({ title, ...serviceProps }) => (
          <ServiceCard
            {...serviceProps}
            title={title}
            //   imageUrl={serimageUrl}
            //   title="React JS"
            //   details="loremasdas"
            key={title}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
