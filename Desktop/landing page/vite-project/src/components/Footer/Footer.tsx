import { AiFillHome } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-slate-300 relative w-full flex flex-row justify-around gap-4 pt-14 pb-2 lg:px-30 text-sm sm:text-base ">
      {/* search section */}
      <div className="absolute top-[-30px] justify-center items-center w-full sm:w-[90%] md:w-[70%] bg-[#503cb0] flex flex-row rounded-lg pb-3">
        <div className="pl-3 w-full text-white">
          <p>Contact Us!</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="relative w-full pr-4">
          <div className="absolute top-2 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="search"
            className="block w-full py-3 px-4 mt-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-6 top-3 bg-[#503cb0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>
      {/* footer links */}
      <div className="flex flex-col gap-2">
        {/* column-1 */}
        <div className="flex gap-1 pt-4">
          <div>
            <AiFillHome className="text-blue-800 w-[20px] h-[20px]" />
          </div>
          <p className="text-blue-800">Apps</p>
          <p>Market</p>
        </div>
        <div className="flex flex-row justify-around">
          <a href="#">
            <CiFacebook className="h-[25px] w-[25px]" />
          </a>
          <a href="#">
            <CiFacebook className="h-[25px] w-[25px]" />
          </a>
          <a href="#">
            <CiFacebook className="h-[25px] w-[25px]" />
          </a>
          <a href="#">
            <CiFacebook className="h-[25px] w-[25px]" />
          </a>
        </div>
      </div>
      {/* column-2 */}
      <div>
        <h2 className="pb-3">Links</h2>
        <ul className="flex flex-col gap-1 text-gray-500">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Service</a>
          </li>
        </ul>
      </div>
      {/* column-3 */}
      <div>
        <h2 className="pb-3">Support</h2>
        <ul className="flex flex-col gap-1 text-gray-500">
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>How it</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Reporting</a>
          </li>
        </ul>
      </div>
      {/* column-4 */}
      <div>
        <h2 className="pb-3">Contact Us</h2>
        <ul className="flex flex-col gap-1 text-gray-500">
          <li>+88012345678</li>
          <li>youremail</li>
          <li>Tehran City</li>
        </ul>
      </div>
    </footer>
  );
}
