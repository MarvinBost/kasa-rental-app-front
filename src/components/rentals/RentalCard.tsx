import { Link } from 'react-router-dom';
import type { RentalCard } from '@features/rentals/types';

export type RentalCardProps = {
  rental: RentalCard;
  loading: boolean;
};

export default function RentalCard({ rental, loading }: RentalCardProps) {
  if (!rental) {
    return null;
  }

  if (loading) {
    return (
      <div className="relative h-[340px] rounded-xl overflow-hidden bg-gray-200 animate-pulse">
        <div className="h-full bg-gray-300 rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-transparent bg-gray-300 w-3/4 h-6 rounded-md" />
      </div>
    );
  } else {
    return (
      <Link to={`/rental/${rental.id}`} className="relative group">
        <div className="relative h-[340px] rounded-xl overflow-hidden">
          <img
            src={rental.cover || 'https://via.placeholder.com/300'}
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
}
