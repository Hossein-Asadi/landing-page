import { ReactElement } from "react";

interface CountCardProps {
  count: string;
  text: string;
  imgSrc: string;
}

export default function CountCard({ count, text, imgSrc }: CountCardProps) {
  return (
    <div className="bg-white px-3 my-2 flex flex-row justify-center items-center h-[80px] w-[200px] rounded-t-xl rounded-r-xl">
      <img src={imgSrc} className="h-[40px] w-[40px] bg-red-500" />
      <div className="flex flex-col w-full ml-3">
        <p>{count}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}
