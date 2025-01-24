import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import Carousel from "../../../src/components/RentalDetail/Carousel";
import React from "react";

describe("Carousel", () => {
  const mockPictures = ["picture1.jpg", "picture2.jpg", "picture3.jpg"];

  test("affiche la première image et le compteur initialisés", () => {
    render(<Carousel pictures={mockPictures} altText="Test" />);
    const image = screen.getByAltText("Test - Image 1");
    expect(image).toBeInTheDocument();
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  test("passe à l'image suivante au clic sur Next", () => {
    render(<Carousel pictures={mockPictures} altText="Test" />);
    const nextButton = screen.getByRole("button", {name: /Next image/i});
    fireEvent.click(nextButton);
    expect(screen.getByAltText("Test - Image 2")).toBeInTheDocument();
    expect(screen.getByText("2 / 3")).toBeInTheDocument();
  });

  test("passe à l'image précédente au clic sur Prev", () => {
    render(<Carousel pictures={mockPictures} altText="Test" />);
    const nextButton = screen.getByRole("button", {name: /Next image/i});
    fireEvent.click(nextButton);
    const prevButton = screen.getByRole("button", {name: /Previous image/i});
    fireEvent.click(prevButton);
    expect(screen.getByAltText("Test - Image 1")).toBeInTheDocument();
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });
});
