import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function StatusBadge({ textSize = "text-sm" }) {
	return (
		<Badge variant="destructive" className={cn(`absolute right-4 top-4 opacity-80`, textSize)}>
			Acomodação não disponível
		</Badge>
	);
}
