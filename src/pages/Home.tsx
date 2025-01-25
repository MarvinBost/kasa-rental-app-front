import Hero from "../components/Hero";
import RentalCard from "../components/RentalCard";
import {useRentals} from "../hooks/useRentals";

export default function Home() {
  const {rentals, loading, error} = useRentals();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p>Chargement...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-red-500">
        <p>Une erreur est survenue lors du chargement des locations.</p>
      </div>
    );
  }

  if (rentals.length === 0) {
    return (
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 max-w-[1240px] mx-auto">
        <Hero
          title="Chez vous, partout et ailleurs"
          image="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100 p-8 rounded-3xl">
          <p className="text-center text-red-500">
            Aucune location n'est disponible pour le moment.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 max-w-[1240px] mx-auto">
        <Hero
          title="Chez vous, partout et ailleurs"
          image="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          className="max-w-[1240px] mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100 p-8 rounded-3xl max-w-[1240px] mx-auto">
          {rentals.map((rental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))}
        </div>
      </div>
    );
  }
}
