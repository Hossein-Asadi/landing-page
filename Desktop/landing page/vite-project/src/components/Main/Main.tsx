import Note from "./Note";
import welcome from "../../assets/images/welcome.png";
import Card from "./Card";

export default function Main() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Note
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
      />
    </div>
  );
}
