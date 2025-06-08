import { Dot, MapPin, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

export function ProductDescriptionSkeleton() {    
  return (
    <div className="container mx-auto px-4 py-8">        
      <div className="relative -mx-10 md:mx-0">
        <Skeleton className="w-full h-96" />   
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">         
        <div className="md:col-span-2 space-y-8">            
          <div className="flex flex-col gap-4">
            <Skeleton className="h-9 w-96 mt-4" />
            
            <div className="text-gray-500 flex flex-row items-center gap-1 text-sm md:text-base">
              <MapPin size={12} />
              <Skeleton className="h-6 w-32" />
            </div>

            <div className="text-gray-500 flex flex-row items-center gap-1 text-sm md:text-base">
              <Skeleton className="h-6 w-32" />
              <Dot size={12} />
              <Skeleton className="h-6 w-32" />
              <Dot size={12} />
              <Skeleton className="h-6 w-32" />
            </div>

            <div className="flex flex-row items-end justify-between w-full gap-2">
              <Badge className="text-sm md:text-base"><Skeleton className="h-5 w-20" /></Badge>
              <div className="flex flex-row gap-1 items-end">             
                <Star size={13} className="text-yellow-500 mb-0.5" fill="currentColor" />
                <Skeleton className="h-3 w-10" />            
                <Skeleton className="h-3 w-10" />
              </div>
            </div>
          </div>

          <Separator className="!mt-8 md:sr-only not-sr-only"/>

          <div>
            <h2 className="text-xl font-semibold mb-3">Sobre este espaço</h2>
            <Skeleton className="h-6 w-32" />       
          </div>

          <Separator className="!mt-8 md:sr-only not-sr-only"/>
        
          <div>
            <h2 className="text-xl font-semibold mb-4">Comodidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 4 }).map((_, index) => {
                return (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg border">
                    <Skeleton className="w-5 h-5 mr-3" />
                    <Skeleton className="text-sm" />                    
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <Separator className="!my-2 md:sr-only not-sr-only"/>
        
        <div className="md:col-span-1">
          <Card className="mt-0 md:mt-6">
            <CardContent className="flex flex-col gap-4 mt-5">
              <div className="flex flex-row justify-between items-end">
                <Skeleton className="h-6 w-32" />               
                <p className="text-gray-500 text-sm">Preço por noite</p>                
              </div>

              <Skeleton className="h-10 w-full" />              
            </CardContent>
          </Card>         
        </div>
      </div>
    </div>
  )
}

