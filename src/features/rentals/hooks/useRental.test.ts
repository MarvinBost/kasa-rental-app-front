import { renderHook, waitFor } from '@testing-library/react';
import { useRental } from './useRental';
import { RentalsService } from '@features/rentals/services';

jest.mock('@features/rentals/services');

describe('useRental hook', () => {
  it('should set error when rental not found', async () => {
    RentalsService.getInstance = jest.fn().mockReturnValue({
      getRentalById: jest.fn().mockResolvedValue(null),
    });

    const { result } = renderHook(() => useRental('non-existing-id'));

    await waitFor(() => {
      expect(result.current.error).toEqual(new Error('Rental not found'));
    });
  });

  it('should set error when service fails', async () => {
    RentalsService.getInstance = jest.fn().mockReturnValue({
      getRentalById: jest
        .fn()
        .mockRejectedValue(new Error('Failed to fetch rental')),
    });

    const { result } = renderHook(() => useRental('1'));

    await waitFor(() => {
      expect(result.current.error).toEqual(new Error('Failed to fetch rental'));
    });
  });

  it('should set rental when rental is found', async () => {
    const mockRental = { id: '1', name: 'Test Rental' }; // Replace with actual rental structure
    RentalsService.getInstance = jest.fn().mockReturnValue({
      getRentalById: jest.fn().mockResolvedValue(mockRental),
    });

    const { result } = renderHook(() => useRental('1'));

    await waitFor(() => {
      expect(result.current.rental).toEqual(mockRental);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
    });
  });
});
