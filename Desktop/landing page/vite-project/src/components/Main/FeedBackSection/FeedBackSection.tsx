import { AiFillStar } from "react-icons/ai";
import person from "../../../assets/images/person.jpg";

export default function FeedBackSection() {
  return (
    <div className="w-full px-3 sm:px-16 mb-10">
      <div className="flex flex-row justify-between items-center py-3">
        <div className="pr-10 sm:pr-20">
          <p className="text-lg sm:text-xl md:text-2xl">Our Clients Feedback</p>
          <p className="text-sm text-gray-500">
            it is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When Looking At Its Layout. The Point
            Of Using Lorem Ipsum Is That It Has A More Or Less Normal
            Distribution Of Letters, As Opposed To Using Content.
          </p>
        </div>
        <div>
          <a href="#" className="hover:text-lg">
            ReadMore
          </a>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <img
          src={person}
          className="h-[150px] w-[180px] md:h-[250px] md:w-[300px]"
        />
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-row justify-start gap-2">
            <AiFillStar className="md:h-[25px] md:w-[25px] text-yellow-400" />
            <AiFillStar className="h-[15px] w-[15px] md:h-[25px] md:w-[25px] text-yellow-400" />
            <AiFillStar className="h-[15px] w-[15px] md:h-[25px] md:w-[25px] text-yellow-400" />
            <AiFillStar className="h-[15px] w-[15px] md:h-[25px] md:w-[25px] text-yellow-400" />
            <AiFillStar className="h-[15px] w-[15px] md:h-[25px] md:w-[25px] text-gray-400" />
          </div>
          <p className="sm:pr-5 md:pr-40 text-sm">
            it is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When Looking At Its Layout. The Point
            Of Using Lorem Ipsum Is That It Has A More Or Less Normal
            Distribution Of Letters, As Opposed To Using Content.
          </p>
          <div>
            <p className="text-sm sm:text-base md:text-lg">Riad Isalm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
