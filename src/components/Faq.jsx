import { magazine1, quotes } from "../assets";
import styles, { layout } from "../style";
import React, { useEffect, useState } from "react";


const Faq = () => {
  return (
  <section id="faq" className={`${layout.sectionReverse} ${styles.paddingX}`}>
    <div className={layout.sectionImgReverse}>
          <img src={quotes}
           alt="billing" 
           className="w-[50%] h-[50%] rounded-3xl object-contain relative" />
    </div>
     <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-black `}>
        <span className="pink-text-gradient tracking-wide">Frequently asked</span>
        <span> Questions</span>
      </h2>
      <div className="flex justify-center items-center sm:mt-10 mt-6">
      </div>
    </div>
  </section>
);
}
export default Faq;