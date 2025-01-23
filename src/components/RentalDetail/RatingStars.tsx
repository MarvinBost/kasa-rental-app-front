import {Star} from "lucide-react";

export const RatingStars = ({rating}: {rating: number}) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "text-[#FF6060] fill-[#FF6060]"
            : "text-gray-300 fill-gray-300"
        }`}
      />
    ))}
  </div>
);
