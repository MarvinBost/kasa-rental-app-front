import { useState, useEffect } from 'react';
import type { Rental } from '@features/rentals/types';
import { RentalsService } from '@features/rentals/services';

/**
 * Custom hook to fetch rental data by ID.
 *
 * @param {string} id - The ID of the rental to fetch.
 * @returns {Rental | null} return.rental - The rental data, or null if not found.
 * @returns {boolean} return.loading - The loading state, true if the data is still being fetched.
 * @returns {Error | null} return.error - The error state, or null if no error occurred.
 *
 * @example // Usage
 * const { rental, loading, error } = useRental('1');
 */
export function useRental(id: string): {
  rental: Rental | null;
  loading: boolean;
  error: Error | null;
} {
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
