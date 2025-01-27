import { useState, useEffect } from 'react';
import type { Rental } from '@features/rentals/types';
import { RentalsService } from '@features/rentals/services';

export function useRentals() {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const service = RentalsService.getInstance();
        const data = await service.getAllRentals();
        setRentals(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Failed to fetch rentals'),
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRentals();
  }, []);

  return { rentals, loading, error };
}
