import Image from "next/image";
import { useCallback, useState } from "react";
import { MapPin, Star } from "lucide-react";

import { Product } from "@/shared/interfaces/product";

import { Card, CardContent } from "../ui/card";
import notFound from "../../../public/not_found.jpg";
import { StatusBadge } from "../StatusBadge";

interface ProductCardProps {
	product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
	const [imgSrc, setImgSrc] = useState(product.imageUrl);

	const handleError = useCallback(() => {
		setImgSrc(notFound.src);
	}, []);

	return (
		<Card className="relative h-auto w-full">
			{product.isAvailable ? null : <StatusBadge />}

			<div>
				<Image
					src={imgSrc}
					alt={product.title}
					width={520}
					height={520}
					className="h-auto w-full object-cover"
					onError={handleError}
					aria-description={product.title}
					priority={false}
				/>
			</div>

			<CardContent className="flex flex-col gap-1 pt-6">
				<p className="truncate text-lg font-semibold text-black">{product.title}</p>

				<div className="flex flex-row items-center gap-1 text-sm text-gray-500">
					<MapPin size={12} />
					<p>
						{product.city}, {product.state}, {product.country}
					</p>
				</div>

				<div className="mt-2 flex flex-col">
					<div className="flex flex-row justify-between">
						<span className="flex flex-row items-center gap-1 text-xs">
							<Star size={15} className="text-yellow-500" fill="currentColor" />
							<p className="font-bold">{product.rating.toString().replace(".", ",")}</p>(
							<span>{product.numberOfReviews} avaliações</span>)
						</span>
						<p className="text-lg font-bold">
							{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.pricePerNight)}
						</p>
					</div>

					<div className="w-full">
						<p className="-mt-1 text-end text-sm text-gray-500">por noite</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
