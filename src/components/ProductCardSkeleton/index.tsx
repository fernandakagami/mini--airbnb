import { Card, CardContent } from "../ui/card";
import { MapPin, Star } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

export function ProductCardSkeleton() {  
  return (    
    <Card className="w-full h-auto relative">      
      
      <div>
        <Skeleton className="h-[520px] w-full" />        
      </div>
      

      <CardContent className="pt-6 flex flex-col gap-1">          
        <Skeleton className="text-lg" />        

        <div className="text-gray-500 flex flex-row items-center gap-1 text-sm">
          <MapPin size={12} />
          <Skeleton />
        </div>

        <div className="mt-2 flex flex-col">
          <div className="flex flex-row justify-between">
            <span className="text-xs flex flex-row items-center gap-1">
              <Star size={15} className="text-yellow-500" fill="currentColor" />
              <Skeleton />
              <Skeleton />
            </span>            
            <Skeleton />
          </div>            

          <div className="w-full">
            <p className="text-end text-gray-500 text-sm -mt-1">por noite</p>            
          </div>

        </div>                   
      </CardContent>
    </Card>  
    
    
  )
}