import {renderHook, waitFor} from "@testing-library/react";
import {useRentals} from "../../src/hooks/useRentals";
import {RentalsService} from "../../src/services/api/rentals";

jest.mock("../../src/services/api/rentals");

describe("useRentals hook", () => {
  it("should fetch rentals correctly", async () => {
    const mockRentals = [
      {id: "1", title: "Test Rental", location: "Paris", tags: []},
      {id: "2", title: "Another Rental", location: "London", tags: []},
    ];

    // Mocking RentalsService to return mock data
    RentalsService.getInstance = jest.fn().mockReturnValue({
      getAllRentals: jest.fn().mockResolvedValue(mockRentals),
    });

    const {result} = renderHook(() => useRentals());

    // Wait for the hook to finish loading and state to update
    await waitFor(() => expect(result.current.loading).toBe(false));

    // Test the result
    expect(result.current.rentals).toEqual(mockRentals);
    expect(result.current.error).toBeNull();
  });

  it("should handle error correctly", async () => {
    // Mocking RentalsService to throw an error
    RentalsService.getInstance = jest.fn().mockReturnValue({
      getAllRentals: jest
        .fn()
        .mockRejectedValue(new Error("Failed to fetch rentals")),
    });

    const {result} = renderHook(() => useRentals());

    // Wait for the hook to finish loading and state to update
    await waitFor(() => expect(result.current.loading).toBe(false));

    // Test the result
    expect(result.current.rentals).toEqual([]);
    expect(result.current.error).toEqual(new Error("Failed to fetch rentals"));
  });
});
