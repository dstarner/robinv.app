import React from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
const Hero = ({
  listUser = [
    // {
    //   name: "GBs Stored",
    //   number: "10",
    //   icon: "/assets/Icon/heroicons_sm-user.svg",
    // },
    // {
    //   name: "Objects",
    //   number: "1k",
    //   icon: "/assets/Icon/bx_bxs-server.svg",
    // },
    // {
    //   name: "Regions",
    //   number: "20",
    //   icon: "/assets/Icon/gridicons_location.svg",
    // },
  ],
}) => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            Manage Your FRC Inventory
            <br />
            <strong>The Right Way</strong>.
          </h1>
          <p className="text-black mt-4 mb-6">
            Easily manage your team&apos;s inventory &amp; Bill of Materials.
          </p>
          <ButtonPrimary href="https://app.robinv.app">
            Get Started
          </ButtonPrimary>
        </div>
        <div className="flex w-full">
          <div className="h-full w-full">
            <Image
              src="/img/landing-hero.svg"
              alt="Robin V"
              quality={100}
              width={600}
              height={345}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-indigo-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
