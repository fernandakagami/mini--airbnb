import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function StatusBadge({ textSize = "text-sm" }) {
  return (
    <Badge variant="destructive" className={cn(`absolute top-4 right-4 opacity-80`, textSize)}>Acomodação não disponível</Badge>    
  )
}
