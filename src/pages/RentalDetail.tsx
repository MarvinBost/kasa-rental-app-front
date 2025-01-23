import {useParams} from "react-router-dom";
import {useRental} from "../hooks/useRental";
import NotFound from "./NotFound";
import TagList from "../components/RentalDetail/TagList";
import Carousel from "../components/RentalDetail/Carousel";
import Dropdown from "../components/RentalDetail/Dropdown";
import HostInfo from "../components/RentalDetail/HostInfo";

export default function RentalDetail() {
  const {id} = useParams<{id: string}>();
  const {rental, loading, error} = useRental(id || "");

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p>Chargement...</p>
      </div>
    );
  }

  if (error || !rental) {
    return <NotFound />;
  }

  return (
    <div className="px-20">
      {/* Image Carousel */}
      <Carousel pictures={rental.pictures} altText={rental.title} />

      {/* Title and Location */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-[#FF6060] text-3xl font-medium mb-2">
            {rental.title}
          </h1>
          <p className="text-[#FF6060]">{rental.location}</p>
          <TagList tags={rental.tags} />
        </div>

        {/* Host Info and Rating */}
        <HostInfo
          name={rental.host.name}
          picture={rental.host.picture}
          rating={parseInt(rental.rating)}
        />
      </div>

      {/* Description and Equipment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Dropdown title="Description">{rental.description}</Dropdown>
        <Dropdown title="Équipements">
          <ul className="space-y-2">
            {rental.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </div>
  );
}
