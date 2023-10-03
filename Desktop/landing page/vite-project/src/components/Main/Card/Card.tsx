interface CardProps {
  header: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
}

export default function Card({ header, text, imgSrc, imgAlt }: CardProps) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-8 rounded-t-lg" src={imgSrc} alt={imgAlt} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {header}
          </h5>
        </a>
        <p>{text}</p>
      </div>
    </div>
  );
}
