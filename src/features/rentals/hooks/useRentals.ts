import { useState, useEffect } from 'react';
import type { Rental } from '@features/rentals/types';
import { RentalsService } from '@features/rentals/services';

/**
 * Custom hook to fetch and manage rental data.
 *
 * @returns {Rental[]} return.rentals - An array of rental objects.
 * @returns {boolean} return.loading - The loading state, true if the data is still being fetched.
 * @returns {Error | null} return.error - The error state, or null if no error occurred.
 *
 * @example // Usage
 * { rentals, loading, error } = useRentals();
 */
export function useRentals(): {
  rentals: Rental[];
  loading: boolean;
  error: Error | null;
} {
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
