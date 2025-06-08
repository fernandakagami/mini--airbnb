import { render, screen } from "@testing-library/react";

import { ProductDescription } from ".";

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

describe("ProductDescription", () => {
	test("renders product details correctly", () => {
		render(<ProductDescription product={mockProduct} />);

		expect(screen.getByText("Apartamento moderno no centro")).toBeInTheDocument();
		expect(screen.getByText("São Paulo, SP, Brasil")).toBeInTheDocument();
		expect(screen.getByText("2 hóspedes")).toBeInTheDocument();
		expect(screen.getByText("1 quarto")).toBeInTheDocument();
		expect(screen.getByText("1 banheiro")).toBeInTheDocument();
		expect(screen.getByText("Apartamento")).toBeInTheDocument();
		expect(screen.getByText("4,7")).toBeInTheDocument();
		expect(screen.getByText("280")).toBeInTheDocument();
		expect(screen.getByText("Wi-Fi")).toBeInTheDocument();
		expect(screen.getByText("Ar-condicionado")).toBeInTheDocument();
		expect(screen.getByText("Cozinha")).toBeInTheDocument();
		expect(screen.getByText("Estacionamento")).toBeInTheDocument();
		expect(
			screen.getByText("Apartamento completo e bem localizado, ideal para casais e executivos."),
		).toBeInTheDocument();
		expect(screen.queryByText("Reservar")).toBeInTheDocument();
		expect(screen.queryByText("Não disponível")).not.toBeInTheDocument();
	});

	test("shows StatusBadge when product is unavailable", () => {
		const unavailableProduct = { ...mockProduct, isAvailable: false };
		render(<ProductDescription product={unavailableProduct} />);
		expect(screen.queryByText("Reservar")).not.toBeInTheDocument();
		expect(screen.getByText("Não disponível")).toBeInTheDocument();
	});
});
