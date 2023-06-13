import { magazine2 } from "../assets";
import styles, { layout } from "../style";
import React, { useEffect, useState } from "react";


const Subscribe = () => {
  return (
  <section id="subscribe" className={`${layout.sectionReverse} ${styles.paddingX}`}>
     <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-black `}>
        <span className="pink-text-gradient tracking-wide">Subscribe to our</span>
        <span> Newsletter</span>
      </h2>
      <p className={`${styles.paragraph}  text-black font-poppins font-semibold max-w-[470px] mt-5`}>
        Subscribe to our newsletter so that you get daily updates on our new 
        magazine release
      </p>
      <button type="button" className={`py-4 px-6 font-poppins mt-5 font-medium text-[18px] text-primary bg-[#f87272] rounded-[10px] outline-none flex justify-center items-center ${styles}`}>
        Subscribe
      </button>
      <div className="flex justify-center items-center sm:mt-10 mt-6">
      </div>
    </div>

    <div className={layout.sectionImg}>
      <img src={magazine2} alt="billing" className="w-[75%] h-[75%] rounded-[40px] object-contain relative" />
    </div>
  </section>
);
}
export default Subscribe;
