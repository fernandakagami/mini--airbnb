import Head from "next/head";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { Product } from "@/shared/interfaces/product";
import { ProductCard } from "@/components/ProductCard";
import { api } from "@/config/api";
import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { filterProductsByQuery } from "@/shared/utils/filter-products-by-query";

interface HomeProps {
	products: Product[];
}

export default function Home({ products }: HomeProps) {
	return (
		<>
			<Head>
				<title>Mini-Airbnb | Página Inicial</title>
			</Head>

			<main>
				<h1 className="mb-6 mt-4 text-2xl font-bold">Encontre o lugar perfeito para sua estadia</h1>

				<Suspense fallback={<ProductCardSkeleton />}>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
						{products.map((product) => {
							return (
								<Link href={`/acomodacao/${product.id}`} key={product.id + Math.random()}>
									<ProductCard product={product} />
								</Link>
							);
						})}
					</div>
				</Suspense>
			</main>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const response = await api.get("/");

	const filteredProducts = filterProductsByQuery(response.data, query);

	return {
		props: {
			products: filteredProducts,
		},
	};
};
