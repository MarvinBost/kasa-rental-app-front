import {FaStar as Star, FaStarHalfAlt as StarHalf} from "react-icons/fa";

export const RatingStars = ({rating = 0}: {rating: number}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-1">
      {[...Array(fullStars)].map((_, index) => (
        <Star key={index} className="w-5 h-5 text-[#FF6060]" />
      ))}
      {hasHalfStar && (
        <StarHalf className="w-5 h-5 text-[#FF6060] fill-current" />
      )}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <Star key={index} className="w-5 h-5 text-gray-300" />
      ))}
    </div>
  );
};
