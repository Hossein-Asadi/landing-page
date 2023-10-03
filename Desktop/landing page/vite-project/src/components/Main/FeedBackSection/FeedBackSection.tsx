import { AiFillStar } from "react-icons/ai";
import person from "../../../assets/images/person.jpg";
interface FeedBackSectionProps {}

export default function FeedBackSection({}: FeedBackSectionProps) {
  return (
    <div className="w-full px-16">
      <div className="flex flex-row justify-between items-center py-3">
        <div className="pr-20">
          <p className="text-2xl">Our Clients Feedback</p>
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
        <img src={person} className="h-[250px] w-[300px]" />
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-row justify-start gap-2">
            <AiFillStar className="h-[25px] w-[25px] text-yellow-400" />
            <AiFillStar className="h-[25px] w-[25px] text-yellow-400" />
            <AiFillStar className="h-[25px] w-[25px] text-yellow-400" />
            <AiFillStar className="h-[25px] w-[25px] text-yellow-400" />
            <AiFillStar className="h-[25px] w-[25px] text-gray-400" />
          </div>
          <p className="pr-40">
            it is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When Looking At Its Layout. The Point
            Of Using Lorem Ipsum Is That It Has A More Or Less Normal
            Distribution Of Letters, As Opposed To Using Content.
          </p>
          <div>
            <p className="text-lg">Riad Isalm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
