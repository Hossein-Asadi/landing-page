import { ReactElement } from "react";

interface CountCardProps {
  count: string;
  text: string;
  imgSrc: string;
}

export default function CountCard({ count, text, imgSrc }: CountCardProps) {
  return (
    <div className="bg-slate-200 shadow-xl px-3 my-1 flex flex-row justify-center items-center h-[80px] w-[140px] md:w-[25%] max-w-[200px] rounded-t-xl rounded-r-xl">
      <img src={imgSrc} className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]" />
      <div className="flex flex-col w-full ml-3">
        <p className="text-sm md:text-base">{count}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}
