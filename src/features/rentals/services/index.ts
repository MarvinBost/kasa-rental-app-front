import axios from 'axios';
import type { Rental } from '@features/rentals/types';

export class RentalsService {
  private static instance: RentalsService;
  private rentals: Rental[] = [];
  private dataLoaded: boolean = false;
  private constructor() {}

  private async loadRentals(): Promise<void> {
    if (!this.dataLoaded) {
      console.log(process.env);
      const rentalsUrl = `/kasa-rental-app-front/rentals.json`;
      try {
        const response = await axios.get<Rental[]>(rentalsUrl);
        const data = Array.isArray(response.data) ? response.data : [];
        this.rentals = data;
        this.dataLoaded = true;
      } catch (error) {
        console.error(
          'Erreur lors du chargement des données des locations :',
          error,
        );
        throw new Error('Impossible de charger les données des locations.');
      }
    }
  }

  public static getInstance(): RentalsService {
    if (!RentalsService.instance) {
      RentalsService.instance = new RentalsService();
    }
    return RentalsService.instance;
  }

  public async getAllRentals(): Promise<Rental[]> {
    await this.loadRentals();
    return this.rentals;
  }

  public async getRentalById(id: string): Promise<Rental | undefined> {
    await this.loadRentals();
    return this.rentals.find((rental) => rental.id === id);
  }

  public async searchRentals(query: string): Promise<Rental[]> {
    await this.loadRentals();
    const lowercaseQuery = query.toLowerCase();
    return this.rentals.filter(
      (rental) =>
        rental.title.toLowerCase().includes(lowercaseQuery) ||
        rental.location.toLowerCase().includes(lowercaseQuery) ||
        rental.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
    );
  }
}
