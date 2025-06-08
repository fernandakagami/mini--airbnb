import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Product } from "@/shared/interfaces/product";
import notFound from '../../../public/not_found.jpg';
import { useCallback, useState } from "react";
import { MapPin, Star } from "lucide-react";
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
    <Card className="w-full h-auto relative">

      {product.isAvailable ? null : <StatusBadge /> }      
      
      <div>
        <Image 
          src={imgSrc}
          alt={product.title}
          width={520}
          height={520}
          className="object-cover w-full h-auto"
          onError={handleError}
          aria-description={product.title}
          priority={false}          
        />
      </div>
      

      <CardContent className="pt-6 flex flex-col gap-1">          
        <p className="text-black font-semibold truncate text-lg">{product.title}</p>

        <div className="text-gray-500 flex flex-row items-center gap-1 text-sm">
          <MapPin size={12} />
          <p>{product.city}, {product.state}, {product.country}</p>
        </div>

        <div className="mt-2 flex flex-col">
          <div className="flex flex-row justify-between">
            <span className="text-xs flex flex-row items-center gap-1">
              <Star size={15} className="text-yellow-500" fill="currentColor" />
              <p className="font-bold">{product.rating.toString().replace(".", ",")}</p>
              (<span>{product.numberOfReviews} avaliações</span>)
            </span>            
            <p className="font-bold text-lg">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.pricePerNight)}
            </p>
          </div>            

          <div className="w-full">
            <p className="text-end text-gray-500 text-sm -mt-1">por noite</p>            
          </div>

        </div>                   
      </CardContent>
    </Card>  
    
    
  )
}