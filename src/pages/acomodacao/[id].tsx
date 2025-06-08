import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head";
import { Product } from "@/shared/interfaces/product";
import { api } from "@/config/api";
import { ProductDescription } from "@/components/ProductDescription";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ProductDescriptionSkeleton } from "@/components/ProductDescriptionSkeleton";
import { Suspense } from "react";

interface ProductProps {
  product: Product;      
}

export default function ProductPage({ product }: ProductProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Mini-Airbnb | {product.title} </title>
      </Head>

      <main>
        <Button variant="ghost" onClick={() => router.back()} className="p-0">
          <ArrowLeft className="!w-6 !h-6" />
        </Button>


        <Suspense fallback={<ProductDescriptionSkeleton />}>
          <ProductDescription product={product} />
        </Suspense>        
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const id = params?.id;

  const response = await api.get("/");

  const product = response.data.find((product: Product) => product.id === id);

  return {
    props: {
      product: {
        id: product.id,
        title: product.title,
        description: product.description,
        city: product.city,
        state: product.state,
        country: product.country,
        pricePerNight: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(product.pricePerNight),
        maxGuests: product.maxGuests,
        bedrooms: product.bedrooms,
        bathrooms: product.bathrooms,
        propertyType: product.propertyType,
        imageUrl: product.imageUrl,
        amenities: product.amenities,
        rating: product.rating,
        numberOfReviews: product.numberOfReviews,
        isAvailable: product.isAvailable,
      }
    },
    revalidate: 60 * 60 * 1 // 1 hours
  }
}