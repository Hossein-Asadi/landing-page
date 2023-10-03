interface CardProps {
  header: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
}

export default function Card({ header, text, imgSrc, imgAlt }: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center w-[240px] bg-white border border-gray-200 rounded-lg shadow py-3 px-1 ">
      <img
        className="h-[160px] w-[240px] px-3 pb-2 rounded-lg"
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
    </div>
  );
}
