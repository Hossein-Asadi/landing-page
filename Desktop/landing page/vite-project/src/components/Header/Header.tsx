import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineDownload,
  AiOutlineArrowRight,
  AiFillHome,
} from "react-icons/ai";
import "./style.css";
import PhoneCard from "../Main/PhoneCard";
import welcome from "../../assets/images/welcome.png";
import headerBackground from "../../assets/images/header.webp";
import { useState } from "react";

export default function Header() {
  // toggle menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // toggle menu function
  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <header
      style={{
        backgroundImage: "url(" + headerBackground + ")",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative overflow-hidden pb-4"
    >
      <div className="flex flex-row  w-full h-[60px] ">
        {/* logo */}
        <div className="flex  w-[30%] justify-start items-center gap-1 md:pl-14 pl-4">
          <div>
            <AiFillHome className="text-blue-800 w-[20px] h-[20px]" />
          </div>
          <p className="text-blue-800">Apps</p>
          <p>Market</p>
        </div>
        {/* navbar */}
        <ul className="hidden md:flex flex-row gap-2  text-black w-[70%] items-center justify-around text-sm md:text-base ">
          <li className="hover:text-white hover:bg-black rounded-lg px-2 py-1">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-white hover:bg-black rounded-lg px-2 py-1">
            <a href="#">Services</a>
          </li>
          <li className="hover:text-white hover:bg-black rounded-lg px-2 py-1">
            <a href="#">Why us</a>
          </li>
          <li className="hover:text-white hover:bg-black rounded-lg px-2 py-1">
            <a href="#">Our Goals</a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white hover:bg-black rounded-lg px-2 py-1"
            >
              Our Protfolia
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white hover:bg-black rounded-lg px-2 py-1"
            >
              Our Client
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white hover:bg-black rounded-lg px-2 py-1"
            >
              Contact us
            </a>
          </li>
        </ul>

        {/* hamburger menu */}
        <div className="w-full flex flex-row justify-end md:hidden pr-5 items-center">
          <GiHamburgerMenu className="h-6 w-6" onClick={toggleMenu} />
        </div>
        <div
          style={{ left: isMenuOpen ? "0px" : "-200px" }}
          className="absolute top-0 z-10 transition-all ease-in-out duration-300"
        >
          <ul className="flex flex-col bg-blue-800 gap-4 py-6 px-4 text-white text-sm rounded-r-lg">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Why us</a>
            </li>
            <li>
              <a href="#">Our Goals</a>
            </li>
            <li>
              <a href="#">Our Protfolia</a>
            </li>
            <li>
              <a href="#">Our Client</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
      {/* details */}
      <div className="flex flex-row w-full flex-wrap md:flex-nowrap">
        <div className="w-[70%] flex flex-col justify-center pl-4 lg:pl-12">
          <p className="text-xl font-bold py-1">
            We Create Applications With Excellent Technology.
          </p>
          <p className="text-xs md:text-sm text-gray-500 py-1 pr-4">
            it is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When Looking At Its Layout. The Point{" "}
          </p>
          <div className="text-sm flex flex-row justify-start items-center py-1 gap-3">
            <button className="flex flex-row bg-white rounded-lg px-2 py-3 hover:text-base hover:bg-slate-300 transition-all ease-out duration-300">
              <p>Download Now</p>
              <AiOutlineDownload className="pl-1 w-6 h-6" />
            </button>
            <button className="flex flex-row rounded-lg px-2 py-3 text-sm hover:text-base hover:bg-slate-300 transition-all ease-out duration-300">
              <p>Explore More</p>
              <AiOutlineArrowRight className="pl-1 w-6 h-6" />
            </button>
          </div>
        </div>
        {/* phone cards section */}
        <div className=" w-full flex flex-row gap-1 justify-center items-center overflow-x-auto pb-3">
          <PhoneCard
            header="Welcome"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            imgSrc={welcome}
            imgAlt="Welcome"
            height="300px"
          />
          <PhoneCard
            header="Welcome"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            imgSrc={welcome}
            imgAlt="Welcome"
          />
          <PhoneCard
            header="Welcome"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            imgSrc={welcome}
            imgAlt="Welcome"
            height="300px"
          />
        </div>
      </div>
    </header>
  );
}
