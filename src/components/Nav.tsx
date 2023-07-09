import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className=" py-5 bg-sky-600 text-white">
      <div className="flex justify-between items-center container ">
        <div className="left">
          <Link href={"/"}>
            <Image
              src={"/images/logo.svg"}
              width={200}
              height={50}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="right">
          <Link href={"/cart"}>Cart (0)</Link>
        </div>
      </div>
    </nav>
  );
}
