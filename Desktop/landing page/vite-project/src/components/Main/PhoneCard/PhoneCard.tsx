import "./index.css";
interface PhoneCardProps {
  header: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
}

export default function PhoneCard({
  header,
  text,
  imgSrc,
  imgAlt,
}: PhoneCardProps) {
  return (
    <div className="phone flex flex-col justify-center items-center w-[240px] bg-white border-4 border-gray-200 rounded-2xl shadow pt-14 px-1 pb-10 ">
      <div className="notch-container">
        <div className="notch"></div>
      </div>
      <img
        className="h-[160px] w-[240px] px-3 pb-4 rounded-lg"
        src={imgSrc}
        alt={imgAlt}
      />
      <div className="px-1 pb-3">
        <a href="#">
          <p className="text-lg text-center font-semibold tracking-tight text-gray-900 dark:text-white">
            {header}
          </p>
        </a>
        <p className="text-center text-sm text-gray-500">{text}</p>
      </div>
      <div className="flex flex-row gap-28 pt-4 px-3">
        <a href="#">Skip</a>
        <a href="#">Next</a>
      </div>
      <div className="end-container">
        <div className="notch"></div>
      </div>
    </div>
  );
}
