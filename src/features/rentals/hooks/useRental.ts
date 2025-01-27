import { useState, useEffect } from 'react';
import type { Rental } from '@features/rentals/types';
import { RentalsService } from '@features/rentals/services';

export function useRental(id: string) {
  const [rental, setRental] = useState<Rental | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRental = async () => {
      try {
        const service = RentalsService.getInstance();
        const data = await service.getRentalById(id);
        if (data) {
          setRental(data);
        } else {
          throw new Error('Rental not found');
        }
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Failed to fetch rental'),
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRental();
  }, [id]);

  return { rental, loading, error };
}
