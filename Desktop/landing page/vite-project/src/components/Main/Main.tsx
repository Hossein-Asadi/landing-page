import Note from "./Note";
import welcome from "../../assets/images/welcome.png";
import done from "../../assets/images/done.png";
import Card from "./Card";
import CountCard from "./CountCard";
import FeedBackSection from "./FeedBackSection";
import "./index.css";
import PhoneCard from "./PhoneCard";

export default function Main() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="relative w-full flex flex-row">
        <div className="absolute z-10 flex flex-row flex-wrap justify-around items-center py-4 gap-10 md:px-12 md:gap-20">
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
          />
        </div>
        <div className="hidden md:block absolute right-0 top-[-30px] right-trapezoid mt-10"></div>
      </div>

      {/* <div className="flex flex-row flex-wrap justify-center items-center py-2 gap-4 sm:gap-x-10 md:gap-x-20">
        <Card
          header="Unique App Ui"
          text="It is a long established fact that a reader will be distracted by the readable content of a page"
          imgSrc={welcome}
          imgAlt="Unique app"
        />
        <Card
          header="Unique App Ui"
          text="It is a long established fact that a reader will be distracted by the readable content of a page"
          imgSrc={welcome}
          imgAlt="Unique app"
        />
        <Card
          header="Unique App Ui"
          text="It is a long established fact that a reader will be distracted by the readable content of a page"
          imgSrc={welcome}
          imgAlt="Unique app"
        />
      </div> */}

      {/* <div className="w-full flex flex-row text-sm md:text-base pb-10 h-[400px] sm:pb-2 sm:mt-10">
        <div className="hidden sm:block small-trapezoid sm:trapezoid"></div>
        <PhoneCard
          header="Welcome"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          imgSrc={welcome}
          imgAlt="Welcome"
        />
        <div className="flex flex-col pl-3 gap-1 sm:gap-3 sm:pl-12 pt-2 md:pt-10">
          <div>
            <p className="text-lg md:text-2xl">
              Built the app that everyone love
            </p>
          </div>
          <div>
            <p className="md:pr-28">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              impedit enim tempore, ea dolorem repellat facere fugit magni,
              dolorum ipsa aliquam accusamus dolor sit harum excepturi suscipit
              ipsum eaque voluptatum.
            </p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div>
            <button className="border-black border-2 rounded-lg py-1 px-2">
              <a href="#">Get More</a>
            </button>
          </div>
        </div>
      </div> */}

      {/* <div className="w-full py-3  flex flex-wrap flex-row gap-5 justify-center items-center md:px-10 sm:gap-8  md:gap-15">
        <CountCard imgSrc={done} text="Projects Complete" count="100+" />
        <CountCard imgSrc={done} text="Projects Complete" count="100+" />
        <CountCard imgSrc={done} text="Projects Complete" count="100+" />
        <CountCard imgSrc={done} text="Projects Complete" count="100+" />
      </div> */}

      {/* <Note
        header="We provide various kind of service for you"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when loading the point of using lorem"
      />
      <Note
        header="We provide various kind of service for you"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when loading the point of using lorem"
      />
      <Note
        header="We provide various kind of service for you"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when loading the point of using lorem"
      />
      <Note
        header="We provide various kind of service for you"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when loading the point of using lorem"
      /> */}
      {/* <FeedBackSection /> */}
    </div>
  );
}
