import { RatingStars } from '@components/shared/RatingStars';

export type HostInfoProps = {
  name: string;
  picture: string;
  rating: number;
};

export default function HostInfo({ name, picture, rating }: HostInfoProps) {
  return (
    <div className="flex flex-col items-end gap-6">
      {/* Host Name and Picture */}
      <div className="flex items-center gap-3">
        <p className="text-[#FF6060]">{name}</p>
        <img
          src={picture}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      {/* Star Rating */}
      <RatingStars rating={rating} />
    </div>
  );
}
