import { AiFillHome } from "react-icons/ai";
import "./style.css";
interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <div className="curved bg-blue-500">
      <div className="flex flex-row bg-yellow-500 w-full h-[50px]">
        <div className="flex bg-green-500 w-[30%] justify-center items-center gap-1">
          <div>
            <AiFillHome className="text-blue-800 w-[20px] h-[20px]" />
          </div>
          <p className="text-blue-800">Apps</p>
          <p>Market</p>
        </div>
        <div className="flex flex-row bg-yellow-500 w-[70%] justify-center items-center">
          <ul className="flex flex-row justify-center items-center gap-2">
            <li>Home</li>
            <li>Services</li>
            <li>Why us</li>
            <li>Our Goals</li>
            <li>Our Protfolia</li>
            <li>Our Client</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div className="bg-red-500 w-full flex flex-col justify-center">
          <h1>We Create Applications With Excellent Technology.</h1>
          <p>
            it is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When Looking At Its Layout. The Point
            Of Using Lorem Ipsum Is That It Has A More Or Less Normal
            Distribution Of Letters, As Opposed To Using Content.{" "}
          </p>
          <div className="flex flex-row justify-center items-center">
            <button className="bg-white">
              <p>Download Now</p>
            </button>
            <button>
              <p>Explore More</p>
            </button>
          </div>
        </div>
        <div className="bg-blue-500 w-full">part3</div>
      </div>
    </div>
  );
}
