import { magazine1 } from "../assets";
import styles, { layout } from "../style";
import React, { useEffect, useState } from "react";
import Modal from 'react-modal';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 10,
  borderRadius: '10px',
  p: 4,
};

const About = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
  <section id="about" className={`${layout.sectionReverse} ${styles.paddingX}`}>
    <div className={layout.sectionImgReverse}>
          <img src={magazine1}
           alt="billing" 
           className="w-[75%] h-[75%] rounded-3xl object-contain relative" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-black `}>
        <span className="pink-text-gradient tracking-wide">About</span>
        <span> Premier Magazine</span>
      </h2>
      <p className={`${styles.paragraph}  text-black font-poppins font-semibold max-w-[470px] mt-5`}>
        We are delighted to offer you with a wide range of magazines covering varius
        topics and interest. Whether you're an avid reader, a fashion enthusiast, a
        tech-savvy individual, or someone who enjoys staying up-to-date with current
        events, we have something for everyone
      </p>
      <button type="button" className={`py-4 px-6 font-poppins mt-5 font-medium text-[18px] text-primary bg-[#f87272] rounded-[10px] outline-none flex justify-center items-center ${styles}`} onClick={handleOpen}>
        Read More
      </button>
      <Modal
            isOpen={open}
            onRequestClose={handleClose}
            initial="hidden"
            whileInView="show"
            

      >
        <div className={`bg-[#fccbcd] h-full w-full`}>
           <p className={`${styles.paragraph}  text-black font-poppins font-semibold m-2`}>
        We are delighted to offer you with a wide range of magazines covering varius
        topics and interest. Whether you're an avid reader, a fashion enthusiast, a
        tech-savvy individual, or someone who enjoys staying up-to-date with current
        events, we have something for everyone
      </p>
        </div>
      </Modal>
      <div className="flex justify-center items-center sm:mt-10 mt-6">
      </div>
    </div>
  </section>
);
}

export default About;
