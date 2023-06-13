import { magazine1 } from "../assets";
import styles, { layout } from "../style";
import React, { useEffect, useState } from "react";

const Pricing = () => {
  return (
  <section id="pricing" className={`${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} ${styles.boxWidth}`}>
    <body className="fonts-sans bg-[#fccbcd] rounded-3xl p-16">
        <div className="min-h-screen flex justify-center">
            <div className="">
                <div className="text-center font-semibold">
                    <h1 className="text-5xl">
                        <span className="pink-text-gradient tracking-wide">Flexible</span>
                        <span> plans</span>
                    </h1>
                    <p className="pt-6 text-xl text-black font-normal w-full px-8 md:w-full">
                        Choose a plan that works best for you and <br/> your team
                    </p>
                </div>
                <div className="pt-24 flex flex-row">
                    {/* Basic */}
                    <div className="w-96 p-8 bg-[#f7b0b0] text-center rounded-3xl pr-16 shadow-xl">
                        <h1 className="text-black font-semibold text-2xl">Basic</h1>
                        <p className="pt-2 tracking-wide">
                            <span className="text-gray-400 align-top">Ksh</span>
                            <span className="text-3xl font-semibold">200</span>
                            <span className="text-gray-400 font-medium"> month</span>
                        </p>
                        <hr className="mt-4 border-1"> 
                        </hr>
                        <div className="pt-8">
                            <p className="font-semibold text-gray-400 text-left">
                                <span className="material-icons align-middle"></span>
                                {/* <span className="pl-2">Get started with <span className="text-black"> messaging</span> </span> */}
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle"></span>
                                <span className="pl-2">5 magazines <span className="text-black"> weekly</span> </span>
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle"></span>
                                {/* <span className="pl-2">5 TB <span className="text-black"> cloud storage</span> </span> */}
                            </p>
                            <a href="#" className="">
                                <p className="w-full py-4 bg-[#f87272] mt-8 rounded-xl text-white">
                                    <span className="font-meium text-black">Choose Plan</span>
                                    <span className="pl-2 material-icons align-middle text-sm"></span>
                                </p>
                            </a>
                        </div>
                    </div>
                    {/* Startup card */}
                    <div className="w-80 p-8 bg-[#f89898] text-center rounded-3xl text-white border-4 border-white transform scale-125 shadow-xl">
                        <h1 className="text-black font-semibold text-2xl">Normal</h1>
                        <p className="pt-2 tracking-wide">
                            <span className="text-gray-400 align-top">Ksh</span>
                            <span className="text-3xl font-semibold">100</span>
                            <span className="text-gray-400 font-medium"> month</span>
                        </p>
                        <hr className="mt-4 border-1"> 
                        </hr>
                        <div className="pt-8">
                            <p className="font-semibold text-gray-400 text-left">
                                <span className="material-icons align-middle"></span>
                                <span className="pl-2">Flexible<span className="text-black"> scheduling</span> </span>
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle"></span>
                                <span className="pl-2">Get 10 magazines<span className="text-black"> weekly</span> </span>
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle"></span>
                                <span className="pl-2"><span className="text-black"></span> </span>
                            </p>
                            <a href="#" className="">
                                <p className="w-full py-4 bg-[#fd6262] mt-8 rounded-xl text-white">
                                    <span className="font-meium text-black">Choose Plan</span>
                                    <span className="pl-2 material-icons align-middle text-sm"></span>
                                </p>
                            </a>
                        </div>
                        <div className="absolute top-4 right-4">
                            <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
                        </div>
                    </div>
                    {/* enterprise card */}
                    <div className="w-96 p-8 bg-[#f7b0b0]  text-center rounded-3xl pl-16 shadow-xl">
                        <h1 className="text-black font-semibold text-2xl">Premium</h1>
                        <p className="pt-2 tracking-wide">
                            <span className="text-gray-400 align-top">Ksh</span>
                            <span className="text-3xl font-semibold">800</span>
                            <span className="text-gray-400 font-medium"> month</span>
                        </p>
                        <hr className="mt-4  border-1"> 
                        </hr>
                        <div className="pt-8">
                            <p className="font-semibold text-gray-400 text-left">
                                <span className="material-icons align-middle"></span>
                                <span className="pl-2">All features in<span className="text-black"> Normal</span> </span>
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle"></span>
                                <span className="pl-2">Extra <span className="text-black"> Magazines</span> </span>
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle"></span>
                                <span className="pl-2">Full access<span className="text-black"> to our magazines</span> </span>
                            </p>
                            <a href="#" className="">
                                <p className="w-full py-4 bg-[#f87272] mt-8 rounded-xl text-white">
                                    <span className="font-meium text-black">Choose Plan</span>
                                    <span className="pl-2 material-icons align-middle text-sm"></span>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
  </section>
);
}

export default Pricing;
