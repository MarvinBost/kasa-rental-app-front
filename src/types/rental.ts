export type Host = {
  name: string;
  picture: string;
};

export type Rental = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: Host;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};

export type RentalCard = Pick<Rental, "id" | "title" | "cover">;
