import "./index.css";
interface PhoneCardProps {
  header: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
  height?: string;
}

export default function PhoneCard({
  header,
  text,
  imgSrc,
  imgAlt,
  height,
}: PhoneCardProps) {
  return (
    <div
      style={{ height: height }}
      className="phone flex flex-col justify-center items-center w-[180px] h-[350px] md:w-[200px] bg-white border-4 border-gray-200 rounded-2xl shadow-lg shadow-black pt-14 px-1 pb-10 "
    >
      <div className="notch-container">
        <div className="notch"></div>
      </div>
      <img
        className="h-[160px] md:w-[150px] md:px-3 pb-4 rounded-lg"
        src={imgSrc}
        alt={imgAlt}
      />
      <div className="px-1 pb-3">
        <a href="#">
          <p className="text-base text-center font-semibold tracking-tight text-gray-900 dark:text-white">
            {header}
          </p>
        </a>
        <p className="text-center text-xs text-gray-500">{text}</p>
      </div>
      <div className="flex flex-row gap-4 md:gap-20 pt-4 text-sm">
        <a href="#">Skip</a>
        <a href="#">Next</a>
      </div>
      <div className="end-container">
        <div className="notch"></div>
      </div>
    </div>
  );
}
