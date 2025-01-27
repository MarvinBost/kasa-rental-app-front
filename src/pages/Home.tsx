import Hero from '@components/shared/Hero';
import RentalCard from '@components/rentals/RentalCard';
import { useRentals } from '@features/rentals/hooks/useRentals';

export default function Home() {
  const { rentals, loading, error } = useRentals();

  if (loading) {
    return (
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 max-w-[1240px] mx-auto">
        <Hero
          title="Chez vous, partout et ailleurs"
          image="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          className="max-w-[1240px] mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100 p-8 rounded-3xl max-w-[1240px] mx-auto">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <RentalCard
                key={i}
                loading={loading}
                rental={{ id: '', cover: '', title: '' }}
              />
            ))}
        </div>
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
            <RentalCard key={rental.id} rental={rental} loading={loading} />
          ))}
        </div>
      </div>
    );
  }
}
