import {Link} from "react-router-dom";
import type {Rental} from "../types/rental";

interface RentalCardProps {
  rental: Rental;
}

export default function RentalCard({rental}: RentalCardProps) {
  return (
    <Link to={`/rental/${rental.id}`} className="relative group">
      <div className="relative h-[340px] rounded-xl overflow-hidden">
        <img
          src={rental.cover || "https://via.placeholder.com/300"}
          alt={rental.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-white font-medium">
          {rental.title}
        </h3>
      </div>
    </Link>
  );
}
