import React from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { CgGoogle } from "react-icons/cg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-20 w-3/4 m-auto">
      <hr />
      <div className="flex text-2xl p-5 justify-between">
        <div>
          <p>Copyright 2023 &#169; Biki Kumar Thakur</p>
        </div>
        <div className="flex text-4xl gap-4 cursor-pointer">
          <Link href="https://github.com/Biki101" target="_blank">
            <VscGithub className="hover:text-slate-600" />
          </Link>
          <Link href="https://github.com/Biki101" target="_blank">
            <CgGoogle className="hover:text-blue-600" />
          </Link>

          <Link href="https://github.com/Biki101" target="_blank">
            <TiSocialFacebookCircular className="hover:text-orange-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
