import Image from "next/image";
import React from "react";
import Button from "../Button/button";

const ServiceCard = (props) => {
  const { imageUrl, title, projectlink } = props;
  return (
    <div className="w-80 text-left flex flex-col justify-between gap-10">
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
      <div className="flex flex-col items-center">
        <p className="text-2xl mt-8">{title}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
