import { Product } from "@/shared/interfaces/product";
import Image from "next/image";
import notFound from '../../../public/not_found.jpg';
import { useCallback, useState } from "react";
import { Bath, Bed, Divide, Dot, MapPin, Star, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { amenitiesParser } from "@/shared/data/amenities-parser";
import { EAmenities } from "@/shared/enums/amenity";
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
      return 's';
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
          className="w-full h-96 object-cover rounded-lg"
          onError={handleError}
          aria-description={product.title}
          priority={false}
        />

        {product.isAvailable ? null : <StatusBadge textSize="text-lg" /> } 
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">         
        <div className="md:col-span-2 space-y-8">            
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold md:text-start text-center mt-4">{product.title}</h2>
            
            <div className="text-gray-500 flex flex-row items-center gap-1 text-sm md:text-base">
              <MapPin size={12} />
              <p>{product.city}, {product.state}, {product.country}</p>
            </div>

            <div className="text-gray-500 flex flex-row items-center gap-1 text-sm md:text-base">
              <p>{product.maxGuests} hóspede{hasMoreThanOne(product.maxGuests)}</p>
              <Dot size={12} />
              <p>{product.bedrooms} quarto{hasMoreThanOne(product.bedrooms)}</p>
              <Dot size={12} />
              <p>{product.bathrooms} banheiro{hasMoreThanOne(product.bathrooms)}</p>
            </div>

            <div className="flex flex-row items-end justify-between w-full gap-2">
              <Badge className="text-sm md:text-base">{product.propertyType}</Badge>
              <div className="flex flex-row gap-1 items-end">             
                <Star size={13} className="text-yellow-500 mb-0.5" fill="currentColor" />
                <span className="text-yellow-500 font-bold text-sm md:text-[1rem]/[1.2rem]">{product.rating.toString().replace(".", ",")}</span>
                <span className="text-gray-500 text-xs md:text-sm">({product.numberOfReviews} avaliações)</span>              
              </div>
            </div>
          </div>

          <Separator className="!mt-8 md:sr-only not-sr-only"/>

          <div>
            <h2 className="text-xl font-semibold mb-3">Sobre este espaço</h2>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <Separator className="!mt-8 md:sr-only not-sr-only"/>
        
          <div>
            <h2 className="text-xl font-semibold mb-4">Comodidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {product.amenities.map((amenity) => {
                const { icon: IconComponent, label } = amenitiesParser[amenity as EAmenities] || {};
                return (
                  <div key={amenity} className="flex items-center p-3 bg-white rounded-lg border">
                    {IconComponent && <IconComponent className="w-5 h-5 mr-3 text-gray-600" />}
                    <span className="text-sm">{label || amenity}</span>
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
                <p className="text-xl font-bold">                  
                  {product.pricePerNight}
                </p>
                <p className="text-gray-500 text-sm">Preço por noite</p>                
              </div>

              {product.isAvailable ? 
                <ReservationModal />: 
                <Button disabled>Não disponível</Button>
              }              
            </CardContent>
          </Card>         
        </div>
      </div>
    </div>
  )
}

