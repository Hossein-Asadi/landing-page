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
      {/* <div className="w-full pl-20 flex flex-row">
        <div className="flex flex-row justify-center items-center py-4 gap-24">
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
        <div className="right-trapezoid mt-10"></div>
      </div> */}

      <div className="w-full flex flex-row">
        <div className="trapezoid mt-10"></div>
        <PhoneCard
          header="Welcome"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          imgSrc={welcome}
          imgAlt="Welcome"
        />
        <div className="flex flex-col gap-3 pl-12 pt-20">
          <div>
            <p className="text-2xl">Built the app that everyone love</p>
          </div>
          <div>
            <p className="pr-28">
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
      </div>

      {/* <FeedBackSection /> */}
      {/* <div className="w-full flex flex-row flex-wrap justify-center items-center px-20 py-3 gap-20">
        <CountCard imgSrc={done} text="Projects Complete" count="100+" />
        <CountCard imgSrc={done} text="Projects Complete" count="100+" />
        <CountCard imgSrc={done} text="Projects Complete" count="100+" />
        <CountCard imgSrc={done} text="Projects Complete" count="100+" />
      </div> */}

      {/* <Note
        header="We provide various kind of service for you"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when loading the point of using lorem"
      />
      <div className="flex flex-row justify-center items-center py-4 gap-20">
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
      </div>
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
    </div>
  );
}
