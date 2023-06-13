import styles from "../style";
import { magazine3, logo } from "../assets";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
       
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 violet-gradient rounded-[10px] mb-2">
          {/* <img src={logo} alt="discount" className="w-[32px] h-[32px]" /> */}
          {/* <p className={`${styles.paragraph} ml-2 text-black`}>
            <span className="text-black">Premier Magazine</span> is a Fashion Magazine{" "}
            <span className="text-black">for the</span> best editorial modeling
          </p>
        </div> */}
        <div className="flex flex-row mt-20 justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] pink-text-gradient ss:leading-[100.8px] leading-[75px]">
            Premier <br className="sm:block hidden" />{" "}
            <span className="pink-text-gradient">Magazine </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* <GetStarted /> */}
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          Editorial Modeling
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black font-poppins font-semibold md:text-justify`}>
          for both sell-side and buy-side clients, Capital Raise services (Debt and Equity financing),
          Valuations, Strategic Planning and Financial Advisory services.We are able to support our client’s objectives
          with the expertise and professionalism by providing senior-level attention on each engagement.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={magazine3} alt="billing" className="w-[90%] h-[90%] rounded-xl object-contain " />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        
      </div> 
    </section>
  );
};

export default Hero;