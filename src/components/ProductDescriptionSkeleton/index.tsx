import { Dot, MapPin, Star } from "lucide-react";

import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

export function ProductDescriptionSkeleton() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="relative -mx-10 md:mx-0">
				<Skeleton className="h-96 w-full" />
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div className="space-y-8 md:col-span-2">
					<div className="flex flex-col gap-4">
						<Skeleton className="mt-4 h-9 w-96" />

						<div className="flex flex-row items-center gap-1 text-sm text-gray-500 md:text-base">
							<MapPin size={12} />
							<Skeleton className="h-6 w-32" />
						</div>

						<div className="flex flex-row items-center gap-1 text-sm text-gray-500 md:text-base">
							<Skeleton className="h-6 w-32" />
							<Dot size={12} />
							<Skeleton className="h-6 w-32" />
							<Dot size={12} />
							<Skeleton className="h-6 w-32" />
						</div>

						<div className="flex w-full flex-row items-end justify-between gap-2">
							<Badge className="text-sm md:text-base">
								<Skeleton className="h-5 w-20" />
							</Badge>
							<div className="flex flex-row items-end gap-1">
								<Star size={13} className="mb-0.5 text-yellow-500" fill="currentColor" />
								<Skeleton className="h-3 w-10" />
								<Skeleton className="h-3 w-10" />
							</div>
						</div>
					</div>

					<Separator className="not-sr-only !mt-8 md:sr-only" />

					<div>
						<h2 className="mb-3 text-xl font-semibold">Sobre este espaço</h2>
						<Skeleton className="h-6 w-32" />
					</div>

					<Separator className="not-sr-only !mt-8 md:sr-only" />

					<div>
						<h2 className="mb-4 text-xl font-semibold">Comodidades</h2>
						<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
							{Array.from({ length: 4 }).map((_, index) => {
								return (
									<div key={index} className="flex items-center rounded-lg border bg-white p-3">
										<Skeleton className="mr-3 h-5 w-5" />
										<Skeleton className="text-sm" />
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
								<Skeleton className="h-6 w-32" />
								<p className="text-sm text-gray-500">Preço por noite</p>
							</div>

							<Skeleton className="h-10 w-full" />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
