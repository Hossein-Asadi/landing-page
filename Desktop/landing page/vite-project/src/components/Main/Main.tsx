import Note from "./Note";

export default function Main() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Note
        header="We provide various kind of service for you"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when loading the point of using lorem"
      />
      <div className="flex flex-row justify-center items-center py-4">
        {/* <Card header="" text="" imgSrc="" imgAlt="" /> */}
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
