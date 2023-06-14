// import React from 'react';
import { useState } from "react";
import gadite_Logo1 from "./assets/gadite_Logo1.png";
import clock1 from "./assets/clock1.png";
import gallery1 from "./assets/gallery1.png";
import gallery2 from "./assets/gallery2.png";
import gallery3 from "./assets/gallery3.png";
import gallery4 from "./assets/gallery4.png";
import gallery5 from "./assets/gallery5.png";
import more_info1 from "./assets/more_info1.png";
import more_info2 from "./assets/more_info2.png";
import more_info3 from "./assets/more_info3.png";
import curved_arrow from "./assets/curved_arrow.png";
import location_mark from "./assets/location_mark.png";
import clock2 from "./assets/clock2.png";
import calendar from "./assets/calendar.png";
import MobileNav from "./MobileNav";
// import dropdown from "./assets/dropdown.png";

export default function App() {
  const [mobileNavOn, setMobileNavOn] = useState(false);
  const [isClassActive, setIsClassActive] = useState(false);

  function toggleClass() {
    setIsClassActive(!isClassActive);
    setMobileNavOn(true);
  }
  return (
    <div className="px-12">
      {/* Navbar */}
      <nav className="relative mt-12">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[82px] h-[120px]">
            <img src={gadite_Logo1} alt="Gadites logo" className="w-full" />
          </div>
          {/* Menu Items */}
          <div className="hidden font-normal text-base leading-6 space-x-20 md:flex md:max-xl:text-sm md:max-xl:space-x-16">
            <a href="#" className="">
              About GADITES
            </a>
            <a href="#" className="">
              Frequently Asked Questions
            </a>
            <div className="flex items-center justify-center gap-[15px] cursor-pointer md:max-xl:gap-2.5">
              <a href="#" className="">
                Follow GBS online
              </a>
              <ion-icon name="chevron-down-outline"></ion-icon>
              {/* <img
                src={dropdown}
                alt="dropdown menu"
                className="w-[14.88px] h-[5px]"
              /> */}
            </div>
          </div>
          {/* Button */}
          <a
            href="#"
            className="hidden text-xs text-white bg-black pt-[14px] pb-[13px] px-[35px] rounded-[10px] baseline md:block md:max-xl:px-5"
          >
            Generate GBS invite DP
          </a>

          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
            onClick={toggleClass}
          >
            <div className={isClassActive ? "open" : ""}>
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div className={isClassActive ? "block" : ""}>
            <div
              id="menu"
              className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            >
              <a href="#">Pricing</a>
              <a href="#">Product</a>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Community</a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="grid grid-cols-2 mt-[66px] gap-[22px]">
        <div className="">
          <h1 className="font-bold text-[55px] leading-[82px] text-end">
            GBS 2023 is for
          </h1>
          <p className="text-end font-medium text-xl italic leading-[35px] mt-5">
            Gadites Bible Seminar (GBS) is a meeting organized under the
            supervision of God’s throne to see that men{" "}
            <span className="underline">understand God’s purpose</span> for
            creating them.
          </p>
          <div className="flex justify-end">
            <div className="flex items-center justify-center gap-[15px] mt-[94px] text-end">
              <a
                href="#"
                className="hidden text-xs text-white bg-black pt-[14px] pb-[13px] px-[35px] rounded-[10px] baseline md:block md:max-xl:px-5"
              >
                Generate DP
              </a>
              <div className="flex items-center justify-center gap-2.5">
                <img src={clock1} alt="clock" className="w-[21px] h-[25px]" />
                <p className="font-medium text-base">18d 16h 50m 42s</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="font-bold text-[55px] leading-[82px]">
            young believers
          </h1>
          <p
            className="font-bold text-[45px] leading-[67px]"
            style={{
              background:
                "linear-gradient(360deg, #333333 -115.66%, rgba(51, 51, 51, 0.6) -115.66%, rgba(51, 51, 51, 0) 78.31%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            hungry believers
          </p>
          <p
            className="font-bold text-[45px] leading-[67px]"
            style={{
              background:
                "linear-gradient(360deg, #333333 -115.66%, rgba(51, 51, 51, 0.6) -115.66%, rgba(51, 51, 51, 0) 78.31%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            purpose-driven believers
          </p>
          <p
            className="font-bold text-[45px] leading-[67px]"
            style={{
              background:
                "linear-gradient(360deg, #333333 -115.66%, rgba(51, 51, 51, 0.6) -115.66%, rgba(51, 51, 51, 0) 78.31%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            every believer
          </p>
          <p
            className="font-bold text-[45px] leading-[67px]"
            style={{
              background:
                "linear-gradient(360deg, #333333 -115.66%, rgba(51, 51, 51, 0.6) -115.66%, rgba(51, 51, 51, 0) 78.31%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            the unbelievers
          </p>
        </div>
      </div>

      {/* GALLERY */}
      <div className="mt-[150px]">
        <div className="grid grid-cols-3 justify-center items-center">
          <img src={gallery1} alt="group of gadites" className="w-full" />
          <img src={gallery2} alt="group of gadites" className="w-full" />
          <img src={gallery3} alt="group of gadites" className="w-full" />
        </div>
        <div className="grid grid-cols-2">
          <img src={gallery4} alt="group of gadites" className="w-full" />
          <img src={gallery5} alt="group of gadites" className="w-full" />
        </div>
      </div>

      {/* TIMER */}
      <div className="">
        <div className="flex items-center justify-center mt-[150px]">
          <div className="flex flex-col pr-[73px]">
            <p className="font-bold text-[65px] leading-[65px]">18</p>
            <p className="font-normal text-xl leading-[65px]">Days</p>
          </div>
          <span className="h-[61px] opacity-30 border-[0.5px] border-black"></span>
          <div className="flex flex-col pl-[75px] pr-[102px]">
            <p className="font-bold text-[65px] leading-[65px]">16</p>
            <p className="font-normal text-xl leading-[65px]">Hours</p>
          </div>
          <span className="font-bold text-[65px] leading-[65px]">:</span>
          <div className="flex flex-col pl-[73px] pr-[73px]">
            <p className="font-bold text-[65px] leading-[65px]">50</p>
            <p className="font-normal text-xl leading-[65px]">Minutes</p>
          </div>
          <span className="font-bold text-[65px] leading-[65px]">:</span>
          <div className="flex flex-col pl-[70px]">
            <p className="font-bold text-[65px] leading-[65px]">42</p>
            <p className="font-normal text-xl leading-[65px]">Seconds</p>
          </div>
        </div>
        <div className="mt-5 text-base text-center font-semibol leading-[35px]">
          to <span className="font-semibold">Gadites Bible Seminar</span> 2023.
        </div>
      </div>

      {/* MORE INFORMATION */}
      <div className="px-[82px]">
        <div className="flex items-center gap-[33px] mt-[150px]">
          <div className="w-full">
            <img src={more_info1} alt="group of gadites" className="w-full" />
          </div>
          <div className="">
            <h1 className="font-bold leading-[53px] text-[40px]">
              What is GBS?
            </h1>
            <p className="font-normal leading-[35px] text-xl mt-5">
              The theme was announced at the July Edition of Writing The Vision
              which held ONLINE. Watch the video of the theme announcement OR
              listen to the full audio message of the theme unveiling.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[33px] mt-[150px]">
          <div className="">
            <h1 className="font-bold leading-[53px] text-[40px]">
              Why should I attend GBS?
            </h1>
            <p className="font-normal leading-[35px] text-xl mt-5">
              The theme was announced at the July Edition of Writing The Vision
              which held ONLINE. Watch the video of the theme announcement OR
              listen to the full audio message of the theme unveiling.
            </p>
          </div>
          <div className="">
            <img src={curved_arrow} alt="curved arrow" />
          </div>
          <div className="w-full">
            <img src={more_info2} alt="group of gadites" className="w-full" />
          </div>
        </div>
        <div className="flex items-center gap-[33px] mt-[150px]">
          <div className="w-full">
            <img src={more_info3} alt="group of gadites" className="w-full" />
          </div>
          <div className="">
            <h1 className="font-bold leading-[53px] text-[40px]">
              What is my expectations for GBS?
            </h1>
            <p className="font-normal leading-[35px] text-xl mt-5">
              The theme was announced at the July Edition of Writing The Vision
              which held ONLINE. Watch the video of the theme announcement OR
              listen to the full audio message of the theme unveiling.
            </p>
          </div>
        </div>
        <div className="">
          <p className="font-bold text-[50px] text-center leading-[65px] mt-[50px]">
            That deep longing for God in your heart will be satisfied and fueled
            again!
          </p>
        </div>
        <div className="">
          <p className="font-normal text-xl text-center leading-[35px] underline mt-[50px]">
            Gadites Bible Seminar is a 3-day meeting (Morning & Afternoon
            session) for all believers who seek to know the intent of God for
            creating them.
          </p>
        </div>
        <div className="flex items-center justify-between mt-[100px]">
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="">
              <img
                src={location_mark}
                alt="location"
                className="w-[50px] h-[50px]"
              />
            </div>
            <p className="font-bold text-xl text-center leading-[30px] w-[395px]">
              FAITH PLAZA, BARIGA, LAGOS STATE, NIGERIA
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="">
              <img src={clock2} alt="clock" className="w-[50px] h-[50px]" />
            </div>
            <p className="font-bold text-xl leading-[30px]">9AM</p>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="">
              <img
                src={calendar}
                alt="calendar"
                className="w-[50px] h-[50px]"
              />
            </div>
            <p className="font-bold text-xl leading-[30px]">
              5TH TO 7TH OF JULY, 2023
            </p>
          </div>
        </div>
      </div>
      {mobileNavOn && <MobileNav setMobileNavOn={setMobileNavOn} />}
    </div>
  );
}
