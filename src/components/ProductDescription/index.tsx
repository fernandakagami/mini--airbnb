import Image from "next/image";
import { useCallback, useState } from "react";
import { Dot, MapPin, Star } from "lucide-react";
import notFound from "@public/not_found.jpg";

import { Product } from "@/shared/interfaces/product";
import { amenitiesParser } from "@/shared/data/amenities-parser";
import { EAmenities } from "@/shared/enums/amenity";

import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { StatusBadge } from "../StatusBadge";
import { ReservationModal } from "../ReservationModal";

interface ProductDescriptionProps {
	product: Product;
}

export function ProductDescription({ product }: ProductDescriptionProps) {
	const [imgSrc, setImgSrc] = useState(product.imageUrl);

	const handleError = useCallback(() => {
		setImgSrc(notFound.src);
	}, []);

	const hasMoreThanOne = useCallback((value: number) => {
		if (value > 1) {
			return "s";
		}
	}, []);

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="relative -mx-10 md:mx-0">
				<Image
					src={imgSrc}
					alt={product.title}
					width={1200}
					height={600}
					className="h-96 w-full rounded-lg object-cover"
					onError={handleError}
					aria-description={product.title}
					fetchPriority="high"
				/>

				{product.isAvailable ? null : <StatusBadge textSize="text-lg" />}
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div className="space-y-8 md:col-span-2">
					<div className="flex flex-col gap-4">
						<h2 className="mt-4 text-center text-3xl font-semibold md:text-start">{product.title}</h2>

						<div className="flex flex-row items-center gap-1 text-sm text-gray-500 md:text-base">
							<MapPin size={12} />
							<p>
								{product.city}, {product.state}, {product.country}
							</p>
						</div>

						<div className="flex flex-row items-center gap-1 text-sm text-gray-500 md:text-base">
							<p>
								{product.maxGuests} hóspede{hasMoreThanOne(product.maxGuests)}
							</p>
							<Dot size={12} />
							<p>
								{product.bedrooms} quarto{hasMoreThanOne(product.bedrooms)}
							</p>
							<Dot size={12} />
							<p>
								{product.bathrooms} banheiro{hasMoreThanOne(product.bathrooms)}
							</p>
						</div>

						<div className="flex w-full flex-row items-end justify-between gap-2">
							<Badge className="text-sm md:text-base">{product.propertyType}</Badge>

							<div className="flex flex-row items-end gap-1">
								<Star size={13} className="mb-0.5 text-yellow-500" fill="currentColor" />

								<span className="text-sm font-bold text-yellow-500 md:text-[1rem]/[1.2rem]">
									{product.rating.toString().replace(".", ",")}
								</span>

								<span className="text-xs text-gray-500 md:text-sm">({product.numberOfReviews} avaliações)</span>
							</div>
						</div>
					</div>

					<Separator className="not-sr-only !mt-8 md:sr-only" />

					<div>
						<h2 className="mb-3 text-xl font-semibold">Sobre este espaço</h2>
						<p className="leading-relaxed text-gray-700">{product.description}</p>
					</div>

					<Separator className="not-sr-only !mt-8 md:sr-only" />

					<div>
						<h2 className="mb-4 text-xl font-semibold">Comodidades</h2>
						<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
							{product.amenities.map((amenity) => {
								const { icon: IconComponent, label } = amenitiesParser[amenity as EAmenities] || {};
								return (
									<div key={amenity} className="flex items-center rounded-lg border bg-white p-3">
										{IconComponent && <IconComponent className="mr-3 h-5 w-5 text-gray-600" />}
										<span className="text-sm">{label || amenity}</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<Separator className="not-sr-only !my-2 md:sr-only" />

				<div className="md:col-span-1">
					<Card className="mt-0 md:mt-6">
						<CardContent className="mt-5 flex flex-col gap-4">
							<div className="flex flex-row items-end justify-between">
								<p className="text-xl font-bold">{product.pricePerNight}</p>
								<p className="text-sm text-gray-500">Preço por noite</p>
							</div>

							{product.isAvailable ? <ReservationModal /> : <Button disabled>Não disponível</Button>}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
