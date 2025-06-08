export interface Product {
  id: string,
  title: string,
  description: string,
  city: string,
  state: string,
  country: string,
  pricePerNight: number,
  maxGuests: number,
  bedrooms: number,
  bathrooms: number,
  propertyType: string,
  imageUrl: string,
  amenities: string[],
  rating: number,
  numberOfReviews: number,
  isAvailable: boolean
}