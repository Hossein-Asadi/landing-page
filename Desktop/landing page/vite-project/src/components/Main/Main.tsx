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
      <div className="w-full px-10 flex flex-row justify-between gap-10">
        <div className="flex flex-row justify-center items-center py-4 gap-20">
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
      </div>

      {/* <div className="w-full">
        <div className="trapezoid"></div>
      </div> */}

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
