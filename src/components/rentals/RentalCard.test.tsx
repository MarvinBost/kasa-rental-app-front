import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RentalCard from './RentalCard';
import { type Rental } from '@features/rentals/types';
import '@testing-library/jest-dom';

describe('RentalCard component', () => {
  const rental: Rental = {
    id: '1',
    title: 'Test Rental',
    location: 'Paris',
    tags: [],
    cover: 'https://via.placeholder.com/300',
    pictures: [],
    description: '',
    host: { name: '', picture: '' },
    rating: '',
    equipments: [],
  };

  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <RentalCard rental={rental} loading={false} />
      </MemoryRouter>,
    );

    // Vérifie que le titre de la location est rendu
    const titleElement = screen.getByText(rental.title);
    expect(titleElement).toBeInTheDocument();

    // Vérifie que l'image de couverture est rendue avec le bon alt text
    const coverImage = screen.getByAltText(rental.title);
    expect(coverImage).toBeInTheDocument();
    expect(coverImage).toHaveAttribute('src', rental.cover);

    // Vérifie que le lien est correct
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', `/rental/${rental.id}`);
  });

  it('should handle missing cover image gracefully', () => {
    const incompleteRental = { ...rental, cover: '' };

    render(
      <MemoryRouter>
        <RentalCard rental={incompleteRental} loading={false} />
      </MemoryRouter>,
    );

    // Vérifie que l'image n'est pas rendue ou que la source est vide
    const imgElement = screen.getByAltText(rental.title);
    expect(imgElement).toHaveAttribute('alt', rental.title);
    expect(imgElement).toHaveAttribute(
      'src',
      'https://via.placeholder.com/300',
    );
  });
});
