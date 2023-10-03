interface CardProps {
  header: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
}

export default function Card({ header, text, imgSrc, imgAlt }: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center w-[180px] md:w-[240px] bg-white border border-gray-200 rounded-lg shadow py-1 px-1 ">
      <img
        className="h-[120px] w-[180px] md:h-[160px] md:w-[240px] px-3 pb-2 rounded-lg"
        src={imgSrc}
        alt={imgAlt}
      />
      <div className="px-1 pb-3">
        <a href="#">
          <p className="text-base md:text-lg text-center text-gray-900 ">
            {header}
          </p>
        </a>
        <p className="text-center text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
}
