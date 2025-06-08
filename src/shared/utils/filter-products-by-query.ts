import { Product } from "../interfaces/product";

export function filterProductsByQuery(products: Product[], query: Record<string, any>) {
  return products.filter((product) => {
    // Filter city
    if (query.city && !product.city.includes(query.city)) {
      return false;
    }

    // Filter state
    if (query.state && product.state !== query.state) {
      return false;
    }

    // Filter minPrice
    if (query.minPrice !== undefined && product.pricePerNight <= query.minPrice) {
      return false;
    }

    // Filter maxPrice
    if (query.maxPrice !== undefined && product.pricePerNight >= query.maxPrice) {
      return false;
    }

    // Filter propertyType
    if (query.propertyType && product.propertyType !== query.propertyType) {
      return false;
    }

    // Filter maxGuests
    if (query.maxGuests && product.maxGuests < query.maxGuests) {
      return false;
    }

    // Filter bedrooms
    if (query.bedrooms && product.bedrooms > query.bedrooms) {
      return false;
    }

    // Filter amenities (if query has amenities array)
    if (
      query.amenities &&
      query.amenities.length > 0 &&
      !filterAmenitiesProductsByQuery(query.amenities, product)
    ) {      
      return false;
    }

    // Filter isAvailable
    if (query.isAvailable && !product.isAvailable) {
      return false;
    }

    return true;
  });
}

function filterAmenitiesProductsByQuery(query: string, product: Product) {  
  const amenitiesQuery = query.split(',').map((s: string) => s.trim());    
  
  return amenitiesQuery.every((amenity: string) => product.amenities.includes(amenity));  
}
