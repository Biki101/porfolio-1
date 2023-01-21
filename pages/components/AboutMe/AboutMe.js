import Image from "next/image";
import React from "react";
import Button from "../Button/button";

const AboutMe = () => {
  return (
    <div className="border-4 w-3/5 m-auto bg-slate-300 mt-36 rounded-full flex justify-center items-center p-10">
      <div className="">
        <Image
          className="rounded-full"
          src="/img/Biki_Kumar_Thakur.jpg"
          width={1000}
          height={1000}
          alt="error loading"
          priority="true"
        />
      </div>
      <div className="flex-grow py-14 px-16 flex flex-col gap-3 text-justify">
        <p className="text-2xl">Who Am I?</p>
        <h1 className="text-4xl">About Me</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          veritatis dolores fugiat quos, ea totam error, eligendi corrupti
          reiciendis maxime vel cumque a tenetur ipsa autem nesciunt! A ipsum
          nisi similique odio temporibus iste, reiciendis dolorum, accusantium
          unde nobis explicabo.
        </p>
        <Button title="Download CV" round={true} />
      </div>
    </div>
  );
};

export default AboutMe;
