import { render, screen } from "@testing-library/react";

import { ProductCard } from ".";

const mockProduct = {
	id: "1",
	title: "Apartamento moderno no centro",
	description: "Apartamento completo e bem localizado, ideal para casais e executivos.",
	city: "São Paulo",
	state: "SP",
	country: "Brasil",
	pricePerNight: 280,
	maxGuests: 2,
	bedrooms: 1,
	bathrooms: 1,
	propertyType: "Apartamento",
	imageUrl: "https://source.unsplash.com/featured/?apartment",
	amenities: ["Wi-Fi", "Ar-condicionado", "Cozinha", "Estacionamento"],
	rating: 4.7,
	numberOfReviews: 124,
	isAvailable: true,
};

describe("ProductCard", () => {
	test("renders product details correctly", () => {
		render(<ProductCard product={mockProduct} />);

		expect(screen.getByText("Apartamento moderno no centro")).toBeInTheDocument();

		expect(screen.getByText("São Paulo, SP, Brasil")).toBeInTheDocument();

		expect(screen.getByText("4,7")).toBeInTheDocument();

		expect(screen.getByText("124 avaliações")).toBeInTheDocument();

		expect(screen.getByText("R$ 280,00")).toBeInTheDocument();

		expect(screen.queryByText("Acomodação não disponível")).not.toBeInTheDocument();
	});

	test("shows StatusBadge when product is unavailable", () => {
		const unavailableProduct = { ...mockProduct, isAvailable: false };

		render(<ProductCard product={unavailableProduct} />);

		expect(screen.getByText("Acomodação não disponível")).toBeInTheDocument();
	});
});
