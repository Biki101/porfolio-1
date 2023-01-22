import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button/button";

const Resume_URL = "https://i.ibb.co/B6qGqPy/resume.png";

const AboutMe = () => {
  const downloadResume = (url) => {
    const fileName = url.split("/").pop;
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.target = "_blank";
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div
      id="about"
      className="w-3/5 m-auto bg-slate-300 mt-36 border-4 border-black rounded-full flex justify-center items-center p-10"
    >
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
        <h1 className="text-4xl text-yellow-700Download">About Me</h1>
        <p className="text-xl text-justify">
          Agile React Developer with an excellent eye for design and experience
          in creating functional user centric features, Design responsive
          interfaces for websites. <br />
          <br />
          Fastlerner and can quickly integrate into a team so I can provide
          value into the company and customers.
        </p>
        <div
          onClick={() => {
            downloadResume(Resume_URL);
          }}
        >
          <Button className="border-9" title="Download CV" round={true} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
