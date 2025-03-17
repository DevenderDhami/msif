import Image from "next/image";
import React from "react";
import logoImg from "@/public/msif_logo.jpg"
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={logoImg}
        alt={"Logo"}
        width={70}
        height={70}
        className="inline-block rounded-lg "
      />
    </Link>
  );
};

export default Logo;
