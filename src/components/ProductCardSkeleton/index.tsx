import { MapPin, Star } from "lucide-react";

import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function ProductCardSkeleton() {
	return (
		<Card className="relative h-auto w-full">
			<div>
				<Skeleton className="h-[520px] w-full" />
			</div>

			<CardContent className="flex flex-col gap-1 pt-6">
				<Skeleton className="text-lg" />

				<div className="flex flex-row items-center gap-1 text-sm text-gray-500">
					<MapPin size={12} />
					<Skeleton />
				</div>

				<div className="mt-2 flex flex-col">
					<div className="flex flex-row justify-between">
						<span className="flex flex-row items-center gap-1 text-xs">
							<Star size={15} className="text-yellow-500" fill="currentColor" />
							<Skeleton />
							<Skeleton />
						</span>
						<Skeleton />
					</div>

					<div className="w-full">
						<p className="-mt-1 text-end text-sm text-gray-500">por noite</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
