import Image from "next/image";
import React from "react";
import Button from "../Button/button";

const ServiceCard = (props) => {
  const { imageUrl, title, details, projectlink } = props;
  //   console.log(imageUrl);
  return (
    <div className="w-80 text-left border border-red flex flex-col justify-between">
      <div>
        <Image
          className="w-full rounded-full p-12 border-2 border-black"
          src={imageUrl}
          height={200}
          width={200}
          priority="true"
          alt="error loading"
        />
      </div>
      <div className="">
        <p className="text-2xl mt-8">{title}</p>
        <p className="text-xl mt-3 text-justify">{details}</p>
        <Button className="mt-5" round="false" title="See Work" />
      </div>
    </div>
  );
};

export default ServiceCard;
